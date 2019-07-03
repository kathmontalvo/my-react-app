import React, {useState} from 'react';
import Tweet from './Tweet';

//automatically compiled into HTML - "JSX"
//prop: property we can define in each individual component;

const App = () => {

  const [users, setUsers] = useState([
    {name: 'Kath', msg: 'Hi there'},
    {name: 'Alli', msg: 'Not bussy'},
    {name: 'Bob', msg: 'BYe'},
  ]);
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count+1)
  }
  return (
    <div className="app">
      {users.map(user => (
        <Tweet name={user.name} msg={user.msg} likes={count} action={increment}/>
      ))}
    </div>
  );
}

export default App;