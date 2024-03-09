import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './comoponents/Card'

function App() {
  const [count, setCount] = useState(0)
  
  let myobj={
    username:"hitesh",
    age:21
  }

  let newArr=[1,2,3];

  return (
    <>
     <h1 className='bg-green-500 text-black p-4 rounded-xl mb-5'>Tailwind Test </h1>
     
    <Card username="chaiaurcode" btnText="Click me" />
    <Card username="Hitesh" btnText="Visit me"/>
    </>
  )
}

export default App
