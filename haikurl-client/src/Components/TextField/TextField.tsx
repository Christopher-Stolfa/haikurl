import React from 'react';
import './TextField.css';

/**
 * @typedef Props
 * @prop {string} haikurl - Haiku that redirects to the url associated with it
 */
type Props = {
  haikurl: string;
};

/**
 * TextField component where the haiku is rendered
 * @param {Props} Props
 */
const TextField = ({ haikurl }: Props) => (
  <div className="TextField">
    {haikurl.length > 0 && (
      <>
        <p key="api-url">{process.env.REACT_APP_API_URL}</p>
        {haikurl.split('|||').map((haiku) => (
          <p key={haiku}>
            {haiku}
            {haiku.length > 0 && '|||'}
          </p>
        ))}
      </>
    )}
  </div>
);

export default TextField;
