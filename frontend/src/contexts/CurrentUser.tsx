import { createContext, useState } from "react";


export const CurrentUser = createContext({})

function CurrentUserProvider({ children }: any){

    const [currentUser, setCurrentUser] = useState(null)

    return (
        <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </CurrentUser.Provider>
    )
}

export default CurrentUserProvider