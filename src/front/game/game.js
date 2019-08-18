function initializeChessBoard() {
    const chess_board_width = 8;
    const chess_board_height = 8;

    /**
     * 
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

    function createTile(x, y) {
        const new_element = document.createElement('div');
        const tile_color = deduceTileColor(x, y);
        new_element.className = `chess-board-tile chess-board-tile-${tile_color}`;
        new_element.addEventListener('mouseenter', () => {
            new_element.style.zIndex = '3';
        });
        new_element.addEventListener('mouseleave', () => {
            new_element.style.zIndex = '2';
            setTimeout(() => {
                if (new_element.style.zIndex === '2') {
                    new_element.style.zIndex = '';
                }
            }, 300);
        });
        return new_element;
    }

    const chessBoard = document.getElementById('chessBoard');
    for (let tile_i = 0; tile_i < chess_board_height; ++tile_i) {
        for (let tile_j = 0; tile_j < chess_board_width; ++tile_j) {
            const tile = createTile(tile_j, tile_i);
            chessBoard.appendChild(tile);
        }
    }

    function scaleChessBoard(e) {
        const playAreaMargin = 32;
        const playAreaWidth = window.innerWidth - playAreaMargin;
        const playAreaHeight = window.innerHeight - playAreaMargin;
        const chessBoardSize = Math.min(playAreaWidth, playAreaHeight);
        const chessBoardTileSize = chessBoardSize / chess_board_width;
        const chessBoard = document.getElementById('chessBoard');
        chessBoard.style.fontSize = `${chessBoardTileSize}px`;
    }
    window.addEventListener('resize', scaleChessBoard);
    scaleChessBoard();
}

function initialize() {
    initializeChessBoard();
}

initialize();
