import React from 'react';

import { render } from '@testing-library/react';
import Form from './Form';

const setup = () => {
  const utils = render(<Form />);
  const form = utils.getByTestId('Form');
  return {
    form,
    ...utils,
  };
};

describe('Form component unit tests', () => {
  test('Form should render in the document', () => {
    const { form } = setup();
    expect(form).toBeInTheDocument;
  });
});
