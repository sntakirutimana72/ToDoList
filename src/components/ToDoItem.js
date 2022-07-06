import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ToDoItem = ({ todo }) => {
  const {
    item,
    changeFocus,
    updateItem,
    removeItem,
    updateStatus,
    focus,
  } = todo;
  const [title, setTitle] = useState('');

  const handleFocus = () => {
    if (!focus) {
      changeFocus(item.index);
    }
  };

  const handleTick = () => {
    handleFocus();
    const { index, completed } = item;
    updateStatus(index, !completed);
  };

  const handleUpdate = () => {
    const trimmedTitle = title.trim();
    if (trimmedTitle && trimmedTitle !== item.description) {
      updateItem(item.index, trimmedTitle);
    }
    setTitle('');
  };

  const handleChange = ({ target }) => {
    setTitle(target.value);
  };

  const handleOption = () => {
    if (focus) {
      removeItem(item.index);
    }
  };

  const fulfilled = item.completed ? ' fulfilled' : '';
  const [selection, draggable] = (
    focus
      ? [' item-focus', 'fa-trash']
      : ['', 'fa-ellipsis-vertical']
  );

  return (
    <li id={item.index} className={`flex-align-center row${fulfilled}${selection}`}>
      <input type="checkbox" onChange={handleTick} checked={item.completed} />
      <input
        type="text"
        className="task-desc"
        onClick={handleFocus}
        onBlur={handleUpdate}
        onChange={handleChange}
        value={title}
        placeholder={item.description}
      />
      <button
        type="button"
        aria-label="Customize Task"
        className={`fa-solid ${draggable}`}
        onClick={handleOption}
      />
    </li>
  );
};

ToDoItem.propTypes = { todo: PropTypes.instanceOf(Object).isRequired };

export default ToDoItem;
