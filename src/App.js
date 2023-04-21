import React from 'react';
import './App.css';
import { Flip } from './coinFlip';
import Rules from './Rules';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



function App() {
  return (
    <div className="App">
      <Rules/>
      <Flip/>
    </div>
  );
}

export default App;
