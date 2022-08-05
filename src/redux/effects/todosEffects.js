import { storeItems } from '../../utils/localstorage';
import { visibilityFilters } from '../actions/visibilityFilter';

export const storeEffect = (changes) => {
  storeItems(changes);
  return changes;
};

export const toggleEffect = (state, { id }) => {
  const stateAfter = state.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        completed: !todo.completed,
      };
    }
    return todo;
  });
  return storeEffect(stateAfter);
};

export const updateEffect = (state, { id, title }) => {
  const stateAfter = state.map((todo) => {
    if (todo.id === id) {
      return { ...todo, title };
    }
    return todo;
  });
  return storeEffect(stateAfter);
};

export const deleteEffect = (state, { id: targetId }) => {
  const stateAfter = state.filter(({ id }) => id !== targetId);
  return storeEffect(stateAfter);
};

export const deleteCompletedEffect = (state) => {
  const stateAfter = state.filter(({ completed }) => !completed);
  return storeEffect(stateAfter);
};

export const hasDoneTodos = ({ todos }) => todos.find(
  ({ completed }) => completed,
) === undefined;

export const selectByVisibility = ({ todos, visibilityFilter }) => {
  switch (visibilityFilter) {
    case visibilityFilters.SHOW_ACTIVE:
      return todos.filter(({ completed }) => !completed);
    case visibilityFilters.SHOW_COMPLETED:
      return todos.filter(({ completed }) => completed);
    default:
      return todos;
  }
};
