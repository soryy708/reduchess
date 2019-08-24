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
            // Can roam only straight. If never moved before, can jump twice the distance
            const maxDistance = wasNeverMoved(movingPiece, this.x, this.y) ? 2 : 1;
            if (!(movementVector.x === 0 && Math.abs(movementVector.y) <= maxDistance && movementVector.y * validDirection > 0)) {
                return false;
            }
            // Can not jump over pieces
            if (maxDistance === 2 && Math.abs(movementVector.y) === maxDistance && this.boardState[this.y + validDirection][this.x].isPiece()) {
                return false;
            }
        }

        return true;
    }
}
