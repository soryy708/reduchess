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

        return true;
    }
}
