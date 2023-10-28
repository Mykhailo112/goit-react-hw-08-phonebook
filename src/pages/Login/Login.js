import { LoginForm } from 'components/LoginForm/LoginForm';
import { RegisterLink, Text } from './Login.styled';

function Login() {
  return (
    <div>
      <h1>Log in</h1>
      <LoginForm />
      <Text>New user?</Text>
      <RegisterLink to="/register">Create your account</RegisterLink>
    </div>
  );
}

export default Login;
