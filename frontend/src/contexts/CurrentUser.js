import { createContext, useState, useEffect, React } from "react";
// import { CurrentUserProvider} from './contexts/CurrentUser';
import Navigation from "../Navigation";


export const CurrentUser = createContext()

function CurrentUserProvider({ children }){

    const [currentUser, setCurrentUser] = useState(null)
    useEffect (() => {
        const getLoggedInUser = async () => {
            let response = await fetch('http://localhost:5001/authentication/profile', {
                credentials: 'include'
            })
            let user = await response.jason()
            setCurrentUser(user)
        }
            getLoggedInUser()
        }, [])
        
   
    return (
        <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
            <Navigation />
            {children}
        </CurrentUser.Provider>
    )
    }

export default CurrentUserProvider