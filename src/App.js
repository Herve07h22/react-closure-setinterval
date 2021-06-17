import React, { useState, useEffect, useRef } from 'react';

// This very simple component illustrates 3 main JS/React concepts :
// - closure
// - useEffect
// - useRef


export default function App() {
  const [value, setValue] = useState('hello');
  const [show, setShow] = useState('');

  // Understand how useRef works : when current is updated ?
  const myFunction = useRef()
  myFunction.current = () => {
      setShow(value);
    }

  useEffect(() => {
    // Understand what is a closure : setInterval(() => setShow(value)) wont work
    let id = setInterval(() => myFunction.current(), 2000 * 1);
    return () => clearInterval(id);
  }, 
  [] // Understand how useEffect works : [value] wont work
  );

  return (
    <div>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <h1>{show}</h1>
    </div>
  );
}
