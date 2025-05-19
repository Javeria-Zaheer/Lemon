import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // 👉 Required for toBeInTheDocument()
import App from './App';

test('renders login heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /login/i });
  expect(heading).toBeInTheDocument();
});
