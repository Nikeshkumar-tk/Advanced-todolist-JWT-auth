import { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import SinglePageView from '../singlePageView/singlePageView'
import './Body.css'
const Body = () => {
    const [todo, setTodo] = useState({})

  return (
    <div className='body-wrap'>
<Sidebar setTodo = {setTodo}/>

<SinglePageView todo = {todo}/>
    </div>
  )
}

export default Body