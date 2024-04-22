import { useContext } from "react";
import UserContext from "./user-context";

const useUser = () => {
    return useContext(UserContext);
}

export default useUser;