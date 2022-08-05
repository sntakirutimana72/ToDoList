import { useSelector, useDispatch } from 'react-redux';
import { hasDoneTodos } from '../redux/effects/todosEffects';
import { deleteTodos } from '../redux/actions/todos';

import styles from './ClearButton.module.css';

const ClearButton = () => {
  const active = useSelector(hasDoneTodos);
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      onClick={() => dispatch(deleteTodos)}
      disabled={active}
      className={styles.ClearButton}
    >
      CLEAR COMPLETED
    </button>
  );
};

export default ClearButton;
