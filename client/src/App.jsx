import { useState } from 'react'
import './App.css'
import Login from './components/Login/Login'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from './components/Register/Register'
import Home from './components/Home/Home'
import  {useSelector} from 'react-redux'

function App() {
  const [count, setCount] = useState(0)
  const {user} = useSelector(store => store.user)

  return (
    <div className="app">
      <Router>
<Routes>
  <Route path='/login' element = {<Login />}/>
  <Route path='/register' element = {<Register />}/>
  <Route path='/' element = {user ? <Home /> : <Login />}/>
</Routes>
     
      </Router>
    </div>
  )
}

export default App
