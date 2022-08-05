import { v4 as uid } from 'uuid';
import {
  actions,
  addTodo,
  updateTodo,
  deleteTodos,
  deleteTodo,
  fetchTodo,
  toggleTodo,
} from '../actions/todos';
import reducer from './todos';
import { storeItems } from '../../utils/localstorage';
import localStorageMock from '../../utils/test-utils';

global.localStorage = localStorageMock;

afterEach(() => {
  localStorage.clear();
});

const initialItems = [
  {
    id: uid(),
    title: 'Read book',
    completed: false,
  },
];

describe('Todos Actions', () => {
  it(actions.FETCH, () => {
    expect(reducer(null, fetchTodo)).toEqual([]);
    storeItems(initialItems);
    expect(reducer(null, fetchTodo)).toEqual(initialItems);
  });

  it(actions.ADD, () => {
    expect(reducer([], addTodo('Watch TV'))).toHaveLength(1);
    expect(reducer(null, fetchTodo)).toHaveLength(1);
  });

  it(actions.TOGGLE, () => {
    storeItems(initialItems);
    const [firstTodo] = initialItems;
    expect(
      reducer(initialItems, toggleTodo(firstTodo.id)),
    ).toEqual([{ ...firstTodo, completed: true }]);
    expect(reducer(null, fetchTodo)).toEqual([{ ...firstTodo, completed: true }]);
  });

  it(actions.UPDATE, () => {
    storeItems(initialItems);
    const [firstTodo] = initialItems;
    expect(
      reducer(initialItems, updateTodo(firstTodo.id, 'cook')),
    ).toEqual([{ ...firstTodo, title: 'cook' }]);
    expect(reducer(null, fetchTodo)).toEqual([{ ...firstTodo, title: 'cook' }]);
  });

  it(actions.DELETE_COMPLETED, () => {
    const state = [
      { id: uid(), title: 'SECOND', completed: true },
      { id: uid(), title: 'THIRD', completed: true },
      ...initialItems,
    ];
    storeItems(state);
    expect(reducer(state, deleteTodos)).toEqual(initialItems);
    expect(reducer(null, fetchTodo)).toEqual(initialItems);
  });

  it(actions.DELETE, () => {
    storeItems(initialItems);
    const [firstTodo] = initialItems;
    expect(reducer(initialItems, deleteTodo(firstTodo.id))).toEqual([]);
    expect(reducer(null, fetchTodo)).toEqual([]);
  });
});
