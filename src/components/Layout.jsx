import React from 'react'
import UserCards from "./UserCards"

const Layout = ({users}) => {
    return (
        <div className="container">
            {users.map((user) =>
                <UserCards key={user.cell} user={user} />
            )}
        </div>
    )
}

export default Layout