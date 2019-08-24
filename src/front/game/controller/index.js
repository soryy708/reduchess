import view from '../view';
import model from '../model';
import modelConst from '../model/const';
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
                chessBoardModel.clearHighlightedTiles();
                currentState = null;
                break;
            default:
                if (boardState[y][x].isPiece()) {
                    selectedTile = {x, y};
                    chessBoardModel.selectTile(x, y);
                    currentState = 'selected';

                    for (let y = 0; y < modelConst.chess_board_height; ++y) {
                        for (let x = 0; x < modelConst.chess_board_width; ++x) {
                            if (isValidMove(selectedTile, {x, y})) {
                                chessBoardModel.highlightTile(x, y);
                            }
                        }
                    }
                }
        }
    };
})();

view.initialize(onTileClick);
model.initialize();
