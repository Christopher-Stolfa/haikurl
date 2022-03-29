import React from 'react';

import { render, screen } from '@testing-library/react';
import Button from './Button';

test('Renders a submit button', () => {
  render(<Button />);
});
