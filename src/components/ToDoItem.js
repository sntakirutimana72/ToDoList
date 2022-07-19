import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleTodo, updateTodo } from '../redux/actions/todos';

import styles from './TodoItem.module.css';

const TodoItem = ({ todo }) => {
  const [title, setTitle] = useState(todo.title);
  const [focus, setFocus] = useState(todo.completed);
  const dispatch = useDispatch();

  const onCheck = () => {
    setFocus((prevFocus) => !prevFocus);
    dispatch(toggleTodo(todo.id));
  };

  const onText = ({ target }) => {
    setTitle(target.value);
  };

  const onBlur = ({ target }) => {
    const newTitle = title.trim();
    if (newTitle && newTitle !== target.placeholder) {
      dispatch(updateTodo(todo.id, newTitle));
    }
  };

  return (
    <li id={todo.id} className={styles.TodoItem}>
      <input type="checkbox" onChange={onCheck} checked={focus} />
      <input
        type="text"
        onChange={onText}
        onBlur={onBlur}
        value={title}
        placeholder={todo.title}
      />
      <button type="button" aria-label="trash" className="fa fa-trash" />
    </li>
  );
};

TodoItem.propTypes = { todo: PropTypes.instanceOf(Object).isRequired };

export default TodoItem;
