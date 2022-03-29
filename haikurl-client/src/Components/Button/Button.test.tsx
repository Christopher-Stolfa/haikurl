import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('Should show a button', () => {
  render(<Button />);
});

test('Button should accept child elements and render text', () => {
  render(<Button type="submit">submit</Button>);
  const buttonElement = screen.getByTestId('Button');
  expect(buttonElement).toHaveTextContent('submit');
});

test('Calls onClick prop when clicked', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>submit</Button>);
  fireEvent.click(screen.getByText(/submit/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
