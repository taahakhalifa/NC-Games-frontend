import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../contexts/UserContext'
import { getUsers } from '../utils/api';
import UserCards from "./UserCards"
import Header from "./Header"
import HeaderNav from "./HeaderNav"
import { Alert, AlertTitle } from "@mui/material";
import { Link } from "react-router-dom";


function Login() {
    const { setIsLoading, setIsError, users, setUsers, isError, isLoading } = useContext(UserContext);
    const [error, setError] = useState()

    useEffect(() => {
        getUsers()
            .then((usersFromApi) => {
                setIsLoading(false);
                setUsers(usersFromApi);
            })
            .catch((err) => {
                setIsLoading(false);
                setIsError(true);
                setIsError(err)
            });
    }, []);

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return (
        <Alert severity="error">
            {" "}
            <AlertTitle>
                <strong>{error.status}</strong>
            </AlertTitle>
            <p className="error-message">{error.data.msg}</p>
            <Link to="/">
                <button
                    className="back-button-error"
                    onClick={() => {
                        setIsError(false);
                    }}
                >
                    Go Back
                </button>
            </Link>
        </Alert>
    );
}

  return (
    <section>
      <Header />
            <HeaderNav />
      <h2 className='list-title'>Select User</h2>
      <UserCards users={users}/>
    </section>
  )
}

export default Login
