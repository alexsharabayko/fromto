export function hello(settings) {
    return { type: 'HELLO'};
}

export function goro (text) {
    return { type: 'GORO', text };
}