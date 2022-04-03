import React from 'react';
import './TextField.css';

/**
 * @typedef Props
 * @prop {string} haikurl - Haiku that redirects to the url associated with it
 * @prop {string} error - Error message
 */
type Props = {
  haikurl: string;
  error: string;
};

/**
 * TextField component where the haiku is rendered
 * @param {Props} Props
 */
const TextField = ({ haikurl, error }: Props) => (
  <div className="TextField">
    {error && (
      <div className="TextField-ErrorBox">
        <p>Error: {error}</p>
      </div>
    )}
    {haikurl && !error && (
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
