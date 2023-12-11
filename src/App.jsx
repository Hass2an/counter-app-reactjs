import { useState } from 'react'
import './App.css'
import "./index.css"
function App() {

const [counter, setCounter] = useState(15)
const addValue = function(){
  
  setCounter(counter+1)
}

const removeValue = function(){
  if (counter === 0){
   return;
  }
  setCounter(counter-1)
}
  return (

    <>
      <h2>Counter APP </h2>
      <h3>Counter Value: {counter}</h3>
      <button onClick={addValue}>
      Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
      <footer>Counter App made By Hassan Kamal</footer>
    </>
  )
}

export default App
