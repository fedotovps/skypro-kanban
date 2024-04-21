import { createContext, useContext } from "react";

export const UserContext = createContext(null);

export const useUserContext = () => {
    const user = useContext(UserContext);

    if(!user) {
        throw new Error("User's data not found");
    }

    return user;
}