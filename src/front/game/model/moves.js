// TODO: Option to get algebraic notation
const moves = [];

function forEach(cb) {
    moves.forEach(cb);
}

function push(source, destination) {
    moves.push({
        from: source,
        to: destination,
    });
}

export default {
    forEach,
    push,
};
