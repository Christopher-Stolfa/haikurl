import React from 'react';

/**
 * @typedef Props
 * @prop {(event: React.MouseEvent<HTMLButtonElement>)=>void} onClick - Callback that handles the button click event
 * @prop {React.ReactNode} children - Child elements
 */
type Props = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
};

/**
 * Custom button component
 * @param Props
 */
const Button = ({ onClick, children }: Props) => (
  <button type="submit" className="Button" onClick={onClick}>
    {children}
  </button>
);

export default Button;
