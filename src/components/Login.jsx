import React, { useContext, useEffect } from 'react'
import { UserContext } from '../contexts/UserContext'
import { getUsers } from '../utils/api';
import UserCards from "./UserCards"


function Login() {
    const { setIsLoading, setIsError, users, setUsers, isError, isLoading } = useContext(UserContext);

    useEffect(() => {
        getUsers()
            .then((usersFromApi) => {
                setIsLoading(false);
                setUsers(usersFromApi);
            })
            .catch((err) => {
                setIsLoading(true);
                setIsError(true);
            });
    }, []);

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error</p>
  }

  return (
    <section>
      <h2 className='list-title'>Select User</h2>
      <UserCards users={users}/>
    </section>
  )
}

export default Login
