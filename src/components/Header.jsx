import React from 'react'

const Header = ({ setNextUser, isLoading }) => {

    const moreUsers = () => {
        setNextUser(currIndex => currIndex + 1);
    }

    return (
        <header>
            <h1 className="heading">Random Users</h1>
            {isLoading && (<p className="loader">loading....</p>)}
            <button onClick={moreUsers}>
                fetch more user
            </button>
        </header>
    )
}

export default Header