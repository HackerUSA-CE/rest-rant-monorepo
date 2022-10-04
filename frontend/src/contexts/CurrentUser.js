<<<<<<< HEAD
import { createContext, useState, useEffect } from "react";
=======
import { useEffect, createContext, useState } from "react";
>>>>>>> origin/9.3.10-solution-jwt


export const CurrentUser = createContext()

function CurrentUserProvider({ children }) {

    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
<<<<<<< HEAD

        const getLoggedInUser = async () => {
            let response = await fetch('http://localhost:5000/authentication/profile', {
                credentials: 'include'
=======
        const getLoggedInUser = async () => {
            let response = await fetch('http://localhost:5000/authentication/profile', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
>>>>>>> origin/9.3.10-solution-jwt
            })
            let user = await response.json()
            setCurrentUser(user)
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