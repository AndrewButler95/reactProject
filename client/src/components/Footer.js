import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'
import FavouriteButton from '../containers/FavouriteButton';

const Footer = () => (
  <div className='alignContent'>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      Recent Searches
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Favourite
    </FilterLink>
    <FavouriteButton></FavouriteButton>
  </div>
)

export default Footer
