import React, { useState, useEffect } from 'react';
import './List.css';
import ListItem from './ListItem';
import { getItems, hasFulfilled, storeItems } from '../helpers/list_manager';

const List = () => {
  const [items, setItems] = useState(getItems());
  const [selected, setSelected] = useState();

  const removeFulfilledItems = () => {
    const newItems = [...items].filter(({ completed, index }) => {
      if (completed && index === selected) {
        setSelected();
      }
      return !completed;
    });
    newItems.forEach((item, index) => {
      if (item.index === selected) {
        setSelected(index + 1);
      }
      item.index = index + 1;
    });
    setItems(newItems);
  };

  const createItem = ({ target: form }) => {
    const newItems = [...items];
    const newItem = {
      index: newItems.length + 1,
      description: form.elements.desc.value,
      completed: false,
    };
    form.reset();
    newItems.push(newItem);
    setItems(newItems);
  };

  const onRemove = (id) => {
    const newItems = [...items].filter(({ index }) => index !== id);
    newItems.forEach((item, index) => {
      item.index = index + 1;
    });
    storeItems(newItems);
    setItems(newItems);

    if (selected === id) {
      setSelected();
    }
  };

  const onState = (id, state) => {
    const newItems = [...items];
    newItems[id - 1].completed = state;
    setItems(newItems);
  };

  const onUpdate = (id, desc) => {
    const newItems = [...items];
    const updatedItem = newItems.find(({ index }) => index === id);
    updatedItem.description = desc;
    setItems(newItems);
  };

  const onSelect = (id) => {
    setSelected(id);
  };

  useEffect(() => {
    storeItems([...items]);
  }, [items]);

  const toggleClear = !hasFulfilled([...items]);

  return (
    <div className="list-wrapper">
      <form action="#" className="list-form" onSubmit={createItem}>
        <div className="flex-align-center heading-wrapper row">
          <h1 className="no-spacing">Today&apos;s TODO List</h1>
          <button type="button" className="list-refresh-btn">
            <i className="fa-solid fa-rotate" />
          </button>
        </div>
        <div className="flex-align-center field-wrap row">
          <input
            type="text"
            name="desc"
            placeholder="Add to your list.."
            required
          />
          <span>
            <i className="fa fa-level-down" />
          </span>
        </div>
      </form>
      <ul className="flex-column list-container no-spacing">
        {items.map(({ index, description, completed }) => {
          if (selected === index) {
            return (
              <ListItem
                key={index}
                index={index}
                desc={description}
                status={completed}
                focus
                onState={onState}
                onUpdate={onUpdate}
                onSelect={onSelect}
                onRemove={onRemove}
              />
            );
          }
          return (
            <ListItem
              key={index}
              index={index}
              desc={description}
              status={completed}
              onState={onState}
              onUpdate={onUpdate}
              onSelect={onSelect}
              onRemove={onRemove}
            />
          );
        })}
      </ul>
      <button
        type="button"
        className="list-clear-btn"
        onClick={removeFulfilledItems}
        disabled={toggleClear}
      >
        Clear all completed
      </button>
    </div>
  );
};

export default List;
