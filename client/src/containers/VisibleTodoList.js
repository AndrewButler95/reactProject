import { connect } from 'react-redux'
import { toggleUser } from '../actions'
import UserList from '../components/UserList'
import { VisibilityFilters } from '../actions'
import { highlightUser } from '../actions'

const getVisibleUsers = (users, filter) => {
    switch (filter) {
      case VisibilityFilters.SHOW_ALL:
        return users
      case VisibilityFilters.SHOW_COMPLETED:
        return users.filter(t => !t.completed)
      case VisibilityFilters.SHOW_ACTIVE:
        return users.filter(t => !t.completed)
      default:
        throw new Error('Unknown filter: ' + filter)
    }
  }
  
  const mapStateToProps = function(state){
    if(state.visibilityFilter === VisibilityFilters.SHOW_COMPLETED){
    return {users: getVisibleUsers(state.favouriteusers, state.visibilityFilter)}
  }
  else{
   return { users:  getVisibleUsers(state.users, state.visibilityFilter)}
  }
}



const mapDispatchToProps = dispatch => ({
    toggleUser: id => dispatch(toggleUser(id)),
    highlightUser: id => dispatch(highlightUser(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList)
