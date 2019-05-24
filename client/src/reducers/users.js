import user from './user' 
import axios from 'axios';

let temp = [{id:0, completed:false, text:"asddas",highlight:false}];
const users = (state = temp, action) => {
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
  
  export default users