import { useHistory } from "react-router";

function Navigation() {

    const history = useHistory()

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
                <li>
                    <a href="#" onClick={() => history.push("/places/new")}>
                        Add Place
                    </a>
                </li>
                <li>
                    <a href="#" onClick={() => history.push("/sign-up")}>
                        Sign Up
                    </a>
                </li>
                <li>
                    <a href="#" onClick={() => history.push("/login")}>
                        Login
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;