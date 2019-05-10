import user from './user' 
const favouriteusers = (state = [], action) => {
    switch (action.type) {
      case 'ADD_USER':
        return [
          ...state,
          user(undefined, action)
        ];
        case 'TOGGLE_USER':
        return state.map(t => user(t, action));
        case 'HIGHLIGHT_USER':
        return state.map(t => user(t, action));
      default:
        return state
    }
  }
  
  export default favouriteusers