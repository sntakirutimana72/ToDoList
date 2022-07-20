import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from './TodoItem';
import { fetchTodo } from '../redux/actions/todos';
import { selectByVisibility } from '../redux/effects/todosEffects';

import styles from './TodoList.module.css';

const TodoList = () => {
  const todos = useSelector(selectByVisibility);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodo);
  }, []);

  const isEmpty = todos.length === 0;

  return (
    <div className={styles.TodoList}>
      {!isEmpty && (
        <ul>
          {todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
        </ul>
      )}
      {isEmpty && (
        <p className={styles.NoTodos}>No Tasks</p>
      )}
    </div>
  );
};

export default TodoList;
