import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// context
const UserContext = createContext(null);


// setup to consume it
export const useUser = () => {
    const context = useContext(UserContext);
    return context;
}


// provider
export const UserProvider =({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const userFromLocalStorage = localStorage.getItem("user");

        if (userFromLocalStorage) {
            setUser(JSON.parse(userFromLocalStorage));
        }
    }, [])

    const signInUser = () => {
        // here ypou implement the sigin in logic
        // lets assume the signin is successfull

        const userObject = {
            name: 'Alefed Hitchcock',
            email: 'alfred@example.com'
        }

        setUser(userObject);
        localStorage.setItem('user', JSON.stringify(userObject));
        navigate('/')
    }

    return (
        <UserContext.Provider
            value={{
                user,
                signInUser
            }}
        >
            { children } 
        </UserContext.Provider>
    )
}