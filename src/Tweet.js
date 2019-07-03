import React from 'react';
import './App.css'
function Tweet({name, msg, likes, action}) {
  return (
    <div className="tweet">
      <h3>{name}</h3>
      <p>{msg}</p>
      <p>{likes}</p>
      <button onClick={action}>Like</button>
    </div>
  )
}

export default Tweet;