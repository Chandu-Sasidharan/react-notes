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

    const signOutUser = () => {
        dispatchUser({ type: "LOGOUT" })
        navigate('/')
    }

    const updateUser = (username) => {
        dispatchUser({ type: "UPDATE_USER", payload: username })
        navigate('/dashboard')
    }

    return (
        <UserContext.Provider
            value={{
                userState,
                signInUser,
                signOutUser,
                updateUser
            }}
        >
            { children } 
        </UserContext.Provider>
    )
}