const DATA_KEY = 'ToDoList';

const data = { [DATA_KEY]: [] };

export const getItems = () => data[DATA_KEY]; // {
//   const items = localStorage.getItem(DATA_KEY);
//   return items ? JSON.parse(items) : [];
// };

export const storeItems = (items) => {
  // localStorage.setItem(DATA_KEY, JSON.stringify(items));
  data[DATA_KEY] = items;
};

export const hasFulfilled = (items) => items.find(
  ({ completed }) => completed === true,
);
