import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { onLogout } from '../api/auth';
import { unAuthenticateUser } from '../redux/slices/authSlice';

function Navbar() {
  const dispatch = useDispatch();
  const {isAuth} = useSelector(state => state.auth);

  const logout = async () => {
    try {
      await onLogout();
  
      dispatch(unAuthenticateUser());
      localStorage.removeItem('isAuth');
      localStorage.removeItem('user');
    } catch (error) {
      console.log(error.response);
    }
  }

    return (
    <nav className="navbar">
        <div>
            <NavLink to="/">
            <span className="logo">Pink Blog</span>
            </NavLink> 
        </div>

        {isAuth ? (
          <div className='list pageLinks'>

            <NavLink to='/dashboard'>
              <span className='pageLinkItem'>Dashboard</span>
            </NavLink>

            <NavLink to='/write'>
              <span className='pageLinkItem'>Write blog</span>
            </NavLink>

            <NavLink to='/view'>
              <span className='pageLinkItem'>View blogs</span>
            </NavLink>

            <NavLink onClick={() => logout()}>
            <span className='pageLinkItem' style={{color: "#FB6F92"}} >Logout</span>
            </NavLink>

          </div>
        ) : (
          <div className='list pageLinks'>
            <NavLink to='/login'>
              <span className='pageLinkItem'>Login</span>
            </NavLink>

            <NavLink to='/register'>
              <span className='pageLinkItem'>Register</span>
            </NavLink>
          </div>
        )}
    </nav>)
}

export default Navbar;