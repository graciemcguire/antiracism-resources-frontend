import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import userActions from '../redux/actions'
import HamburgerMenu from 'react-hamburger-menu'


const Nav = () => {
  const [ isOpen, toggleMenu ] = useState(false)
  const dispatch = useDispatch()

  const handleMenuClick = () => {

  }

  const handleLogout = () => {
    dispatch(userActions.logoutUser())
  }

  return(
    <nav style={{ display: 'flex'}}>
    <HamburgerMenu
      isOpen={isOpen}
      menuClicked={() => toggleMenu(!isOpen)}
      width={40}
      height={30}
      strokeWidth={3}
      rotate={0}
      color='black'
      borderRadius={1}
      animationDuration={0.5}
    />
      {
        isOpen
        ?
        <section className='menu-list'>
          <Link to='/signup'> sign up </Link>
          <Link to='/login'> login </Link>
          <Link to='/' onClick={ handleLogout }> log out </Link>
        </section>
        :
        null
      }
    </nav>
  )
}
export default Nav;
