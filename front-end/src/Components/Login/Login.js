import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './Login.css';
import { auth } from '../../firebase';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();

    // firebase login
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) history.push('/');
      })
      .catch((error) => alert(error.message));
    // firebase register
  };

  return (
    <div className='login'>
      <Link to='/'>
        <img
          src='http://pngimg.com/uploads/amazon/amazon_PNG6.png'
          alt='amazon'
          className='login__logo'
        />
      </Link>
      <div className='login__container'>
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className='login__signInButton'
            type='submit'
            onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to AMAZON FAKE CLONE Conditions of Use and
          Privacy Notice.
        </p>
        <button className='login__registerButton' onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
