import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import Input from './Input';

const setup = () => {
  const utils = render(<Input />);
  const input = utils.getByTestId('Input');
  return {
    input,
    ...utils,
  };
};

describe('Input component unit tests', () => {
  test('Input should render in the document and have the correct attributes', () => {
    const { input } = setup();
    expect(input).toBeInTheDocument;
    expect(input).toHaveAttribute('type', 'url');
  });

  test('Input should recognize when its value changes', () => {
    const { input } = setup();

    const url = 'https://example.com';
    const nextUrl = 'https://google.com';

    fireEvent.change(input, { target: { value: url } });
    expect(input).toHaveValue(url);
    fireEvent.change(input, { target: { value: nextUrl } });
    expect(input).toHaveValue(nextUrl);
  });
});
