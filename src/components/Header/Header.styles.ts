import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 30px 0;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 15px;
  margin: 0 1px 0 0;
  display: block;
  padding: 7px 30px;
  background-color: ${({ theme }) => theme.secondaryGrey};
  
  .nav-link {
    color: blue;
    &.inactive {
      color: black;
    }
  }
`;
