let store = {};

const localStorageMock = {
  setItem: jest.fn((key, item) => {
    store[key] = item;
    console.log(store);
  }),
  getItem: jest.fn((key) => store[key]),
  removeItem: jest.fn((key) => {
    delete store[key];
  }),
  clear: jest.fn(() => {
    store = {};
  }),
};

export default localStorageMock;
