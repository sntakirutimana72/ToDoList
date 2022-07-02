const DATA_KEY = 'TODO-List';

export const getItems = () => {
  const items = localStorage.getItem(DATA_KEY);
  return items ? JSON.parse(items) : [];
};

export const storeItems = (items) => {
  localStorage.setItem(DATA_KEY, JSON.stringify(items));
};

export const hasFulfilled = (items) => items.find(
  ({ completed }) => completed === true,
);
