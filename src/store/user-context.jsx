import { createContext, useState, useContext } from "react";

// context
const UserContext = createContext(null);


// setup to consume it
export const useUser = () => {
    const context = useContext(UserContext);
    return context;
}


// provider
export const UserProvider =({ children }) => {
    const [user, setUser] = useState({ name: "Alfred Hitchcock", email: "alfred@example.com"});


    return (
        <UserContext.Provider
            value={{
                user,
            }}
        >
            { children } 
        </UserContext.Provider>
    )
}