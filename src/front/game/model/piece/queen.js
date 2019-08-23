import AbstractPiece from './abstract';

export default class Queen extends AbstractPiece {
    constructor(color, boardState, x, y) {
        super(color, boardState, x, y);
    }

    isValidMove(to) {
        const movingPiece = this.boardState[this.y][this.x];
        const eatenPiece = this.boardState[to.y][to.x];

        if (!super.isValidMove(to)) {
            return false;
        }

        if (eatenPiece.isPiece()) {
            // TODO
        } else {
            // TODO
        }

        return true;
    }
}
