
import React from 'react'

const UserCards = ({ user }) => {

  const fullName = user.name.first + " " + user.name.last;

  return (
    <div className='box'>
      <img className='profile' src={user.picture.medium} alt={user.name.first} />
      <div className='userDetails'>
        <p className='usersName'>{fullName}</p>
        <p className='email'>{user.email}</p>
      </div>
    </div>
  )
}

export default UserCards