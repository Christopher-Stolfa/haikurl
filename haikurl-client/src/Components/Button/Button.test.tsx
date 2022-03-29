import React from 'react';

import { render, screen } from '@testing-library/react';
import Button from './Button';

test('Should show a submit button', () => {
  render(<Button />);
});

test('Button should accept child elements and render text', () => {
  render(<Button type="submit">submit</Button>);
  const buttonElement = screen.getByTestId('Button');
  expect(buttonElement).toHaveTextContent('submit');
});
