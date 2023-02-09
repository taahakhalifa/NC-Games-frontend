import React from 'react'
import UserCard from './UserCard';

function UserCards({ users }) {
  return (
    <div>
      <ul className="card-list">
        {users.map((user) => {
          return (
            <UserCard user={user} users={users} key={user.username}/>
          );
        })}
      </ul>
    </div>
  );
}


export default UserCards
