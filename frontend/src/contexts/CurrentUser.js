import { createContext, useEffect, useState } from "react";


export const CurrentUser = createContext()

function CurrentUserProvider({ children }) {
    useEffect(() => {
        const getLoggedInUser = async () => {
            try {
                let response = await fetch('***')
                let user = await response.json();
                setCurrentUser(user);
            } catch (e) {
                debugger;
            }
        }
        getLoggedInUser();
    }, [])

    const [currentUser, setCurrentUser] = useState(null)

    return (
        <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </CurrentUser.Provider>
    )
}

export default CurrentUserProvider