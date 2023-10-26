import { useIsLoggedIn } from 'hooks/hooks';
import { StyledNavigation, NavigationLink } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useIsLoggedIn();

  return (
    <StyledNavigation>
      <NavigationLink to="/">Home</NavigationLink>
      {isLoggedIn && <NavigationLink to="/contacts">Contacts</NavigationLink>}
    </StyledNavigation>
  );
};
