import { screen, act, fireEvent } from '@testing-library/react';
import { render, localStorageMock } from '../utils/test-utils';
import TodoForm from './TodoForm';
import store from '../redux/store';

global.localStorage = localStorageMock;

afterEach(() => {
  localStorageMock.clear();
});

describe('renders form', () => {
  it('successfully', () => {
    render(<TodoForm />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Add Title')).toBeInTheDocument();
  });

  it('add new todo', () => {
    render(<TodoForm />);
    const field = screen.getByPlaceholderText('Add Title');
    act(() => {
      fireEvent.change(field, { target: { value: 'cook' } });
    });
    const submit = screen.getByRole('button');
    act(() => { submit.click(); });
    const { todos } = store.getState();
    expect(todos[0].title).toBe('cook');
  });
});
