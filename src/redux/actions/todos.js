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

export const deleteCompletedTodo = { type: actions.DELETE_COMPLETED };

export const addTodo = (title) => ({
  type: actions.ADD,
  payload: {
    title,
    completed: false,
    id: uid(),
  },
});

export const updateTodo = (id, title) => ({
  type: actions.UPDATE,
  id,
  title,
});

export const toggleTodo = (id) => ({
  type: actions.TOGGLE,
  id,
});

export const deleteTodo = (id) => ({
  type: actions.DELETE,
  id,
});
