const initialState = {
    title: 'Home page'
};

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case 'HELLO':
            return Object.assign({}, state, { hello: true });

        default: return state;
    }
};