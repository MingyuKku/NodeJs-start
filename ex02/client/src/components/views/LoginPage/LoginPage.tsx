import React from 'react';
// import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_actions';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [ email, setEmail ] = React.useState('');
  const [ password, setPassword ] = React.useState('');

  const onEmailHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  }

  const onPasswordHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  }

  const onSubmitHandler:React.FocusEventHandler<HTMLFormElement> = (event:React.FocusEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(loginUser({
      email,
      password
    }))
  }

  return (
    <div
      style={{
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center',
        'width': '100%',
        'height': '100vh'
      }}
    >
      <form
        style={{
          'display': 'flex',
          'flexDirection': 'column',
        }}
        onSubmit={ onSubmitHandler }
      >
        <label>Email</label>
        <input type="email" name="email" value={ email } onChange={ onEmailHandler } />
        <label>Password</label>
        <input type="password" name="password" value={ password } onChange={ onPasswordHandler } />
        <br/>
        <button type='submit'>
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginPage;