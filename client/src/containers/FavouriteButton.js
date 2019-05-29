import React from 'react'
import { connect } from 'react-redux'
import { addFavouriteUser } from '../actions'
import  { store } from '../store.js';
const FavouriteButton = function ({ dispatch }) {
return (
  <div>
<button onClick={e => {
  e.preventDefault()
  let state = store.getState();
  let id;
  for(var i=0; i<state.users.length; i++){
    if(state.users[i].highlight === true){
      id = i;
      break;
    }
  }
  dispatch(addFavouriteUser(id, state.users[i].text) )}} className="styleButton" type="submit">
Add Favourite
</button>
</div>
)
}

export default connect()(FavouriteButton)