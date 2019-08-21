import view from '../view';
import model from '../model';
import chessBoardModel from '../model/board';
import chessMovesModel from '../model/moves';

const onTileClick = (function() {
    let currentState = null;
    let selectedTile = null;

    return function(x, y) {
        const boardState = chessBoardModel.reduceBoardState(chessMovesModel.getAll());

        switch (currentState) {
        case 'selected':
            if (!(selectedTile.x == x && selectedTile.y == y)) {
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
