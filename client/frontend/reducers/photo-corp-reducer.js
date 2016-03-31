const initialState = {
    mainImageSrc: null,
    isTranslate: false,
    isSize: false,
    boxStyle: {
        width: 150,
        height: 150,
        transform: 'translate(0, 0)'
    },
    boxPosition: {
        x: 0,
        y: 0
    },
    mousePosition: {
        x: null,
        y: null
    },
    size:{
        width: null,
        height: null,
        naturalWidth: null,
        naturalHeight: null
    },
    addImageStyle: {
        transform: 'translate(0, 0)'
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

var setSizeFlag = function (state, action) {
    console.log(action.value);
    return Object.assign({}, state, {
        isSize: action.value
    });
};

var setMousePosition = function (state, action) {
    return {...state,
        mousePosition: {
            x: action.x,
            y: action.y
        }
    };
};

var setBoxPosition = function (state, action) {
    var newState = Object.assign({}, state, {
        boxPosition: {
            x: action.x,
            y: action.y
        }
    });

    newState.boxStyle.transform = `translate(${action.x}px, ${action.y}px)`;
    newState.addImageStyle.transform = `translate(${-action.x}px, ${-action.y}px)`;

    return newState;
};

var setSize = function (state, action) {
    return Object.assign({}, state, {
        size: {
            width: action.width,
            height: action.height,
            naturalWidth: action.naturalWidth,
            naturalHeight: action.naturalHeight
        }
    });
};

var setBoxSize = function (state, action) {
    return Object.assign({}, state, {
        boxStyle: {
            width: action.size,
            height: action.size
        }
    });
};

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_MAIN_IMAGE':
            return setMainImage(state, action);

        case 'SET_TRANSLATE':
            return setTranslate(state, action);

        case 'SET_MOUSE_POSITION':
            return setMousePosition(state, action);

        case 'SET_BOX_POSITION':
            return setBoxPosition(state, action);

        case 'SET_SIZE':
            return setSize(state, action);

        case 'SET_SIZE_FLAG':
            return setSizeFlag(state, action);

        case 'SET_BOX_SIZE':
            return setBoxSize(state, action);

        default: return state;
    }
};