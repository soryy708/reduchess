import movesModel from './moves';

/**
 * Has to happen after the view has been initialized
 */
function initialize() {
    movesModel.empty();
}

export default {
    initialize,
};
