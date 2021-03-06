import React from 'react'
import PropTypes from 'prop-types'
import '../css/Link.css'

const Link = ({ active, children, onClick }) => (
    <button className = "styleButton"
       onClick={onClick}
       disabled={active}
    >
      {children}
    </button>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link