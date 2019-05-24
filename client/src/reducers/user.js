const user = (state, action) => {
  console.log(state,action)
    switch (action.type) {
      case 'ADD_USER':
      return {
            id: action.id,
            text: action.text,
            completed: false,
            highlight: false
          }
        case 'TOGGLE_USER':
        if (state.highlight === true) {
            return {
                ...state,
                completed: true
              };
        }
        return state
        case 'HIGHLIGHT_USER':
        if(state.id === action.id){
            return {...state, highlight: true}
        }
        else return {...state, highlight: false}
        case 'HIGHLIGHT_USER':
          if(state.id === action.id){
              return {...state, highlight: true}
          }
          else return {...state, highlight: false}
      default:
        return state
    }
  }
  
  export default user