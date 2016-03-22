const initialState = {
    title: 'Register page',
    goro: 'Goro 22',

    fields: {
        username: {
            valid: 0,
            errorMessage: null
        },
        password: {
            valid: 0,
            errorMessage: null
        },
        email: {
            valid: 0,
            errorMessage: null
        }
    }
};

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case 'HELLO':
            return Object.assign({}, state, { hello: true });

        case 'GORO':
            return Object.assign({}, state, { goro: action.text });

        default: return state;
    }
};