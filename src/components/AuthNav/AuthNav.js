import { NavLinkStyled } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <div>
      <NavLinkStyled to="/register">Registration</NavLinkStyled>
      <NavLinkStyled to="/login">LogIn</NavLinkStyled>
    </div>
  );
}
