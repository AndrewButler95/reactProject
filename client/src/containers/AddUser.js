import React from 'react'
import { connect } from 'react-redux'
import { addUser } from '../actions'
import { store } from '../store.js'

const AddUser = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        let state = store.getState();
        dispatch(addUser(state.users.length, input.value))
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