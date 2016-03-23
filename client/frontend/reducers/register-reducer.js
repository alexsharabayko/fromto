const initialState = {
    title: 'Register page',
    goro: 'Goro 22',

    fields: [
        {
            name: 'username',
            title: 'Username',
            type: 'text',
            visited: false,
            pattern: '^[a-zA-Z0-9]+$',
            minLength: 6,
            maxLength: 20,
            errorMessage: null
        },
        {
            name: 'password',
            title: 'Password',
            type: 'password',
            visited: false,
            pattern: '^[a-zA-Z0-9!@#$%^&*()_+=-]+$',
            minLength: 6,
            maxLength: 20,
            errorMessage: null
        },
        {
            name: 'email',
            title: 'Email',
            type: 'email',
            visited: false,
            pattern: '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$',
            errorMessage: null
        },
        {
            name: 'firstName',
            title: 'First Name',
            type: 'text',
            visited: false,
            pattern: null,
            minLength: 2,
            errorMessage: null
        },
        {
            name: 'lastName',
            title: 'Last Name',
            type: 'text',
            visited: false,
            pattern: null,
            minLength: 2,
            errorMessage: null
        }
    ]
};

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case 'HELLO':
            return Object.assign({}, state, { hello: true });

        case 'GORO':
            return Object.assign({}, state, { goro: action.text });

        case 'SET_VISITED':
            var newState = Object.assign({}, state),
                field = newState.fields.find(f => f.name === action.fieldName);

            if (field) {
                field.visited = true;
            }

            return newState;

        default: return state;
    }
};