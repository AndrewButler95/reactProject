import React from 'react'
import PropTypes from 'prop-types'
import User from './User'

const UserList = function ({ users, toggleUser, highlightUser }) {
    if (users === undefined) {
        return <ul></ul>
    }
    else {
        return(
        <ul>
            {users.map(user =>
                <User
                    key={user.id}
                    {...user}
                    onClick={() => highlightUser(user.id)}
                />
            )}
        </ul>)
    }
}


UserList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired
}

export default UserList
