const DATA_KEY = 'Todo';

export const getItems = () => {
  const items = localStorage.getItem(DATA_KEY);
  return items ? JSON.parse(items) : [];
};

export const storeItems = (items) => {
  localStorage.setItem(DATA_KEY, JSON.stringify(items));
};
