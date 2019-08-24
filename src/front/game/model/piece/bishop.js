import AbstractPiece from './abstract';

export default class Bishop extends AbstractPiece {
    constructor(boardState, x, y) {
        super(boardState, x, y);
    }

    isValidMove(to) {
        const movementVector = {x: to.x - this.x, y: to.y - this.y};

        if (!super.isValidMove(to)) {
            return false;
        }

        // Can only move diagonally
        if (!(Math.abs(movementVector.x) === Math.abs(movementVector.y))) {
            return false;
        }

        // TODO: Can not jump over pieces

        return true;
    }
}
