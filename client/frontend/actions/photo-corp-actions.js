export function setMainImage (src) {
    return { type: 'SET_MAIN_IMAGE', src };
}

export function setTranslate (value) {
    return { type: 'SET_TRANSLATE', value };
}

export function setSizeFlag (value) {
    return { type: 'SET_SIZE_FLAG', value };
}

export function setMousePosition (x, y) {
    return { type: 'SET_MOUSE_POSITION', x, y };
}

export function setBoxPosition (x, y) {
    return { type: 'SET_BOX_POSITION', x, y };
}

export function setSize (width, height, naturalWidth, naturalHeight) {
    return { type: 'SET_SIZE', width, height, naturalWidth, naturalHeight };
}

export function setBoxSize (size) {
    return { type: 'SET_BOX_SIZE', size };
}