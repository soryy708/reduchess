import view from '../view';
import chessBoardModel from '../model/board';
import chessMovesModel from '../model/moves';

function chessMove(from, to) {
    chessMovesModel.push(from, to);
    view.update();
}

const onTileClick = (function() {
    let currentState = null;
    let selectedTile = null;

    return function(x, y) {
        switch (currentState) {
        case 'selected':
            if (!(selectedTile.x == x && selectedTile.y == y)) {
                chessMove(selectedTile, {x, y});
            }
            view.clearSelected();
            currentState = null;
            break;
        default:
            if (chessBoardModel.isPiece(chessBoardModel.reduceBoardState()[y][x])) {
                selectedTile = {x, y};
                view.markSelected(x, y);
                currentState = 'selected';
            }
        }
    };
})();

view.initialize(onTileClick);
