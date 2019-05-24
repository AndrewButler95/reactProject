
export const addUser = (id,text) => ({
  type: 'ADD_USER',
  id,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const setUserVisibility = completed => ({
  type:"TOGGLE_COMPLETED",
  completed: !completed,

})

export const toggleUser = () => ({
  type: 'TOGGLE_USER',
  
})

export const highlightUser = id => ({
  type: 'HIGHLIGHT_USER',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}