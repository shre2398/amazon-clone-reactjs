import React from 'react';
import { Link } from 'react-router-dom';

import './Login.css';

function Login() {
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
          <input type='text' />
          <h5>Password</h5>
          <input type='password' />
          <button className='login__signInButton'>Sign In</button>
        </form>
        <p>
          By continuing, you agree to AMAZON FAKE CLONE Conditions of Use and
          Privacy Notice.
        </p>
        <button className='login__registerButton'>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
