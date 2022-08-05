import { Provider } from 'react-redux';
import { render as ren } from '@testing-library/react';
import store from '../redux/store';

let storage = {};

export const localStorageMock = {
  setItem: jest.fn((key, item) => {
    storage[key] = item;
  }),
  getItem: jest.fn((key) => storage[key]),
  removeItem: jest.fn((key) => {
    delete storage[key];
  }),
  clear: jest.fn(() => {
    storage = {};
  }),
};

export const render = (component) => ren(
  <Provider store={store}>
    {component}
  </Provider>,
);
