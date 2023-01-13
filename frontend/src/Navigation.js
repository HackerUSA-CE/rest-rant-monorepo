import { useState, useEffect, useContext } from 'react'
import { useHistory } from "react-router";
import { CurrentUser } from './contexts/CurrentUser';

function Navigation() {

    const history = useHistory()

    const { currentUser } = useContext(CurrentUser)

    let loginActions = (
        <>
            <li style={{ float: 'right' }}>
                <a href="#" onClick={() => history.push("/sign-up")}>
                    Sign Up
                </a>
            </li>
            <li style={{ float: 'right' }}>
                <a href="#" onClick={() => history.push("/login")}>
                    Login
                </a>
            </li>
        </>
    )

    const handleLogOut = () => {
        localStorage.removeItem('token')
        window.location.reload(false)
    }

    if (currentUser) {
        loginActions = (
            <>
            <li style={{ float: 'right' }}>
                Logged in as {currentUser.firstName} {currentUser.lastName}
            </li>
            <li style={{ float: 'right' }}>
                <a href="#" onClick={handleLogOut}>
                    Log Out
                </a>
            </li>
            </>
        )
    }

    let addPlaceButton = null

    if (currentUser?.role === 'admin') {
        addPlaceButton = (
            <li>
                <a href='#' onClick={() => history.push("/places/new")}>
                    Add Place
                </a>
            </li>
        )
    }

    return (
        <nav>
            <ul>
                <li>
                    <a href="#" onClick={() => history.push("/")}>
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" onClick={() => history.push("/places")}>
                        Places
                    </a>
                </li>
                {addPlaceButton}
                {loginActions}
            </ul>
        </nav>
    )
}

export default Navigation;