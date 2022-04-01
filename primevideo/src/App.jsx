import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Nav } from './component/navbar'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav/>
    </div>
  )
}

export default App
