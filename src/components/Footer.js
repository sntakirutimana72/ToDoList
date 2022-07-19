import FilterLink from './FilterLink';
import ClearButton from './ClearButton';
import { visibilityFilters } from '../redux/actions/visibilityFilter';

import styles from './Footer.module.css';

const Footer = () => (
  <div className={styles.Footer}>
    <FilterLink filter={visibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={visibilityFilters.SHOW_ACTIVE}>
      Active
    </FilterLink>
    <FilterLink filter={visibilityFilters.SHOW_COMPLETED}>
      Completed
    </FilterLink>
    <ClearButton />
  </div>
);

export default Footer;
