import React from 'react';
import './Input.css';

/**
 * @typedef Props
 * @prop {string} value - The value of the input field
 * @prop {(event: React.ChangeEvent<HTMLInputElement>)=>void} onChange - Callback that handles input field events
 */
type Props = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

/**
 * Custom input component
 * @param Props
 */
const Input = ({ value, onChange }: Props) => (
  <input data-testid="Input" type="url" className="Input" value={value} onChange={onChange} />
);

export default Input;
