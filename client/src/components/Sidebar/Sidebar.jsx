import './Sidebar.css'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import SinglePageView from '../singlePageView/singlePageView'
import { setTodos } from '../../features/todo/todoSlice'
import { getMyTodos } from '../../features/todo/services/todoServices'
const Sidebar = ({setTodo}) => {

  const {user} = useSelector(store => store.user)
  const {todos} = useSelector(store => store.todo)
  const dispatch = useDispatch()

  useEffect(() => {
    const res = getMyTodos(user.id, user.token)

    // console.log(user.id, user.token)

    res.then((data) => {
      // console.log(data.todos)
      dispatch(setTodos(data.todos))
    })
    
   
  }, [])
 
  //Creating new task


  return (
    <div className='sidebar-wrap'>
      <>
        <div className="heading-wrap">

        <h3>My Todos</h3>
        <i className="addIcon fa-solid fa-plus"></i>
        </div>
        <div className="sidebar-container">
        {
              todos.map((todo) => {
                return(
                <h4 onClick={() => setTodo(todo)}>{todo.name}</h4>
                )
              })

            }
           
        </div>
        </>
       
    </div>
  )
}

export default Sidebar