import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Evaluator from './Evaluator';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Evaluator/>
    </>
  )
}

export default App
