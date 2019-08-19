import chessBoardTile from './boardTile';
import events from '../events';

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
            tile.addEventListener('click', () => {
                events.tileClick(tile_j, tile_i);
            });
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

/**
 * 
 * @param {*} board 
 * @param {*} x Number for index (left to right) starting at 0, or string from 'a' to 'h' (left to right)
 * @param {*} y Number for index (top to bottom) starting at 0, or string from '1' to '8' (bottom to top)
 */
function getTile(board, x, y) {
    function isString(o) {
        return typeof o === 'string' || o instanceof String;
    }

    function strToAscii(str) {
        str = str.trim().toLowerCase();
        if (str.length < 1) {
            return;
        }
        return str.charCodeAt(0);
    }

    if (isString(x)) {
        x = strToAscii(x) - 'a'.charCodeAt(0);
    }
    if (isString(y)) {
        y = strToAscii(y) - '0'.charCodeAt(0);
        y = chess_board_height - y;
    }

    const tiles = board.getElementsByClassName('chess-board-tile');
    const desired_index = x + (y * chess_board_width);
    if (desired_index >= 0 && desired_index < tiles.length) {
        return tiles[desired_index];
    }
}

export default {
    private: {
        deduceTileColor,
    },
    create,
    getTile,
};
