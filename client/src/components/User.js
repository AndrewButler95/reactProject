import React from 'react'
import PropTypes from 'prop-types'

const User = ({ onClick, highlight, text }) => (
    <div
    onClick={onClick}
    className={highlight ? 'active' : 'test'}
  >
    {text}
    </div>
)

User.propTypes = {
  onClick: PropTypes.func.isRequired,
  highlight: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default User
