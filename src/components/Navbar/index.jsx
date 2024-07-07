import { useState } from 'react';
import { Link } from 'react-router-dom';

import './navbar.scss';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const user = true;

  return (
    <nav className='nav'>
      <div className='left'>
        <Link to='/' className='logo'>
          <img src='logo.png' alt='logo' />
          <span>HumibaEstate</span>
        </Link>
        <Link to='/'>Home</Link>
        <Link to='/list'>List</Link>
        <a href='#'>Contact</a>
        <a href='#'>Agents</a>
      </div>
      <div className='right'>
        {user ? (
          <div className='user'>
            <img
              src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
            />
            <span>John Doe</span>
            <Link to='/profile' className='profile'>
              <div className='notification'>3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <Link to='/sign-in'>Sign in</Link>
            <Link to='/sign-up' className='register__btn'>
              Sign up
            </Link>
          </>
        )}
        {/* <Link to='/sign-in'>Sign in</Link>
        <Link to='/sign-up' className='register__btn'>
          Sign up
        </Link> */}
        <div
          className='menu__icon'
          onClick={() => setOpenMenu((prevState) => !prevState)}
        >
          <img src='menu.png' alt='menu' />
        </div>
        <div className={openMenu ? 'menu active' : 'menu'}>
          <Link to='/'>Home</Link>
          <Link to='/list'>List</Link>
          <a href='#'>Contact</a>
          <a href='#'>Agents</a>
          <Link to='/sign-in'>Sign in</Link>
          <Link to='/sign-up'>Sign up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
