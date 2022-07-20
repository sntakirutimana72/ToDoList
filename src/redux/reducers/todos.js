import { actions } from '../actions/todos';
import {
  storeEffect,
  updateEffect,
  toggleEffect,
  deleteEffect,
  deleteCompletedEffect,
} from '../effects/todosEffects';
import { getItems } from '../../utils/localstorage';

export default (state = [], action) => {
  switch (action.type) {
    case actions.FETCH:
      return getItems();
    case actions.ADD:
      return storeEffect([...state, action.payload]);
    case actions.UPDATE:
      return updateEffect(state, action);
    case actions.TOGGLE:
      return toggleEffect(state, action);
    case actions.DELETE:
      return deleteEffect(state, action);
    case actions.DELETE_COMPLETED:
      return deleteCompletedEffect(state);
    default:
      return state;
  }
};
