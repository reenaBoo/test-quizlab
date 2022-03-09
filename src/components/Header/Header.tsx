import React from 'react';
import { StyledHeader, StyledLink } from './Header.styles';

function Header() {
  return (
    <StyledHeader>
      <StyledLink to="/posts" className={(isActive) => 'nav-link' + (!isActive ? ' inactive' : '')}>
        Все посты
      </StyledLink>
    </StyledHeader>
  );
}

export default Header;
