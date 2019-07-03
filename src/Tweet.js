import React from 'react';
import './App.css'
function Tweet({name, msg, likes}) {
  return (
    <div className="tweet">
      <h3>{name}</h3>
      <p>{msg}</p>
      <p>{likes}</p>
    </div>
  )
}

export default Tweet;