import styled from 'styled-components';

export const UserMenuWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  padding: 12px;
  font-weight: 400;
  color: #2a363b;
`;

export const Button = styled.button`
  padding: 12px;
  font-weight: 700;
  color: #2a363b;
  border: none;
  cursor: pointer;
  background-color: transparent;

  &:hover,
  &:focus {
    color: #ea8a2a;
    transform: scale(1.1);
  }
`;
