import './App.css';
import { useState } from 'react';

function App() {
  const [display, setDisplay] = useState('')
  const buttons = [
    '7', '8', '9', '+',
    '4', '5', '6', '-',
    '1', '2', '3', '*',
    '0', '.', '=', '/',
    'C'
  ]

  const handleCalculate = (value) => {
    if (value === '=') {
      try {
        const result = eval(display);
        setDisplay(result.toString());
      } catch (error) {
        console.error('error');
      }

    } else if (value === 'C') {
      setDisplay('');
    }
    else {
      setDisplay(display + value);
    }
  }

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <input
        type='text'
        value={display}
        readOnly
        placeholder='enter..'
      />
      <div className='buttons'>
        {
          buttons.map((btn, index) => (
            <button key={index}
              onClick={() => { handleCalculate(btn) }}
            >{btn}</button>
          ))
        }
      </div>
    </div>
  );
}

export default App;
