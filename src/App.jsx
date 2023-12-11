import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputForm from './InputForm.jsx';
import './InputForm.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>One Signal sample </h1>
      <InputForm />
    </div>
  )
}

export default App
