import boardModel from './board';
import view from '../view';

// TODO: Option to get algebraic notation
const moves = [];

function onUpdate() {
    const boardState = boardModel.reduceBoardState(moves);
    view.update(boardState);
}

function empty() {
    moves.splice(0, moves.length);
    onUpdate();
}

function push(source, destination) {
    moves.push({
        from: source,
        to: destination,
    });

    onUpdate();
}

function getAll() {
    return JSON.parse(JSON.stringify(moves));
}

function isWhiteMove() {
    return moves.length % 2 === 0;
}

function isBlackMove() {
    return !isWhiteMove();
}

export default {
    empty,
    push,
    getAll,
    isWhiteMove,
    isBlackMove,
};
