import { NavLinkStyled } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <div>
      <NavLinkStyled to="/register">Register</NavLinkStyled>
      <NavLinkStyled to="/login">Login</NavLinkStyled>
    </div>
  );
}
