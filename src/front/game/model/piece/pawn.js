import AbstractPiece from './abstract';

export default class Pawn extends AbstractPiece {
    constructor(boardState, x, y) {
        super(boardState, x, y);
    }

    isValidMove(to) {
        function wasNeverMoved(piece, x, y) {
            const black_pawns_row = 1;
            const white_pawns_row = 6;
            if (piece.isPiece()) {
                if (piece.isWhite()) {
                    return y === white_pawns_row;
                }
                if (piece.isBlack()) {
                    return y === black_pawns_row;
                }
            }
            return false;
        }

        const movementVector = {x: to.x - this.x, y: to.y - this.y};
        const movingPiece = this.boardState[this.y][this.x];
        const eatenPiece = this.boardState[to.y][to.x];
        const validDirection = this.isBlack() ? 1 : -1;

        if (!super.isValidMove(to)) {
            return false;
        }

        if (eatenPiece.isPiece()) {
            // Can eat only diagonally
            if (!(Math.abs(movementVector.x) === 1 && movementVector.y === validDirection)) {
                return false;
            }
        } else {
            // Can only move vertically
            if (movementVector.x !== 0) {
                return false;
            }

            if (Math.abs(movementVector.y) === 2) {
                // Can not move 2 tiles if was moved before
                if (!wasNeverMoved(movingPiece, this.x, this.y)) {
                    return false;
                }

                // Can not jump over a piece
                if (!super.pathIsVacant(to)) {
                    return false;
                }

            } else if (Math.abs(movementVector.y) !== 1) {
                // Can not move more than 2 tiles vertically
                return false;
            }
        }

        return true;
    }
}
