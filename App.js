import { useState } from 'react';
import './App.css';
import Result from './Result';
const secretNumber = Math.floor(Math.random() * 10)

function App() {
  const [uservalue, setUservalue] = useState('')
  console.log(secretNumber);
  function handleChange(e) {
    setUservalue(e.target.value)

  }

  return (
    <div className='home'>
      <div className='container'>
        <label htmlFor='userinput'>Guess the number between 1 and 10</label>
        <input type='text' id='userinput' onChange={handleChange} />
        <Result secretNumber={secretNumber} uservalue={uservalue} />
      </div>
    </div>
  );
}

export default App;
