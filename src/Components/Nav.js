import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import userActions from '../redux/actions';
import HamburgerMenu from 'react-hamburger-menu';
import logo from '../arr_logo_v4.png';

const Nav = (props) => {

  const [isOpen, toggleMenu] = useState(false);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userActions.logoutUser());
  };


  return (

    <nav>
      <section className='hamburger-menu-container'>
        <HamburgerMenu
          isOpen={isOpen}
          menuClicked={() => toggleMenu(!isOpen)}
          width={40}
          height={30}
          strokeWidth={4}
          rotate={0}
          color='white'
          borderRadius={3}
          animationDuration={0.5}
        />
        <section className='main-title'>
          <Link to='/'><img src={logo} alt='anti-racism resources' className='logo' /></Link>
        </section>
      </section>
      <section className={isOpen ? 'menu-list-mobile' : 'menu-list-desktop'}>
        <Link onClick={() => toggleMenu(!isOpen)} to='/books'> Books </Link>
        <Link onClick={() => toggleMenu(!isOpen)} to='/articles'> Articles </Link>
        <Link onClick={() => toggleMenu(!isOpen)} to='/videos'> Videos </Link>
        <Link onClick={() => toggleMenu(!isOpen)} to='/podcasts'> Podcasts </Link>
        <Link onClick={() => toggleMenu(!isOpen)} to='/movies'> Film & TV </Link>
        <Link onClick={() => toggleMenu(!isOpen)} to='/organizations'> Organizations </Link>
        <Link onClick={() => toggleMenu(!isOpen)} to='/parents'> Raising Anti-Racist Kids </Link>
        {
          props.isUserLoggedIn
            ?
            <Link to='/' onClick={handleLogout}> log out </Link>
            :
            <>
              <Link to='/login'> Login </Link>
              <Link to='/signup'> Sign Up </Link>
            </>
        }
      </section>

    </nav>
  );
};
export default Nav;
