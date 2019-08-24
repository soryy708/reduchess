import modelConst from '../const';
import movesModel from '../moves';

export default class AbstractPiece {
    constructor(boardState, x, y) {
        this.color = boardState[y][x].getColor();
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

        // Can not move if it's not your turn
        if ((this.isWhite() && !movesModel.isWhiteMove()) || (this.isBlack() && !movesModel.isBlackMove())) {
            return false;
        }

        return true;
    }

    pathIsVacant(to) {
        /**
         * Like `Math.ceil` but if the parameter is negative, floor.
         * @param {Number} float 
         */
        function absoluteCeil(float) {
            if (float >= 0) {
                return Math.ceil(float);
            } else {
                return Math.floor(float);
            }
        }

        const movementVector = {x: to.x - this.x, y: to.y - this.y};
        const movementDistance = Math.sqrt(Math.pow(movementVector.x, 2) + Math.pow(movementVector.y, 2)); // `movementVector` magnitude
        const movementDirection = {x: movementVector.x / movementDistance, y: movementVector.y / movementDistance}; // normalized `movementVector`
        const discreteMovementDirection = {x: absoluteCeil(movementDirection.x), y: absoluteCeil(movementDirection.y)};

        let x = this.x + discreteMovementDirection.x;
        let y = this.y + discreteMovementDirection.y;
        while (x != to.x || y != to.y) {
            if (x < 0 || y < 0 || x >= modelConst.chess_board_width || y >= modelConst.chess_board_height) {
                console.warn('Piece movement validation check for path vacancy coordinates out of bounds');
                break;
            }

            const boardCell = this.boardState[y][x];
            if (boardCell.isPiece()) {
                return false;
            }

            x += discreteMovementDirection.x;
            y += discreteMovementDirection.y;
        }
        return true;
    }
}
