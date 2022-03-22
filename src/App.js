import React, { useState } from 'react';
import './App.css';
import Data from './Components/Data';
import Demo1 from './Components/Demo1';
import Demo2 from './Components/Demo2';
import Demo3 from './Components/Demo3';

function App() {

  const [msg, setMsg] = useState('');

  const handleInput = (e) => {
      setMsg(e.target.value);
  }


  return (
    
    <>
    
    <Data msg={msg} handleInput={handleInput}></Data>
    <Demo2 msg={msg}></Demo2>
    <Demo3 msg={msg} handleInput={handleInput}></Demo3>
    <Demo1 msg={msg}></Demo1>



    </>
  );
}

export default App;
