import AbstractPiece from './abstract';

export default class Queen extends AbstractPiece {
    constructor(boardState, x, y) {
        super(boardState, x, y);
    }

    isValidMove(to) {
        const movementVector = {x: to.x - this.x, y: to.y - this.y};

        if (!super.isValidMove(to)) {
            return false;
        }

        // Can move in any direction
        if (!(
            (movementVector.x === 0 && movementVector.y !== 0) ||
            (movementVector.x !== 0 && movementVector.y === 0) ||
            Math.abs(movementVector.x) === Math.abs(movementVector.y)
        )) {
            return false;
        }

        if (!super.pathIsVacant(to)) {
            return false;
        }

        return true;
    }
}
