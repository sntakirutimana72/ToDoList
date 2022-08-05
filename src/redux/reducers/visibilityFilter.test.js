import {
  setVisibilityFilter, SET_VISIBILITY_FILTER, visibilityFilters,
} from '../actions/visibilityFilter';
import reducer from './visibilityFilter';

describe('VisibilityFilter Actions', () => {
  it(SET_VISIBILITY_FILTER, () => {
    expect(
      reducer(
        visibilityFilters.SHOW_ALL,
        setVisibilityFilter(visibilityFilters.SHOW_ACTIVE),
      ),
    ).toBe(visibilityFilters.SHOW_ACTIVE);
  });

  it('UNKNOWN TYPE', () => {
    expect(
      reducer(
        visibilityFilters.SHOW_ALL,
        { type: '' },
      ),
    ).toBe(visibilityFilters.SHOW_ALL);
  });
});
