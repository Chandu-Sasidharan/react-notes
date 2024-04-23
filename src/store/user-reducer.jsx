export default function userReducer(state, action) {
    console.log(action);
    
    if (action.type === 'LOGIN') {
        return { ...action.payload }
    }

    if (action.type === 'LOGOUT') {
        return null;
    }

    if (action.type === 'UPDATE_USER') {
        return { ...state, username: action.payload }
    }

    return state;
}