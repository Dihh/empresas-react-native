const INITIAL_STATE = { accessToken: '', client: '', uid: '', show: '' }
export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'login':
            return {
                ...state, accessToken: action.payload.accessToken, client: action.payload.client, uid: action.payload.uid
            };
        case 'show':
            console.log(state);
            console.log(0, {
                ...state, show: action.payload
            })
            return {
                ...state, show: action.payload
            };
        default:
            return state
    }
}