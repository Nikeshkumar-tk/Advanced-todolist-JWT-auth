import './Navbar.css'
import { useSelector, useDispatch } from 'react-redux'
import { logOut } from '../../features/user/userSlice'



const Navbar = () => {
    const { user } = useSelector(store => store.user )
    const dispatch = useDispatch()


    return (
        <div className='nav-wrap'>
            <div className="container">
                <h2>NiKToDoS</h2>
                <div className="nav-detail-wrap">
                    <div className="task-wrap">
                        <i class="fa-solid fa-list-check"></i>
                        <div className="task-indicator">20</div>
                    </div>
                    <div className="user-wrap">
                        <i class="fa-solid fa-user"></i>
                        <p>{user.username}</p>
                        <i class="fa-solid fa-right-from-bracket" onClick={() => dispatch(logOut())}></i>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar