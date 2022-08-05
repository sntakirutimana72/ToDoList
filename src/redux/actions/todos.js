import { v4 as uid } from 'uuid';

export const actions = {
  FETCH: 'todos/fetchTodo',
  TOGGLE: 'todos/toggleTodo',
  ADD: 'todos/addTodo',
  UPDATE: 'todos/updateTodo',
  DELETE: 'todos/deleteTodo',
  DELETE_COMPLETED: 'todos/deleteDoneTodos',
};

export const fetchTodo = { type: actions.FETCH };

export const deleteTodos = { type: actions.DELETE_COMPLETED };

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
