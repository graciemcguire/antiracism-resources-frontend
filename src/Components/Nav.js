import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import userActions from '../redux/actions'
import HamburgerMenu from 'react-hamburger-menu'
import logo from '../arr_logo_v1.png'

const Nav = (props) => {
  const [ isOpen, toggleMenu ] = useState(false)

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(userActions.logoutUser())
  }

  return(
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
        <img src= { logo } alt='anti-racist resources logo' className='logo'/>
        {/* <img src= { logo } alt= 'anti-racist resources logo' className ='logo' /> */}
      </section>
      </section>
        <section className={isOpen ? 'menu-list-mobile' : 'menu-list-desktop'}>
          <Link to='/books'> Books </Link>
          <Link to='/articles'> Articles </Link>
          <Link to='/videos'> Videos </Link>
          {
            props.isUserLoggedIn
            ?
            <Link to='/' onClick={ handleLogout }> log out </Link>
            :
            <>
              <Link to='/login'> Login </Link>
              <Link to='/signup'> Sign Up </Link>
            </>
          }
        </section>

    </nav>
  )
}
export default Nav;
