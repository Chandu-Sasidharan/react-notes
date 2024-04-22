export default function userReducer(state, action) {
    if(action.type === 'LOGIN') {
        return { ...action.payload }
    }

    return state;
}