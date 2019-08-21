import chessBoard from './chess/board';
import chessPiece from './chess/piece';
import chessBoardModel from '../model/board';
import modelConst from '../model/const';

let board = null;

function update() {
    const boardState = chessBoardModel.reduceBoardState();
    for (let y = 0; y < modelConst.chess_board_height; ++y) {
        for (let x = 0; x < modelConst.chess_board_width; ++x) {
            const tile = chessBoard.getTile(board, x, y);
            const tileState = boardState[y][x];

            while (tile.firstChild) {
                tile.removeChild(tile.firstChild);
            }
            if (chessBoardModel.isPiece(tileState)) {
                const pieceType = chessBoardModel.getType(tileState);
                const pieceColor = chessBoardModel.getColor(tileState);
                tile.appendChild(chessPiece.create(pieceType, pieceColor));
            }
        }
    }
}

function initialize(onTileClick) {
    if (!board) {
        board = chessBoard.create(onTileClick);
        document.body.appendChild(board);
        update();
    }
}

function markSelected(x, y) {
    const tile = chessBoard.getTile(board, x, y);
    tile.classList.add('chess-board-tile-selected');
}

function clearSelected() {
    const tiles = document.getElementsByClassName('chess-board-tile-selected');
    for (const tile of tiles) {
        tile.classList.remove('chess-board-tile-selected');
    }
}

export default {
    update,
    initialize,
    markSelected,
    clearSelected,
};
