import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
import { LoginLink, Text } from './Registration.styled';

function Registration() {
  return (
    <div>
      <h1>Create account</h1>
      <RegistrationForm />
      <Text>Already have an account?</Text>
      <LoginLink to="/login">Log in</LoginLink>
    </div>
  );
}
export default Registration;
