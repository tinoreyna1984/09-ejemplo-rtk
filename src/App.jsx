import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './slices/counter/counterSlice';

function App() {

  
  const {counter} = useSelector(state => state.counter) || 0;
  const dispatch = useDispatch();

  const [inc, setInc] = useState(0);

  
  const handleInput = (e) => {
    e.preventDefault();
    //console.log(e.target.value);
    setInc(e.target.value)
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Contador: {counter}</p>
        <p>
          <button type="button" onClick={() => {dispatch(increment(counter))}}>
            +1
          </button>
          <button type="button" onClick={() => {dispatch(decrement(counter))}}>
            -1
          </button>
          <input type="text" value={inc} name='inc' onChange={handleInput} />
          <button type="button" onClick={() => dispatch(incrementByAmount(Number(inc) || 0))}>
            +INC
          </button>
        </p>
      </header>
    </div>
  )
}

export default App
