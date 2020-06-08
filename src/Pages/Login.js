// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import userActions from '../redux/actions'
//
// const LoginPage = props => {
//
//   const dispatch = useDispatch();
//
//   const [loginForm, setLoginForm] = useState({
//     email: '',
//     password: '',
//     admin: false
//   })
// }
//
// const handleSubmit = e => {
//     e.preventDefault()
//     dispatch(userActions.loginUserToDB(loginForm))
//     props.history.push('/')
// }
//
// const handleChange = e => {
//   setLoginForm({ ...loginForm, [e.target.name]: e.target.value })
//
//   const { email, password } = loginForm
//
//   return (
//     <form onSubmit={ handleSubmit }>
//       <h1>Login</h1>
//
//       <input
//         type='text'
//         name='email'
//         value={ email }
//         onChange={ handleChange }
//         placeholder='email'
//       />
//
//       <input
//         type='password'
//         name='password'
//         value={ password }
//         onChange={ handleChange }
//         placeholder='password'
//       />
//
//       <input type='submit'/>
//     </form>
//   )
// }
//
// export default LoginPage;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import userActions from '../redux/actions';

const LoginPage = props => {
  // initializing dispatch
  const dispatch = useDispatch();
  // Setting up local state using the useState hook
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
    admin: false
  });

  // controlled form functions
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(userActions.loginUserToDB(loginForm));
    props.history.push('/');
  };

  const handleChange = e =>
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });

  // Destructuring keys from our local state to use in the form
  const { email, password } = loginForm;

  // Component code
  return (
    <form onSubmit={handleSubmit}>
      <h1>Login Page</h1>
      <input
        type="text"
        name="email"
        value={ email }
        onChange={ handleChange }
        placeholder="Username"
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        placeholder="Password"
      />
      <input type="submit" />
    </form>
  );
};

export default LoginPage;
