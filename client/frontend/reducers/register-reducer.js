import language from 'constants/languages';

const initialState = {
    title: 'Register page',

    fields: [
        {
            name: 'username',
            title: language.translate('register.username.title'),
            type: 'text',
            visited: false,
            pattern: '^[a-zA-Z0-9]+$',
            minLength: 6,
            maxLength: 20,
            errorMessage: language.translate('register.validation.errorMessage.valueMissing', language.translate('register.username.title'))
        },
        {
            name: 'password',
            title: language.translate('register.password.title'),
            type: 'password',
            visited: false,
            pattern: '^[a-zA-Z0-9!@#$%^&*()_+=-]+$',
            minLength: 6,
            maxLength: 20,
            errorMessage: language.translate('register.validation.errorMessage.valueMissing', language.translate('register.password.title'))
        },
        {
            name: 'email',
            title: language.translate('register.email.title'),
            type: 'email',
            visited: false,
            pattern: '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$',
            errorMessage: language.translate('register.validation.errorMessage.valueMissing', language.translate('register.email.title'))
        },
        {
            name: 'firstName',
            title: language.translate('register.firstName.title'),
            type: 'text',
            visited: false,
            pattern: null,
            minLength: 2,
            errorMessage: language.translate('register.validation.errorMessage.valueMissing', language.translate('register.firstName.title'))
        },
        {
            name: 'lastName',
            title: language.translate('register.lastName.title'),
            type: 'text',
            visited: false,
            pattern: null,
            minLength: 2,
            errorMessage: language.translate('register.validation.errorMessage.valueMissing', language.translate('register.lastName.title'))
        }
    ]
};

var setVisited = function (state, action) {
    let newState = Object.assign({}, state);
    let field = newState.fields.find(f => f.name === action.fieldName);

    if (field) {
        field.visited = true;
    }

    return newState;
};

var setAllVisited = function (state) {
    return Object.assign({}, state, {
        fields: state.fields.map(field => Object.assign(field, { visited: true }))
    });
};

var setErrorMessage = function (state, action) {
    let newState = Object.assign({}, state);
    let field = newState.fields.find(f => f.name === action.fieldName);

    if (field) {
        field.errorMessage = action.errorMessage;
    }

    return newState;
};

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_VISITED':
            return setVisited(state, action);

        case 'SET_ALL_VISITED':
            return setAllVisited(state);

        case 'SET_ERROR_MESSAGE':
            return setErrorMessage(state, action);


        default: return state;
    }
};