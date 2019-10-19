export function login(headers) {
    const el = {};
    el.accessToken = headers['access-token'];
    el.client = headers.client;
    el.uid = headers.uid;
    return {
        type: 'login',
        payload: el
    }

}

export function show(id) {
    return {
        type: 'show',
        payload: id
    }

}