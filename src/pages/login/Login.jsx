import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperation';

import {
  LoginTitle,
  LabelLogin,
  LabelInput,
  LoginFormWrapar,
  Button,
} from './Login.stayled';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPasswordl] = useState('');
  const dispatch = useDispatch();

  const handlChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPasswordl(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPasswordl('');
  };
  return (
    <div>
      <LoginTitle>Login page</LoginTitle>
      <form onSubmit={handleSubmit} autoComplete="off">
        <LoginFormWrapar>
          <LabelLogin>
            Email
            <LabelInput
              type="email"
              name="email"
              value={email}
              onChange={handlChange}
            />
          </LabelLogin>
          <LabelLogin>
            Password
            <LabelInput
              type="password"
              name="password"
              value={password}
              onChange={handlChange}
            />
          </LabelLogin>
        </LoginFormWrapar>

        <Button type="submit">Enter</Button>
      </form>
    </div>
  );
};
export default Login;
