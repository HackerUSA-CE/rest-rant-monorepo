import { useContext } from 'react'
import { useHistory } from "react-router";
import { CurrentUser } from './contexts/CurrentUser';

function Navigation() {

    const history = useHistory()

    const { currentUser } = useContext(CurrentUser)

    let loginActions = (
        <>
            <li style={{ float: 'right' }}>
                {/* Changed href from # to avoid warning   xx*/}
                <a href="/sign-up" onClick={() => history.push("/sign-up")}>
                    Sign Up
                </a>
            </li>
            <li style={{ float: 'right' }}>
                {/* Changed href from # to avoid warning   */}
                <a href="/login" onClick={() => history.push("/login")}>
                    Login
                </a>
            </li>
        </>
    )

    if (currentUser) {
        loginActions = (
            <li style={{ float: 'right' }}>
                Logged in as {currentUser.firstName} {currentUser.lastName}
            </li>
        )
    }

    return (
        <nav>
            <ul>
                <li>
                     {/* Changed href to / from # to avoid warning */}
                    <a href="/" onClick={() => history.push("/")}>
                        Home
                    </a>
                </li>
                <li>
                    {/* Changed href to / from # to avoid warning */}
                    <a href="/places" onClick={() => history.push("/places")}>
                        Places
                    </a>
                </li>
                <li>
                    {/* Changed href to / from # to avoid warning */}
                    <a href="/places/new" onClick={() => history.push("/places/new")}>
                        Add Place
                    </a>
                </li>
                {loginActions}
            </ul>
        </nav>
    )
}

export default Navigation;