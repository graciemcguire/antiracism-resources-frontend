import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import userActions from '../redux/actions';

const LoginPage = props => {

  const dispatch = useDispatch();

  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
    admin: false
  });

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(userActions.loginUserToDB(loginForm));
    props.history.push('/');
  };

  const handleChange = e =>
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });

  const { email, password } = loginForm;

  return (
    <form onSubmit={ handleSubmit }>
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
        value={ password }
        onChange={ handleChange }
        placeholder="Password"
      />
      <input type="submit" />
    </form>
  );
};

export default LoginPage;
