/**
 * 
 * @param {String} color 
 */
function create(color) {
    const new_element = document.createElement('div');
    new_element.className = `chess-board-tile chess-board-tile-${color}`;

    // Note: zIndex=1 is for highlighted tiles
    new_element.addEventListener('mouseenter', () => {
        new_element.style.zIndex = '3';
    });
    new_element.addEventListener('mouseleave', () => {
        const cssTransitionTime = 300;

        new_element.style.zIndex = '2'; // Behind newly hovered but above highlighted
        setTimeout(() => {
            if (new_element.style.zIndex === '2') { // Has not been re-hovered
                new_element.style.zIndex = '';
            }
        }, cssTransitionTime);
    });

    return new_element;
}

export default {
    create,
};
