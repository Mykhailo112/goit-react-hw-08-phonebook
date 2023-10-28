import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const RegisterLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const RegisterLinkMessage = styled.p`
  font-size: 25px;
  margin: 20px 10px;
`;
export const SignInLink = styled(NavLink)`
  font-size: 25px;
  color: violet;
`;
export const RegisterLink = styled(NavLink)`
  font-size: 25px;
  margin: 20px 10px;
  color: violet;
`;
