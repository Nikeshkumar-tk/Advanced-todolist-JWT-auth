import { useRef } from "react"
import axios from '../../axios'


const Register = () => {

    const usernameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()

    const registerUser = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post("/register",{
                username: usernameRef.current.value,
                email:emailRef.current.value,
                password:passwordRef.current.value
            })

            console.log(res.data)

        } catch (error) {
            
        }



    }


    return (
        <div className='login-wrap'>
            <h1>Nik Todos</h1>
            <form className='login-form' onSubmit={registerUser}>
                <h2>Register</h2>
                <input type="text" placeholder='Enter your name' ref={usernameRef}/>
                <input type="email" placeholder='Enter your email' ref={emailRef}/>
                <input type="password" placeholder='Enter your password ' ref={passwordRef}/>
                <button className="login-btn" type="submit">Login</button>
            </form>
        </div>
    )
}

export default Register