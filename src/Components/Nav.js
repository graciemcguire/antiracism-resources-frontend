import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userActions } from '../redux/actions'

const Nav = () => {

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(userActions.logoutUser())
  }

  return(
    <nav style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <Link to='/'> home </Link>
      <Link to='/signup'> sign up </Link>
      <Link to='/login'> login </Link>
      <Link to='/' onClick={ handleLogout }> log out </Link>
    </nav>
  )
}
export default Nav;
