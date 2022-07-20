import { combineReducers } from '@reduxjs/toolkit';
import visibilityFilter from './visibilityFilter';
import todos from './todos';

export default combineReducers({
  visibilityFilter,
  todos,
});
