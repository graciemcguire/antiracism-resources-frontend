import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import userActions from '../redux/actions.js'

const SignUp = props => {

  const dispatch = useDispatch()

  const [signUpForm, setSignUpForm] = useState({
    email: '',
    password: '',
    admin: false
  })

  const handleChange = e => {
    setSignUpForm({ ...signUpForm, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const { history } = props
    dispatch(userActions.newUserToDB(signUpForm))
    history.push('/')
  }

  const { email, password } = signUpForm

  return (
    <form>

      <h1>Signup</h1>

      <input
        type='text'
        name='email'
        value={ email }
        onChange={ handleChange }
        placeholder='email'
      />

      <input
        type='password'
        name='password'
        value={ password }
        onChange={ handleChange }
        placeholder='password'
      />

      <input type='submit' />

    </form>
  )
}

export default SignUp;
