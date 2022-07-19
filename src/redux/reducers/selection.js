import { SET_SELECTION } from '../actions/selection';

const reducer = (state = null, action) => {
  switch (action.type) {
    case SET_SELECTION:
      return action.selection;
    default:
      return state;
  }
};

export default reducer;
