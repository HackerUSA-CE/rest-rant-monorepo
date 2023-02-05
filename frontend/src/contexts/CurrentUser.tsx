import { createContext, useState, useEffect } from "react";

type ButtonProps = {
    children: React.ReactNode;
  };

  export const CurrentUser = createContext({
    currentUser: {
      firstName: '',
      lastName: '',
      userId: 0,
      role: ''
    },
    setCurrentUser: (_value: Object) => {}
  });
  
  const CurrentUserProvider: React.FunctionComponent<ButtonProps> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
  
    const getLoggedInUser = async () => {
      let response = await fetch("http://localhost:5000/authentication/profile", {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      let user = await response.json();
      setCurrentUser(user);
      console.log("sign in successful", user)
    };
  
    useEffect(() => {
      getLoggedInUser();
    }, []);
  
    return (
      <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
        {children}
      </CurrentUser.Provider>
    );
  }
  
  export default CurrentUserProvider;