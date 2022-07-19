import { combineReducers } from '@reduxjs/toolkit';
import visibilityFilter from './visibilityFilter';
import selection from './selection';
import todos from './todos';

export default combineReducers({
  visibilityFilter,
  todos,
  selection,
});
