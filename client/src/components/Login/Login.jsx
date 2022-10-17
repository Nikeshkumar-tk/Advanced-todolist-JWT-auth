import './Login.css'
import axios from '../../axios'
import { useRef } from 'react'



const Login = () => {
  const emailRef = useRef()
  const passwordRef = useRef()

  const loginUser = async (e) => {

    e.preventDefault()
    try{

      const res = await axios.post("/login",{
        email:emailRef.current.value,
        password:passwordRef.current.value
      })
      console.log(res.data)
    }catch(err) {

      console.log(err)

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