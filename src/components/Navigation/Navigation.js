import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-slice';
import { NavLinkStyled } from './Navigation.styled';

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLinkStyled to="/">Home</NavLinkStyled>
      {isLoggedIn && <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>}
    </nav>
  );
}
