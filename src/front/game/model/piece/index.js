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
                return new bishopPiece(boardCell.getColor(), boardState, x, y);
            case 'king':
                return new kingPiece(boardCell.getColor(), boardState, x, y);
            case 'knight':
                return new knightPiece(boardCell.getColor(), boardState, x, y);
            case 'pawn':
                return new pawnPiece(boardCell.getColor(), boardState, x, y);
            case 'queen':
                return new queenPiece(boardCell.getColor(), boardState, x, y);
            case 'rook':
                return new rookPiece(boardCell.getColor(), boardState, x, y);
        }
    }
}

export default {
    fromBoardCell,
};
