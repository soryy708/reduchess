import chessBoardTile from './boardTile';

const chess_board_width = 8;
const chess_board_height = 8;

/**
 * Deduce the color a tile needs to be based on its (x,y) coordinates on a chess board
 * @param {Number} x horizontal coordinate of tile
 * @param {Number} y vertical coordinate of tile
 * @returns {String} 'black' or 'white', or `undefined` if parameters are invalid
 */
function deduceTileColor(x, y) {
    if (isNaN(x) || isNaN(y) || x < 0 || y < 0 || x >= chess_board_width || y >= chess_board_height) {
        return undefined;
    }

    let shouldBeBlack = x % 2;
    if (y % 2) {
        shouldBeBlack = !shouldBeBlack;
    }
    return shouldBeBlack ? 'black' : 'white';
}

function create() {
    const chessBoard = document.createElement('div');
    chessBoard.className = 'chess-board';

    for (let tile_i = 0; tile_i < chess_board_height; ++tile_i) {
        for (let tile_j = 0; tile_j < chess_board_width; ++tile_j) {
            const tile = chessBoardTile.create(deduceTileColor(tile_j, tile_i));
            chessBoard.appendChild(tile);
        }
    }

    function scaleChessBoard(e) {
        const playAreaMargin = 32;
        const playAreaWidth = window.innerWidth - playAreaMargin;
        const playAreaHeight = window.innerHeight - playAreaMargin;
        const chessBoardSize = Math.min(playAreaWidth, playAreaHeight);
        const chessBoardTileSize = chessBoardSize / chess_board_width;
        chessBoard.style.fontSize = `${chessBoardTileSize}px`;
    }
    window.addEventListener('resize', scaleChessBoard);
    scaleChessBoard();
    
    return chessBoard;
}

export default {
    private: {
        deduceTileColor,
    },
    create,
};
