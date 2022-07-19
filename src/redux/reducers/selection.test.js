import { setSelection, SET_SELECTION } from '../actions/selection';
import reducer from './selection';

describe('Selection Actions', () => {
  it(SET_SELECTION, () => {
    expect(reducer(null, setSelection(1))).toBe(1);
    expect(reducer(33, setSelection(1))).toBe(1);
  });

  it('UNKNOWN TYPE', () => {
    expect(reducer(56, {type: 'SET_SELECTION'})).toBe(56);
  });
});
