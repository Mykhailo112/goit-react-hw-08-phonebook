import {
  SignInLink,
  RegisterLink,
  RegisterLinkMessage,
  RegisterLinkWrapper,
} from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <ul>
      <SignInLink to="/login">Log in</SignInLink>
      <RegisterLinkWrapper>
        <RegisterLinkMessage>New User?</RegisterLinkMessage>
        <RegisterLink to="/register">Start here</RegisterLink>
      </RegisterLinkWrapper>
    </ul>
  );
};
