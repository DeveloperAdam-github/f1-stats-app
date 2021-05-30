import React from 'react';
import styled from 'styled-components';
import Menu from '../images/menu.svg';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import F1 from '../images/f1-logo.svg';
import { Button } from '@material-ui/core';

const Header = () => {
  return (
    <HeaderStyles>
      <HeaderContainer>
        <HeaderLogo src={F1} alt='logo' />
        <HeaderButton>
          <ArrowDropDownCircleIcon styled={{ fill: 'red' }} />
        </HeaderButton>
      </HeaderContainer>
    </HeaderStyles>
  );
};

export default Header;

const HeaderStyles = styled.div`
  display: flex;
  position: relative;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  width: 100%;
  background-color: transparent;
  margin: 1rem;
`;

const HeaderButton = styled(Button)`
  width: 1rem;
  height: 1.5rem;
  border-radius: 50%;

  &&& {
    color: red;
  }
`;

const HeaderMenu = styled.img`
  height: 2em;
  width: 2em;
  color: red;
`;

const HeaderLogo = styled.img`
  height: 8em;
  width: 8rem;
`;
