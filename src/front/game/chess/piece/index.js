function create(type, color) {
    const el = document.createElement('i');
    el.className = `fa fa-chess-${type.toLowerCase()} chess-piece chess-piece-${color.toLowerCase()}`;
    return el;
}

export default {
    create,
};
