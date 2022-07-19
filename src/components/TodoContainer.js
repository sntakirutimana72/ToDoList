import TodoForm from './TodoForm';
import Footer from './Footer';
import TodoList from './TodoList';

import styles from './TodoContainer.module.css';

const TodoContainer = () => (
  <div className={styles.TodoContainer}>
    <TodoForm />
    <TodoList />
    <Footer />
  </div>
);

export default TodoContainer;
