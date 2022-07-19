import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { setVisibilityFilter } from '../redux/actions/visibilityFilter';
import { getVisibilityFilter } from '../redux/reducers/visibilityFilter';

import styles from './FilterLink.module.css';

const FilterLink = ({ filter, children }) => {
  const active = useSelector(getVisibilityFilter(filter));
  const dispatch = useDispatch();
  const onClick = () => dispatch(setVisibilityFilter(filter));
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={active}
      className={styles.FilterLink}
    >
      {children}
    </button>
  );
};

FilterLink.propTypes = {
  filter: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FilterLink;
