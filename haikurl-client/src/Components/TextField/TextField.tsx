import React from 'react';
import './TextField.css';

/**
 * @typedef Props
 * @prop {string} urlStart - Start of the url
 * @prop {lineOne} - First line of haiku
 * @prop {lineTwo} - Second line of haiku
 * @prop {lineThree} - Third line of haiku
 * @prop {urlEnd} - End of the url
 */
type Props = {
  urlStart: string;
  lineOne: string;
  lineTwo: string;
  lineThree: string;
  urlEnd: string;
};

/**
 * TextField component where the haiku is rendered
 * @param {Props} Props
 */
const TextField = ({ urlStart, lineOne, lineTwo, lineThree, urlEnd }: Props) => {
  return (
    <div className="TextField">
      <p>{urlStart}</p>
      <p>{lineOne}</p>
      <p>{lineTwo}</p>
      <p>{lineThree}</p>
      <p>{urlEnd}</p>
    </div>
  );
};

export default TextField;
