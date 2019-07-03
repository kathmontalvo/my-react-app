import React from 'react';
import Hello from './sayHello'

//automatically compiled into HTML - "JSX"
const App = () => {

  return (
    <div>
      <h1>This is the app component</h1>
      <Hello />
    </div>
  );
}

export default App;