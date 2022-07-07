import React, { useState, useEffect } from 'react';
import ToDoForm from './ToDoForm';
import ToDoItem from './ToDoItem';
import { getItems, hasFulfilled, storeItems } from '../helpers/listManager';

import './ToDoList.css';

const ToDoList = () => {
  const [items, setItems] = useState();
  const [focused, setFocused] = useState();

  const removeItems = () => {
    const newItems = [...items].filter(({ completed, index }) => {
      if (completed && index === focused) {
        setFocused();
      }
      return !completed;
    });
    newItems.forEach((item, index) => {
      if (item.index === focused) {
        setFocused(index + 1);
      }
      item.index = index + 1;
    });
    setItems(newItems);
  };

  const addItem = (title) => {
    const newItem = {
      index: items.length + 1,
      description: title,
      completed: false,
    };
    setItems([...items, newItem]);
  };

  const removeItem = (id) => {
    const newItems = items.filter(({ index }) => index !== id);
    newItems.forEach((item, index) => {
      item.index = index + 1;
    });
    storeItems(newItems);
    setItems(newItems);

    if (focused === id) {
      setFocused();
    }
  };

  const updateStatus = (id, state) => {
    const newItems = [...items];
    newItems[id - 1].completed = state;
    setItems(newItems);
  };

  const updateItem = (id, title) => {
    const newItems = [...items];
    const updatedItem = newItems.find(({ index }) => index === id);
    updatedItem.description = title;
    setItems(newItems);
  };

  const changeFocus = (id) => {
    setFocused(id);
  };

  useEffect(() => {
    if (!items) {
      setItems(getItems());
    } else {
      storeItems([...items]);
    }
  }, [items]);

  const toggleClear = items && !hasFulfilled([...items]);

  return (
    <div className="list-wrapper">
      <ToDoForm addItem={addItem} />
      <ul className="flex-column list-container no-spacing">
        {items && items.map((item) => (
          <ToDoItem
            key={item.index}
            todo={{
              item,
              changeFocus,
              updateItem,
              removeItem,
              updateStatus,
              focus: focused === item.index,
            }}
          />
        ))}
      </ul>
      <button
        type="button"
        className="list-clear-btn"
        onClick={removeItems}
        disabled={toggleClear}
      >
        Clear all completed
      </button>
    </div>
  );
};

export default ToDoList;
