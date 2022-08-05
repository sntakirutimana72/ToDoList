import { screen, act, waitFor } from '@testing-library/react';
import { render, localStorageMock } from './utils/test-utils';
import App from './App';
import { storeItems } from './utils/localstorage';

beforeAll(() => {
  global.localStorage = localStorageMock;
});
beforeEach(() => {
  storeItems([
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
  ]);
});
afterEach(() => {
  localStorageMock.clear();
});

describe('renders app', () => {
  it('display all', () => {
    render(<App />);
    expect(screen.getByDisplayValue('TASK_1')).toBeInTheDocument();
    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('Active')).toBeInTheDocument();
    expect(screen.getByText('Completed')).toBeInTheDocument();
    expect(screen.getByText('All').disabled).toBeTruthy();
  });

  it('display only completed', () => {
    render(<App />);
    const doneButton = screen.getByText('Completed');
    act(() => {
      doneButton.click();
    });
    waitFor(() => {
      expect(doneButton.disabled).toBeTruthy();
      expect(screen.getByDisplayValue('TASK_2')).toBeInTheDocument();
    });
    expect(() => screen.getByDisplayValue('TASK_1')).toThrow();
  });

  it('display only active', () => {
    render(<App />);
    const activeButton = screen.getByText('Active');
    act(() => {
      activeButton.click();
    });
    waitFor(() => {
      expect(activeButton.disabled).toBeTruthy();
      expect(screen.getByDisplayValue('TASK_1')).toBeInTheDocument();
    });
    expect(() => screen.getByDisplayValue('TASK_2')).toThrow();
  });
});
