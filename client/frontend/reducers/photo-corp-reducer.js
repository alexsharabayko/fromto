const initialState = {
    mainImageSrc: null,
    isTranslate: false,
    boxStyle: {
        width: 150,
        height: 150,
        transform: 'translate(0, 0)',
        translateX: 0,
        translateY: 0
    }
};

var setMainImage = function (state, action) {
    return Object.assign({}, state, {
        mainImageSrc: action.src
    });
};

var setTranslate = function (state, action) {
    return Object.assign({}, state, {
        isTranslate: action.value
    });
};

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_MAIN_IMAGE':
            return setMainImage(state, action);

        case 'SET_TRANSLATE':
            return setTranslate(state, action);

        default: return state;
    }
};