import AbstractPiece from './abstract';

export default class Rook extends AbstractPiece {
    constructor(boardState, x, y) {
        super(boardState, x, y);
    }

    isValidMove(to) {
        const movementVector = {x: to.x - this.x, y: to.y - this.y};

        if (!super.isValidMove(to)) {
            return false;
        }

        // Can only move straight vertically/horizontally
        if (!((movementVector.x === 0 && movementVector.y !== 0) || (movementVector.x !== 0 && movementVector.y === 0))) {
            return false;
        }

        // TODO: Can not jump over pieces

        return true;
    }
}
