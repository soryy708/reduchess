import chessBoard from './chess/board';
import chessPiece from './chess/piece';
import modelConst from '../model/const';

let board = null;

function update(boardState) {
    for (let y = 0; y < modelConst.chess_board_height; ++y) {
        for (let x = 0; x < modelConst.chess_board_width; ++x) {
            const tile = chessBoard.getTile(board, x, y);
            const tileState = boardState[y][x];

            while (tile.firstChild) {
                tile.removeChild(tile.firstChild);
            }
            if (tileState.isPiece()) {
                tile.appendChild(chessPiece.create(tileState.getType(), tileState.getColor()));
            }
        }
    }
}

function initialize(onTileClick) {
    if (!board) {
        board = chessBoard.create(onTileClick);
        document.body.appendChild(board);
    }
}

function markSelected(x, y) {
    const tile = chessBoard.getTile(board, x, y);
    tile.classList.add('chess-board-tile-selected');
}

function clearSelected() {
    const tiles = Array.from(document.getElementsByClassName('chess-board-tile-selected'));
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
