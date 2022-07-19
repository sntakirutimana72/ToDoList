import { useSelector, useDispatch } from 'react-redux';
import { getTodosStatus } from '../redux/reducers/todos';
import { deleteCompletedTodo } from '../redux/actions/todos';

import styles from './ClearButton.module.css';

const ClearButton = () => {
  const active = useSelector(getTodosStatus);
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      onClick={() => dispatch(deleteCompletedTodo)}
      disabled={active}
      className={styles.ClearButton}
    >
      CLEAR COMPLETED
    </button>
  );
};

export default ClearButton;
