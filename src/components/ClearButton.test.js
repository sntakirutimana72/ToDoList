import { screen, act } from '@testing-library/react';
import { render, localStorageMock } from '../utils/test-utils';
import ClearButton from './ClearButton';
import store from '../redux/store';
import { fetchTodo, toggleTodo } from '../redux/actions/todos';
import { storeItems } from '../utils/localstorage';

const initialTodos = [
  {
    id: 1,
    title: 'TASK_1',
    completed: false,
  },
  {
    id: 2,
    title: 'TASK_2',
    completed: true,
  },
  {
    id: 3,
    title: 'TASK_3',
    completed: false,
  },
];

describe('renders clear button', () => {
  it('successfully', () => {
    render(<ClearButton />);
    const clearButton = screen.getByText('CLEAR COMPLETED');
    expect(clearButton).toBeInTheDocument();
    expect(clearButton.disabled).toBeTruthy();
  });

  it('with done todos', () => {
    global.localStorage = localStorageMock;
    render(<ClearButton />);
    storeItems(initialTodos);
    act(() => {
      store.dispatch(fetchTodo);
    });
    const clearButton = screen.getByText('CLEAR COMPLETED');
    expect(clearButton.disabled).toBeFalsy();
    act(() => {
      store.dispatch(toggleTodo(initialTodos[1].id));
    });
    expect(clearButton.disabled).toBeTruthy();
  });
});
