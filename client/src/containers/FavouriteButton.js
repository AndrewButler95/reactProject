import React from 'react'
import { connect } from 'react-redux'
import { toggleUser } from '../actions'

const FavouriteButton = function ({ dispatch, user }) {
console.log("button pressed")
return (
  <div>
<button onSubmit={e => {
  e.preventDefault()
  dispatch(toggleUser())}} className="styleButton" type="submit">
Add Favourite
</button>
</div>
)
}

export default connect()(FavouriteButton)