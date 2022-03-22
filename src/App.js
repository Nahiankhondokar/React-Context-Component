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
    
    <Data msg={msg} setMsg={setMsg} handleInput={handleInput}></Data>
    <Demo2></Demo2>
    <Demo3></Demo3>
    <Demo1></Demo1>



    </>
  );
}

export default App;
