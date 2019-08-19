import chessBoard from './chess/board';
import chessPiece from './chess/piece';
import chessRepresentation from './chess/representation';

let board = null;

function updateView(boardState) {
    if (!boardState) {
        boardState = chessRepresentation.getInitial();
    }

    for (let y = 0; y < 8; ++y) {
        for (let x = 0; x < 8; ++x) {
            const tile = chessBoard.getTile(board, x, y);
            const tileState = boardState[y][x];

            while (tile.firstChild) {
                tile.removeChild(tile.firstChild);
            }
            if (chessRepresentation.isPiece(tileState)) {
                const pieceType = chessRepresentation.getType(tileState);
                const pieceColor = chessRepresentation.getColor(tileState);
                tile.appendChild(chessPiece.create(pieceType, pieceColor));
            }
        }
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

function initialize() {
    board = chessBoard.create();
    document.body.appendChild(board);
    updateView();
}

initialize();

export default {
    updateView,
    markSelected,
    clearSelected,
};
