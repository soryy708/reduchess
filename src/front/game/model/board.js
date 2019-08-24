import view from '../view';

const initialRepresentation = [
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['',  '',  '',  '',  '',  '',  '',  ''],
    ['',  '',  '',  '',  '',  '',  '',  ''],
    ['',  '',  '',  '',  '',  '',  '',  ''],
    ['',  '',  '',  '',  '',  '',  '',  ''],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
];

function isPiece(piece) {
    return piece !== '';
}

function isWhite(piece) {
    return isPiece(piece) && piece.toUpperCase() === piece;
}

function isBlack(piece) {
    return isPiece(piece) && piece.toLowerCase() === piece;
}

function getColor(piece) {
    if (isWhite(piece)) {
        return 'white';
    }
    if (isBlack(piece)) {
        return 'black';
    }
}

function getType(piece) {
    switch (piece.toLowerCase()) {
        case 'r':
            return 'rook';
        case 'n':
            return 'knight';
        case 'b':
            return 'bishop';
        case 'q':
            return 'queen';
        case 'k':
            return 'king';
        case 'p':
            return 'pawn';
    }
}

function reduceBoardState(moves) {
    function internalRepresentationToPublicInterface(boardState) {
        return boardState.map(pieceArray => pieceArray.map((piece) => {
            return {
                isPiece: () => isPiece(piece),
                isWhite: () => isWhite(piece),
                isBlack: () => isBlack(piece),
                getColor: () => getColor(piece),
                getType: () => getType(piece),
            };
        }));
    }

    function reduceInternalRepresentation(moves) {
        // TODO: Use memoization optimization
        const boardState = JSON.parse(JSON.stringify(initialRepresentation));
        moves.forEach((move) => {
            boardState[move.to.y][move.to.x] = boardState[move.from.y][move.from.x];
            boardState[move.from.y][move.from.x] = '';
            // TODO: Castling
        });
        return boardState;
    }

    return internalRepresentationToPublicInterface(reduceInternalRepresentation(moves));
}

function selectTile(x, y) {
    view.markSelected(x, y);
}

function clearSelectedTiles() {
    view.clearSelected();
}

export default {
    private: {
        isPiece,
        isWhite,
        isBlack,
        getColor,
        getType,
    },
    reduceBoardState,
    selectTile,
    clearSelectedTiles,
};
