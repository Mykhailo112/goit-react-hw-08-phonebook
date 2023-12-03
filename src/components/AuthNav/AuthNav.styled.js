import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinkStyled = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }

  &.active {
    color: #ea8a2a;
  }
`;
