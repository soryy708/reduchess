import AbstractPiece from './abstract';

export default class King extends AbstractPiece {
    constructor(boardState, x, y) {
        super(boardState, x, y);
    }

    isValidMove(to) {
        const movementVector = {x: to.x - this.x, y: to.y - this.y};

        if (!super.isValidMove(to)) {
            return false;
        }

        // Can move only 1 tile in any direction
        if (!(Math.abs(movementVector.x) <= 1 && Math.abs(movementVector.y) <= 1)) {
            return false;
        }

        // TODO: Can not move if results in check/mate

        // TODO: Castling
        // This moves the king two cells left or right, and the rook (on the left or right respectively) to the cell the king crossed
        // Predicates:
        // 1. King was never moved
        // 2. Rook involved was never moved
        // 3. The cells between the king & rook are unoccupied
        // 4. The king is not in check
        // 5. The king does not cross over or end on a cell attacked by an enemy piece

        return true;
    }
}
