/*global chrome*/
import React, { useEffect, useState } from 'react';
import Input from './Components/Input/Input';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';
import Button from './Components/Button/Button';
import './App.css';

const App = () => {
  const [url, setUrl] = useState<string>('');

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => setUrl(e.target.value);

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
      <Form>
        <Input value={url} onChange={handleOnChange} />
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default App;
