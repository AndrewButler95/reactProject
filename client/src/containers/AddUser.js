import React from 'react'
import { connect } from 'react-redux'
import { addUser } from '../actions'

const AddUser = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addUser(input.value))
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button className="styleButton" type="submit">
          Add User
        </button>
      </form>
    </div>
  )
}

export default connect()(AddUser)