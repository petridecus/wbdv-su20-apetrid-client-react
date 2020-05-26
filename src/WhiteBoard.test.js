import React from 'react';
import { render } from '@testing-library/react';
import WhiteBoard from './WhiteBoard';

test('renders learn react link', () => {
  const { getByText } = render(<WhiteBoard />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
