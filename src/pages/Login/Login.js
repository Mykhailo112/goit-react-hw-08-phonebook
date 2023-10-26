import { LoginForm } from 'components/LoginForm/LoginForm';
import { RegisterLink } from './Login.styled';

function Login() {
  return (
    <div>
      <h1>Log in</h1>
      <LoginForm />
      <p>New user?</p>
      <RegisterLink to="/register">Create your account</RegisterLink>
    </div>
  );
}

export default Login;
