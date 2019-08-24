import AbstractPiece from './abstract';

export default class Knight extends AbstractPiece {
    constructor(boardState, x, y) {
        super(boardState, x, y);
    }

    isValidMove(to) {
        const movementVector = {x: to.x - this.x, y: to.y - this.y};

        if (!super.isValidMove(to)) {
            return false;
        }

        if (!(
            (Math.abs(movementVector.x) === 1 && Math.abs(movementVector.y) === 2) ||
            (Math.abs(movementVector.x) === 2 && Math.abs(movementVector.y) === 1)
        )) {
            return false;
        }

        return true;
    }
}
