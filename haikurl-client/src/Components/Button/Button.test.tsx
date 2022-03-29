import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

const setup = () => {
  const utils = render(<Button />);
  const button = utils.getByTestId('Button');
  return { button, ...utils };
};

describe('Button component unit tests', () => {
  test('Button should render in the document and have the correct attributes', () => {
    const { button } = setup();
    const type = 'button' || 'submit';
    expect(button).toBeInTheDocument;
    expect(button).toHaveAttribute('type', type);
  });

  test('Button should accept child elements and render text', () => {
    const { button } = setup();
    button.append('submit');
    expect(button).toHaveTextContent('submit');
  });

  test('Button element handles click', () => {
    const { button } = setup();
    const handleClick = jest.fn();
    button.onclick = handleClick;
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
