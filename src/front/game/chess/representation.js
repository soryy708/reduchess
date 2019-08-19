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

function getInitial() {
    return JSON.parse(JSON.stringify(initialRepresentation));
}

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

export default {
    getInitial,
    isPiece,
    isWhite,
    isBlack,
    getColor,
    getType,
};
