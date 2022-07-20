import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { todoToggled, todoUpdated, todoDeleted } from '../redux/actions/todos';

import styles from './TodoItem.module.css';

const TodoItem = ({ todo }) => {
  const [title, setTitle] = useState(todo.title);
  const dispatch = useDispatch();

  const onCheck = () => dispatch(todoToggled(todo.id));
  const onDelete = () => dispatch(todoDeleted(todo.id));
  const onChange = ({ target }) => setTitle(target.value);
  const onBlur = ({ target }) => {
    const refinedTitle = title.trim();
    if (refinedTitle === '') {
      setTitle(target.placeholder);
    } else if (refinedTitle !== target.placeholder) {
      dispatch(todoUpdated(todo.id, refinedTitle));
    }
  };

  return (
    <li id={todo.id} className={styles.TodoItem}>
      <input type="checkbox" onChange={onCheck} checked={todo.completed} />
      <input
        type="text"
        onChange={onChange}
        onBlur={onBlur}
        value={title}
        placeholder={todo.title}
      />
      <button
        type="button"
        aria-label="trash"
        onClick={onDelete}
        className="fa fa-trash"
      />
    </li>
  );
};

TodoItem.propTypes = { todo: PropTypes.instanceOf(Object).isRequired };

export default TodoItem;
