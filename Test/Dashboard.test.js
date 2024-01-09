// DashboardPage.test.js
import React from 'react';
import { render } from '@testing-library/react';
import { AuthProvider } from '../components/AuthContext';
import Dashboard from '../components/Dashboard';

test('renders dashboard page when authenticated', () => {
  // Set up a mock authentication context with isAuthenticated as true
  const isAuthenticated = true;
  const authValue = { isAuthenticated, login: jest.fn(), logout: jest.fn() };

  // Render the DashboardPage within the AuthProvider
  const { getByText } = render(
    <AuthProvider value={authValue}>
      <Dashboard />
    </AuthProvider>
  );
//add
  // Assert that the dashboard content is present
  expect(getByText('Home')).toBeInTheDocument();
});
