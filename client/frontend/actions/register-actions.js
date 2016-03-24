export function setVisited (fieldName) {
    return { type: 'SET_VISITED', fieldName };
}

export function setAllVisited () {
    return { type: 'SET_ALL_VISITED' };
}

export function setErrorMessage (fieldName, errorMessage) {
    return { type: 'SET_ERROR_MESSAGE', fieldName, errorMessage };
}