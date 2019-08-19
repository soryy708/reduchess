import game from './game';
import chessRepresentation from './chess/representation';

const moves = [];

function reduceBoardState() {
    const boardState = chessRepresentation.getInitial();
    for (const move of moves) {
        boardState[move.to.y][move.to.x] = boardState[move.from.y][move.from.x];
        boardState[move.from.y][move.from.x] = '';
        // TODO: Swapping king with rook
    }
    return boardState;
}

function chessMove(source, destination) {
    moves.push({
        from: source,
        to: destination,
    });

    game.updateView(reduceBoardState());
}

const tileClick = (function() {
    let currentState = null;
    let selectedTile = null;

    return function(x, y) {
        switch (currentState) {
        case 'selected':
            if (!(selectedTile.x == x && selectedTile.y == y)) {
                chessMove(selectedTile, {x, y});
            }
            game.clearSelected();
            currentState = null;
            break;
        default:
            selectedTile = {x, y};
            game.markSelected(x, y);
            currentState = 'selected';
        }
    };
})();

export default {
    reduceBoardState,
    tileClick,
};
