import { useState } from 'react';

import './navbar.scss';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className='nav'>
      <div className='left'>
        <a href='/' className='logo'>
          <img src='logo.png' alt='logo' />
          <span>HumibaEstate</span>
        </a>
        <a href='/'>Home</a>
        <a href='/'>About</a>
        <a href='/'>Contact</a>
        <a href='/'>Agents</a>
      </div>
      <div className='right'>
        <a href='/'>Sign in</a>
        <a href='/' className='register__btn'>
          Sign up
        </a>
        <div
          className='menu__icon'
          onClick={() => setOpenMenu((prevState) => !prevState)}
        >
          <img src='menu.png' alt='menu' />
        </div>
        <div className={openMenu ? 'menu active' : 'menu'}>
          <a href='/'>Home</a>
          <a href='/'>About</a>
          <a href='/'>Contact</a>
          <a href='/'>Agents</a>
          <a href='/'>Sign in</a>
          <a href='/'>Sign up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
