import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperation';
import {
  LoginTitle,
  LabelLogin,
  LabelInput,
  LoginFormWrapar,
  Button,
} from '../../pages/login/Login.stayled';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handlChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      case 'name':
        return setName(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setEmail('');
    setPassword('');
    setName('');
  };
  return (
    <div>
      <LoginTitle>Register page</LoginTitle>
      <form onSubmit={handleSubmit} autoComplete="off">
        <LoginFormWrapar>
          <LabelLogin>
            Name
            <LabelInput
              type="name"
              name="name"
              value={name}
              onChange={handlChange}
            />
          </LabelLogin>
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

        <Button type="submit">Aply</Button>
      </form>
    </div>
  );
};
export default RegisterForm;
