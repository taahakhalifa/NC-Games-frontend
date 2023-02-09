import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function Header({ users, setUsers }) {
    const navigate = useNavigate();
    const { loggedInUser } = useContext(UserContext);

    const handleLogin = () => {
        navigate("/login");
    };

    const handleBackButton = () => {
        navigate("/");
    };

    const handleSignOut = () => {
        navigate("/");
    };

    return (
        <div>
            {window.location.pathname === "/" ? (
                <header className="header">
                    <h1 className="header-content">NC GAMES</h1>
                    <button className="Login-Button" onClick={handleLogin}>
                        Login
                    </button>
                </header>
            ) : window.location.pathname === "/login" ? (
                <header className="header">
                    <h1 className="header-content">NC GAMES</h1>
                    <button className="Back-Button" onClick={handleBackButton}>
                        Go Back
                    </button>
                </header>
            ) : (
                <header className="header">
                    <h1 className="header-content">NC GAMES</h1>
                    <div className="logged-in-user">
                        <img
                            src={loggedInUser.avatar_url}
                            alt={`${loggedInUser.username} profile picture`}
                            className="logged-in-img"
                        />
                        <p className="logged-in-username">
                            @{loggedInUser.username}
                        </p>
                    <button className="SignOut-Button" onClick={handleSignOut}>
                        Sign Out
                    </button>
                    </div>
                </header>
            )}
        </div>
    );
}

export default Header;
