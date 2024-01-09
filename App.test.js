import { render, screen } from '@testing-library/react';
import App from './App';

test('login screen', () => {
  render(<App />);
  const linkElement1 = screen.getByText("Log in to your account");
  expect(linkElement1).toBeInTheDocument();

  const linkElement2 = screen.getByText("Email address");
  expect(linkElement2).toBeInTheDocument();

  const linkElement3 = screen.getByText("Password");
  expect(linkElement3).toBeInTheDocument();

  const linkElement4 = screen.getByText("Signup");
  expect(linkElement4).toBeInTheDocument();

  const linkElement5 = screen.getByText("Don't have an account?");
  expect(linkElement5).toBeInTheDocument();

  const linkElement6 = screen.getByText("Login");
  expect(linkElement6).toBeInTheDocument();


});
