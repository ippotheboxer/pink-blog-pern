import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function Navbar() {
    const {isAuth} = useSelector(state => state.auth);

    return (
    <nav className="navbar">
        <div>
            <NavLink to="/">
            <span className="logo">Pink Blog</span>
            </NavLink> 
        </div>

        {isAuth ? (
          <div className='list pageLinks'>
            <NavLink to='/write'>
              <span className='pageLinkItem'>Write blog</span>
            </NavLink>

            <NavLink to='/view'>
              <span className='pageLinkItem'>View blogs</span>
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