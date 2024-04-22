import { useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./user-context";
import userReducer from "./user-reducer";
import fakeLogin from "../services/fake-login";

export default function UserProvider({ children }) {
    const userFromLocalStorage = localStorage.getItem("user");
    const initialState = userFromLocalStorage ? JSON.parse(userFromLocalStorage) : null;

    const [userState, dispatchUser] = useReducer(userReducer, initialState);
    const navigate = useNavigate();

    // Effect to persist state to local storage
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(userState));
    }, [userState])

    const signInUser = async (username) => {
        const response = await fakeLogin(username)

        if (response.ok) {
            dispatchUser({ type: "LOGIN", payload: response.user })
        }
        navigate('/')
    }

    return (
        <UserContext.Provider
            value={{
                userState,
                signInUser
            }}
        >
            { children } 
        </UserContext.Provider>
    )
}