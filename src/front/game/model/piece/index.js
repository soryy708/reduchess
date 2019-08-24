import bishopPiece from './bishop';
import kingPiece from './king';
import knightPiece from './knight';
import pawnPiece from './pawn';
import queenPiece from './queen';
import rookPiece from './rook';

function fromBoardCell(boardState, x, y) {
    const boardCell = boardState[y][x];
    if (boardCell.isPiece()) {
        switch (boardCell.getType()) {
            case 'bishop':
                return new bishopPiece(boardState, x, y);
            case 'king':
                return new kingPiece(boardState, x, y);
            case 'knight':
                return new knightPiece(boardState, x, y);
            case 'pawn':
                return new pawnPiece(boardState, x, y);
            case 'queen':
                return new queenPiece(boardState, x, y);
            case 'rook':
                return new rookPiece(boardState, x, y);
        }
    }
}

export default {
    fromBoardCell,
};
