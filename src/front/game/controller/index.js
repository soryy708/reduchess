import view from '../view';
import model from '../model';
import chessBoardModel from '../model/board';
import chessMovesModel from '../model/moves';
import pieceModel from '../model/piece';

function isValidMove(from, to) {
    const boardState = chessBoardModel.reduceBoardState(chessMovesModel.getAll());
    const piece = pieceModel.fromBoardCell(boardState, from.x, from.y);
    return piece.isValidMove(to);
}

const onTileClick = (function() {
    let currentState = null;
    let selectedTile = null;

    return function(x, y) {
        const boardState = chessBoardModel.reduceBoardState(chessMovesModel.getAll());

        switch (currentState) {
            case 'selected':
                if (isValidMove(selectedTile, {x, y})) {
                    chessMovesModel.push(selectedTile, {x, y});
                }
                chessBoardModel.clearSelectedTiles();
                currentState = null;
                break;
            default:
                if (boardState[y][x].isPiece()) {
                    selectedTile = {x, y};
                    chessBoardModel.selectTile(x, y);
                    currentState = 'selected';
                }
        }
    };
})();

view.initialize(onTileClick);
model.initialize();
