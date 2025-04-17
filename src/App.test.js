import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders app title', () => {
  render(<App />);
  const titleElement = screen.getByText(/ToDo List/i);
  expect(titleElement).toBeInTheDocument();
});
