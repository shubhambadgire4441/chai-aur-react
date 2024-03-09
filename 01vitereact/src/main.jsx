import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// function MyApp(){
//   return(
//     <div>
//        <h1>Custom app !</h1>
//     </div>
//   )
// }
//==================================================================================
// const reactElement = {                                                         //02
//   type: 'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank'
//   },
//   children: 'Click me to visit google'    
// }
//============================making new element=========================================

// const anotherElement = (
//   <a href="https://google.com" target='_blank'>Visit Google</a>
// )
//===========================making new element=========================================

const anotherUser = "chai aur react"
const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit google',
  anotherUser
)
//====================this was react element============================================

ReactDOM.createRoot(document.getElementById('root')).render(
  
  reactElement

)
