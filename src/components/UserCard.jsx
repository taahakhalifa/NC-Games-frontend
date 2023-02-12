import React from 'react'
import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";


function UserCard({ user, users }) {
  const navigate = useNavigate()
  const { setLoggedInUser, setIsLoggedIn, isLoggedIn, prevPath, setPrevPath } = useContext(UserContext);

  const handleLogin = () => {
    setLoggedInUser(user)
    setIsLoggedIn(true)
  }

  useEffect(() => {
    if (isLoggedIn) {
      navigate(prevPath);
    }
  }, [isLoggedIn, prevPath]);
  
  return (
    <div >
      <li className="user-card">
              <img src={user.avatar_url} alt={`${user.username}'s Avatar`} className="user-card-avatar" />
              <div className="user-card-info">
                <h3 className="user-card-username">{user.username}</h3>
                <p className="user-card-name">Name: {user.name}</p>
                <button className="user-card-button" onClick={handleLogin}>Select</button>
              </div>
            </li>
    </div>
  )
}

export default UserCard
