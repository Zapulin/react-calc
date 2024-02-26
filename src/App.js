import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png';
import Button from './components/Button';
import Screen from './components/Screen';
import ButtonClear from './components/ButtonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = value => {
    setInput(input + value);
  };

  const calculate = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Nothing to calculate");
    }
  };

  return (
    <div className='App'>
      <div className='freecodecamp-logo-container'>
        <img 
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='freeCodeCamp Logo' />
      </div>
      <div className='calculator-container'>
        <Screen input={input}/>
        <div className='row'>
          <Button clickController={addInput}>1</Button>
          <Button clickController={addInput}>2</Button>
          <Button clickController={addInput}>3</Button>
          <Button clickController={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button clickController={addInput}>4</Button>
          <Button clickController={addInput}>5</Button>
          <Button clickController={addInput}>6</Button>
          <Button clickController={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button clickController={addInput}>7</Button>
          <Button clickController={addInput}>8</Button>
          <Button clickController={addInput}>9</Button>
          <Button clickController={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button clickController={calculate}>=</Button>
          <Button clickController={addInput}>0</Button>
          <Button clickController={addInput}>.</Button>
          <Button clickController={addInput}>/</Button>
        </div>
        <div className='row'>
          <ButtonClear clickController={()=> setInput('')}>Clear</ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
