import './navbar.scss';

const Navbar = () => {
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
        <a href='/' className='register__btn'>Sign up</a>
      </div>
    </nav>
  );
};

export default Navbar;
