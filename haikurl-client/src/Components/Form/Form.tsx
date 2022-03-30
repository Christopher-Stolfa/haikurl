import React from 'react';
import './Form.css';

/**
 * @typedef Props
 * @prop {(event: React.SyntheticEvent)=>void} [onSubmit] - Callback that handles form submit event
 * @prop {React.ReactNode} children - Child elements
 */
type Props = {
  onSubmit?: (event: React.SyntheticEvent) => void;
  children?: React.ReactNode;
};

/**
 * Custom form component
 * @param {Props} props
 */
const Form = ({ onSubmit, children }: Props) => (
  <form className="Form" data-testid="Form" onSubmit={onSubmit}>
    {children}
  </form>
);

export default Form;
