import { v4 as uid } from 'uuid';

export const actions = {
  FETCH: 'todos/FETCH_TODO',
  TOGGLE: 'todos/TOGGLE_TODO',
  ADD: 'todos/ADD_TODO',
  UPDATE: 'todos/UPDATE_TODO',
  DELETE: 'todos/DELETE_TODO',
  DELETE_COMPLETED: 'todos/DELETE_COMPLETED',
};

export const fetchTodo = { type: actions.FETCH };

export const todosDeleted = { type: actions.DELETE_COMPLETED };

export const todoAdded = (title) => ({
  type: actions.ADD,
  payload: {
    title,
    completed: false,
    id: uid(),
  },
});

export const todoUpdated = (id, title) => ({
  type: actions.UPDATE,
  id,
  title,
});

export const todoToggled = (id) => ({
  type: actions.TOGGLE,
  id,
});

export const todoDeleted = (id) => ({
  type: actions.DELETE,
  id,
});
