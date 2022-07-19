import {
  SET_VISIBILITY_FILTER,
  visibilityFilters,
} from '../actions/visibilityFilter';

const reducer = (state = visibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default reducer;

export const getVisibilityFilter = (filter) => ({ visibilityFilter }) => (
  filter === visibilityFilter
);
