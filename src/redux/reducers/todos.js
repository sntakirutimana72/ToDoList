import { actions } from '../actions/todos';
import { visibilityFilters } from '../actions/visibilityFilter';
import { getItems, storeItems } from '../../helpers/localstorage';

const commitChanges = (changes) => {
  storeItems(changes);
  return changes;
};

const commitChangesAfterToggle = (state, { id }) => {
  const stateAfter = state.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        completed: !todo.completed,
      };
    }
    return todo;
  });
  return commitChanges(stateAfter);
};

const commitChangesAfterUpdate = (state, { id, title }) => {
  const stateAfter = state.map((todo) => {
    if (todo.id === id) {
      return { ...todo, title };
    }
    return todo;
  });
  return commitChanges(stateAfter);
};

const commitChangesAfterDelete = (state, { id: targetId }) => {
  const stateAfter = state.filter(({ id }) => id !== targetId);
  return commitChanges(stateAfter);
};

const commitChangesAfterDeleteCompleted = (state) => {
  const stateAfter = state.filter(({ completed }) => !completed);
  return commitChanges(stateAfter);
};

const initialState = [
  {
    id: 11,
    title: 'Read a book',
    completed: false,
  },
  {
    id: 12,
    title: 'Read a magazine',
    completed: false,
  },
  {
    id: 13,
    title: 'Watch tv',
    completed: true,
  },
  {
    id: 14,
    title: 'Make tea',
    completed: false,
  },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH:
      return getItems();
    case actions.ADD:
      return commitChanges([...state, action.payload]);
    case actions.UPDATE:
      return commitChangesAfterUpdate(state, action);
    case actions.TOGGLE:
      return commitChangesAfterToggle(state, action);
    case actions.DELETE:
      return commitChangesAfterDelete(state, action);
    case actions.DELETE_COMPLETED:
      return commitChangesAfterDeleteCompleted(state);
    default:
      return state;
  }
};

export default reducer;

export const getTodosStatus = ({ todos }) => (
  todos.find(({ completed }) => completed) === null
);

export const getVisibleTodos = ({ todos, visibilityFilter }) => {
  switch (visibilityFilter) {
    case visibilityFilters.SHOW_ACTIVE:
      return todos.filter(({ completed }) => !completed);
    case visibilityFilters.SHOW_COMPLETED:
      return todos.filter(({ completed }) => completed);
    default:
      return todos;
  }
};
