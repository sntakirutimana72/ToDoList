import { useSelector, useDispatch } from 'react-redux';
import { todosHasCompleted } from '../redux/effects/todosEffects';
import { todosDeleted } from '../redux/actions/todos';

import styles from './ClearButton.module.css';

const ClearButton = () => {
  const active = useSelector(todosHasCompleted);
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      onClick={() => dispatch(todosDeleted)}
      disabled={active}
      className={styles.ClearButton}
    >
      CLEAR COMPLETED
    </button>
  );
};

export default ClearButton;
