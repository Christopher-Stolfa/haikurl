import React from 'react';

/**
 * @typedef Props
 * @prop {(event: React.MouseEvent<HTMLButtonElement>)=>void} onClick - Callback that handles the button click event
 * @prop {React.ReactNode} children - Child elements
 * @prop {submit | button} type - The type of button, must be 'submit' or 'button'
 */
type Props = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  type?: 'submit' | 'button';
};

/**
 * Custom button component
 * @param Props
 */
const Button = ({ onClick, children, type = 'button' }: Props) => (
  <button type={type} className="Button" onClick={onClick}>
    {children}
  </button>
);

export default Button;
