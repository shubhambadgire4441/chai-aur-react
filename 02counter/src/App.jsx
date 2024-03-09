import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]=useState(15)
  
  //let counter=15;

  const addValue = () => {
    //console.log("clicked",counter)
    // counter=counter+1;
    // setCounter(counter)
    if (counter<20) {       //this was the task from hitesh choudhary
      counter=counter+1;
      setCounter(counter)
      return;
    }
  }

  const removeValue = () => {
    // counter=counter-1;
    // setCounter(counter)
    if(counter>0) {         //this was the task from hitesh choudhary
      counter=counter-1;
      setCounter(counter)
      return;
    }
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add Value{counter}</button>
      <br />
      <button
      onClick={removeValue}
      >remove value{counter}</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
