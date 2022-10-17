import { useState } from 'react'
import './App.css'
import Login from './components/Login/Login'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from './components/Register/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Router>
<Routes>
  <Route path='/login' element = {<Login />}/>
  <Route path='/register' element = {<Register />}/>
</Routes>
     
      </Router>
    </div>
  )
}

export default App
