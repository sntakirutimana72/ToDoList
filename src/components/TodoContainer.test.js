import { screen } from '@testing-library/react';
import { render } from '../utils/test-utils';
import TodoContainer from './TodoContainer';

it('renders container', () => {
  render(<TodoContainer />);
  expect(screen).toMatchSnapshot();
});
