import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
import { LoginLink } from './Registration.styled';

function Registration() {
  return (
    <div>
      <h1>Create account</h1>
      <RegistrationForm />
      <p>Already have an account?</p>
      <LoginLink to="/login">Log in</LoginLink>
    </div>
  );
}
export default Registration;
