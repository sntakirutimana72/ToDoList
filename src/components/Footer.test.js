import { screen } from '@testing-library/react';
import { render } from '../utils/test-utils';
import Footer from './Footer';

it('renders footer', () => {
  render(<Footer />);
  expect(screen.getAllByRole('button')).toHaveLength(4);
  const doneButton = screen.getByText('All');
  expect(doneButton).toBeInTheDocument();
  expect(doneButton.disabled).toBeTruthy();
});
