let nextUserId = 0
export const addUser = text => ({
  type: 'ADD_USER',
  id: nextUserId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const getid = id => ({
  type:"SELECT_ID",
  id
})

export const toggleUser = id => ({
  type: 'TOGGLE_USER',
  id
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