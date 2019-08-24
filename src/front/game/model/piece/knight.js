import AbstractPiece from './abstract';

export default class Knight extends AbstractPiece {
    constructor(color, boardState, x, y) {
        super(color, boardState, x, y);
    }

    isValidMove(to) {
        if (!super.isValidMove(to)) {
            return false;
        }

        if (!(
            (Math.abs(to.x - this.x) === 1 && Math.abs(to.y - this.y) === 2) ||
            (Math.abs(to.x - this.x) === 2 && Math.abs(to.y - this.y) === 1))) {
            return false;
        }

        return true;
    }
}
