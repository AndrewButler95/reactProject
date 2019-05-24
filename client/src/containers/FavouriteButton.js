import React from 'react'
import { connect } from 'react-redux'
import { toggleUser } from '../actions'

const FavouriteButton = function ({ dispatch }) {
return (
  <div>
<button onClick={e => {
  e.preventDefault()
  dispatch(toggleUser())}} className="styleButton" type="submit">
Add Favourite
</button>
</div>
)
}

export default connect()(FavouriteButton)