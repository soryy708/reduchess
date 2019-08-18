import chessBoard from './chess/board';
import chessPiece from './chess/piece';

function initialize() {
    const board = chessBoard.create();
    document.body.appendChild(board);

    for (let i = 0; i < 8; ++i) {
        const whitePlayerTile = chessBoard.getTile(board, i, '2');
        const blackPlayerTile = chessBoard.getTile(board, i, '7');
        whitePlayerTile.appendChild(chessPiece.create('pawn', 'white'));
        blackPlayerTile.appendChild(chessPiece.create('pawn', 'black'));
    }

    chessBoard.getTile(board, 'a', '1').appendChild(chessPiece.create('rook', 'white'));
    chessBoard.getTile(board, 'h', '1').appendChild(chessPiece.create('rook', 'white'));
    chessBoard.getTile(board, 'a', '8').appendChild(chessPiece.create('rook', 'black'));
    chessBoard.getTile(board, 'h', '8').appendChild(chessPiece.create('rook', 'black'));

    chessBoard.getTile(board, 'b', '1').appendChild(chessPiece.create('knight', 'white'));
    chessBoard.getTile(board, 'g', '1').appendChild(chessPiece.create('knight', 'white'));
    chessBoard.getTile(board, 'b', '8').appendChild(chessPiece.create('knight', 'black'));
    chessBoard.getTile(board, 'g', '8').appendChild(chessPiece.create('knight', 'black'));

    chessBoard.getTile(board, 'c', '1').appendChild(chessPiece.create('bishop', 'white'));
    chessBoard.getTile(board, 'f', '1').appendChild(chessPiece.create('bishop', 'white'));
    chessBoard.getTile(board, 'c', '8').appendChild(chessPiece.create('bishop', 'black'));
    chessBoard.getTile(board, 'f', '8').appendChild(chessPiece.create('bishop', 'black'));

    chessBoard.getTile(board, 'd', '1').appendChild(chessPiece.create('queen', 'white'));
    chessBoard.getTile(board, 'd', '8').appendChild(chessPiece.create('queen', 'black'));
    
    chessBoard.getTile(board, 'e', '1').appendChild(chessPiece.create('king', 'white'));
    chessBoard.getTile(board, 'e', '8').appendChild(chessPiece.create('king', 'black'));
}

initialize();
