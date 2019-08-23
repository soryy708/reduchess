export default class AbstractPiece {
    constructor(color, boardState, x, y) {
        this.color = color.toLowerCase();
        this.boardState = boardState;
        this.x = x;
        this.y = y;
    }
    
    isBlack() {
        return this.color === 'black';
    }

    isWhite() {
        return this.color === 'white';
    }

    isValidMove(to) {
        const movingPiece = this.boardState[this.y][this.x];
        const eatenPiece = this.boardState[to.y][to.x];

        // Must move
        if (this.x === to.x && this.y === to.y) {
            return false;
        }

        // Can't move a non-piece
        if (!movingPiece.isPiece()) {
            return false;
        }

        // Can't eat friendly pieces
        if (eatenPiece.isPiece()) {
            if (eatenPiece.getColor() === movingPiece.getColor()) {
                return false;
            }
        }

        return true;
    }
}
