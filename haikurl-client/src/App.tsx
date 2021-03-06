/*global chrome*/
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Input from './Components/Input/Input';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';
import Button from './Components/Button/Button';
import TextField from './Components/TextField/TextField';

const App = () => {
  const [url, setUrl] = useState<string>('');
  const [haikurl, setHaikurl] = useState('');
  const [error, setError] = useState('');

  /**
   * On mount, check if there's chrome tabs. If there are tabs, grab the current opened tab and set it to state.
   */
  useEffect(() => {
    const queryInfo = { active: true, lastFocusedWindow: true };
    chrome.tabs &&
      chrome.tabs.query(queryInfo, (tabs) => {
        const tabUrl: string = tabs[0].url || '';
        setUrl(tabUrl);
      });
  }, []);

  /**
   * If a user manually changes the value of the input fields
   * @param {React.ChangeEvent<HTMLInputElement>} event
   */
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => setUrl(event.target.value);

  /**
   * Submits the url to the backend, receives haikudata and sets it to state
   * @param {React.SyntheticEvent} event
   */
  const handleOnSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    axios
      .post(process.env.REACT_APP_API_URL + 'url', {
        url,
      })
      .then(({ data: { haiku } }) => {
        setError('');
        setHaikurl(haiku);
      })
      .catch((error) => setError(error.message));
  };

  /**
   * Appends the react app url env variable to the haiku and copies it to the clipboard
   */
  const handleCopyButton = () => navigator.clipboard.writeText(process.env.REACT_APP_API_URL + haikurl);

  return (
    <div className="App">
      <Header />
      <Form onSubmit={handleOnSubmit}>
        <div className="App-Input-Group">
          <Input value={url} onChange={handleOnChange} />
          <Button type="submit">Submit</Button>
        </div>
        <div className="App-Output-Group">
          <TextField error={error} haikurl={haikurl} />
          <div className="App-Bottom-Right">
            <Button onClick={handleCopyButton} type="button">
              Copy
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default App;
