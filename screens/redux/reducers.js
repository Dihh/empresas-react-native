const INITIAL_STATE = { accessToken: '', client: '', uid: '' }
export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'login':
            return {
                accessToken: action.payload.accessToken, client: action.payload.client, uid: action.payload.uid
            };
        default:
            return state
    }
}