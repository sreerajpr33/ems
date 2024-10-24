import { useState } from 'react'
import './App.css'
import Display from './components/Fun'
import AddEmployee from './components/Add'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="App">
      <h1 className='taxt green'>employee management system</h1>
      <Display/>
      <AddEmployee/>
     </div>
    </>
  )
}

export default App
