import React, {useState} from 'react';
import Tweet from './Tweet';

//automatically compiled into HTML - "JSX"
//prop: property we can define in each individual component;

const App = () => {

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
    setRed(!isRed)
  }
  return (
    <div className="app">
      <h1 className={ isRed ? 'red' : ''}>Change my color</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
    </div>
  );
}

export default App;