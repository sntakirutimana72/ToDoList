import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import { getVisibleTodos } from '../redux/reducers/todos';

import styles from './TodoList.module.css';

const TodoList = () => {
  const todos = useSelector(getVisibleTodos);
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
