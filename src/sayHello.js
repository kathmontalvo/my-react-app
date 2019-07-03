import React from 'react';

const Hello = () => {
    
  const SayHello = () => {
    console.log('hello');
  };
  
    return (
        <div>
            <h3>This is the hello component</h3>
            <button onClick={SayHello}>Say Hello</button>
        </div>
    )
}

export default Hello;