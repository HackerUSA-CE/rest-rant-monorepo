<<<<<<< HEAD
import { useEffect, createContext, useState } from "react";
=======
import { createContext, useState, useEffect } from "react";
>>>>>>> 93f6dd34b221f889f45549874125044add540910

export const CurrentUser = createContext();

function CurrentUserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const getLoggedInUser = async () => {
      let response = await fetch(
        "http://localhost:5000/authentication/profile",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      let user = await response.json();
      setCurrentUser(user);
    };
    getLoggedInUser();
  }, []);

<<<<<<< HEAD
function CurrentUserProvider({ children }) {

    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        const getLoggedInUser = async () => {
            let response = await fetch('http://localhost:5000/authentication/profile', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
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
=======
  window.setCurrentUser = setCurrentUser;
  return (
    <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUser.Provider>
  );
>>>>>>> 93f6dd34b221f889f45549874125044add540910
}

export default CurrentUserProvider;
