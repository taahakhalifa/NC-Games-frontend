import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function Header() {
    const { review_id } = useParams();
    const navigate = useNavigate();
    const {
        loggedInUser,
        isLoggedIn,
        setIsLoggedIn,
        handlePrevPath,
    } = useContext(UserContext);

    return (
        <div>
            {window.location.pathname === "/" && (
                <header className="header">
                    <Link to="/">
                        <h1 className="header-content active-header">
                            NC GAMES
                        </h1>
                    </Link>
                    {!isLoggedIn && (
                        <button
                            className="Login-Button"
                            onClick={() => {
                                handlePrevPath(window.location.pathname);
                                navigate("/login");
                            }}
                        >
                            Login
                        </button>
                    )}
                    {isLoggedIn && (
                        <div className="logged-in-user">
                            <img
                                src={loggedInUser.avatar_url}
                                alt={`${loggedInUser.username} profile pic`}
                                className="logged-in-img"
                            />
                            <p className="logged-in-username">
                                @{loggedInUser.username}
                            </p>
                            <button
                                className="SignOut-Button"
                                onClick={() => {
                                    setIsLoggedIn(false);
                                    navigate("/");
                                }}
                            >
                                Sign Out
                            </button>
                        </div>
                    )}
                </header>
            )}

            {window.location.pathname === "/login" && (
                <header className="header">
                    <Link to="/">
                        <h1 className="header-content active-header">
                            NC GAMES
                        </h1>
                    </Link>
                    <button
                        className="Back-Button"
                        onClick={() => navigate("/")}
                    >
                        Home
                    </button>
                </header>
            )}

            {window.location.pathname === "/reviews" ||
            window.location.pathname === "/categories" ||
            window.location.pathname === `/reviews/${review_id}` 
            ? (
                <header className="header">
                    <Link to="/">
                        <h1 className="header-content active-header">
                            NC GAMES
                        </h1>
                    </Link>
                    {!isLoggedIn && (
                        <button
                            className="Login-Button"
                            onClick={() => {
                                handlePrevPath(window.location.pathname);
                                navigate("/login");
                            }}
                        >
                            Login
                        </button>
                    )}
                    {isLoggedIn && (
                        <div className="logged-in-user">
                            <img
                                src={loggedInUser.avatar_url}
                                alt={`${loggedInUser.username} profile pic`}
                                className="logged-in-img"
                            />
                            <p className="logged-in-username">
                                @{loggedInUser.username}
                            </p>
                            <button
                                className="SignOut-Button"
                                onClick={() => {
                                    setIsLoggedIn(false);
                                    navigate("/");
                                }}
                            >
                                Sign Out
                            </button>
                        </div>
                    )}
                </header>
            ) : (
                " "
            )}
        </div>
    );
}

export default Header;
