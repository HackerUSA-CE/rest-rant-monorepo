import { createContext, useState, useEffect } from "react";


export const CurrentUser = createContext()

function CurrentUserProvider({ children }){

    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {

        const getLoggedInUser = async () => {
            let response = await fetch(`${process.env.REACT_APP_SERVER_URL}profile`, { //http://localhost:5000/authentication/profile
                // credentials: 'include'
                
            })
            console.log(response)
            let user = await response.json()
            // console.log({user});
            setCurrentUser(user)

            return user
        }
        getLoggedInUser()
        
        
    }, [])

    


    return (
        <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </CurrentUser.Provider>
    )
}

export default CurrentUserProvider

