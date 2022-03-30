/*global chrome*/
import React, { useEffect, useState } from 'react';
import './App.css';
import Input from './Components/Input/Input';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';
import Button from './Components/Button/Button';
import TextField from './Components/TextField/TextField';

const App = () => {
  const [url, setUrl] = useState<string>('');
  const [haikuData, setHaikuData] = useState({ urlStart: '', lineOne: '', lineTwo: '', lineThree: '', urlEnd: '' });

  /**
   * If a user manually changes the value of the input fields
   * @param {React.ChangeEvent<HTMLInputElement>} event
   */
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => setUrl(event.target.value);

  /**
   * NOTE: At the moment, this stores dummy data for testing purposes
   * Submits the url to the backend, receives haikudata and sets it to state
   * @param {React.SyntheticEvent} event
   */
  const handleOnSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setHaikuData({
      urlStart: 'https://haikurl.com/',
      lineOne: "When you're the president",
      lineTwo: 'of America your job is to',
      lineThree: 'keep people happy',
      urlEnd: '.com',
    });
  };

  /**
   * NOTE: When the backend is completed, it should handle the text replacement
   * Copies the haiku data object from state to the clipboard.
   */
  const handleCopyButton = () => {
    const { urlStart, lineOne, lineTwo, lineThree, urlEnd } = haikuData;
    const haikurl = `${urlStart}${lineOne}-${lineTwo}-${lineThree}${urlEnd}`.replace(/\s+/g, '-').toLowerCase();
    navigator.clipboard.writeText(haikurl);
  };

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

  return (
    <div className="App">
      <Header />
      <Form onSubmit={handleOnSubmit}>
        <div className="App-Input-Group">
          <Input value={url} onChange={handleOnChange} />
          <Button type="submit">Submit</Button>
        </div>
        <div className="App-Output-Group">
          <TextField {...haikuData} />
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
