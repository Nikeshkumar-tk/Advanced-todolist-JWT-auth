import './Login.css'
import axios from '../../axios'
import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loginStart, loginSucess, loginFailure} from '../../features/user/userSlice'
import { useEffect } from 'react'
import { store } from '../../store'



const Login = () => {
  
  const emailRef = useRef()
  const passwordRef = useRef()
  const {user} = useSelector((store) => store.user)
  const dispatch = useDispatch()

  const loginUser = async (e) => {

    e.preventDefault()
    dispatch(loginStart())
    try{

      const res = await axios.post("/login",{
        email:emailRef.current.value,
        password:passwordRef.current.value
      })
      console.log(res.data)
      dispatch(loginSucess(res.data))
      if (res.data) {
        localStorage.setItem('user', JSON.stringify(res.data))
      }
      res && window.location.replace("/")
    }catch(err){

      console.log(err)
      dispatch(loginFailure())

    }

  }

  return (
    <div className='login-wrap'>
      <h1>Nik Todos</h1>
      <form className='login-form' onSubmit={loginUser}>
        <h2>Login</h2>
        <input type="email" placeholder='Enter your email' ref={emailRef}/>
        <input type="password" placeholder='Enter your password ' ref={passwordRef}/>
        <button className="login-btn" type='submit'>Login</button>
      </form>

    </div>
  )
}

export default Login