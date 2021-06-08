import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { ReactComponent as Logo } from '../images/newsicon.svg';
import { ReactComponent as Podium } from '../images/podium.svg';
import { ReactComponent as Helmet } from '../images/helmet.svg';

const FooterNav = () => {
  return (
    <FooterNavContainer>
      <LinkContainer>
        <ButtonStyles>
          <Link to='/'>
            <SvgStyles>
              <Announcement />
            </SvgStyles>
          </Link>
        </ButtonStyles>
        <p style={{ fontSize: '0.5rem', color: 'grey', marginBottom: '5px' }}>
          News
        </p>
      </LinkContainer>

      <LinkContainer>
        <ButtonStyles>
          <Link to='/standings'>
            <SvgStyles>
              <Standings />
            </SvgStyles>
          </Link>
        </ButtonStyles>
        <p style={{ fontSize: '0.5rem', color: 'grey', marginBottom: '5px' }}>
          Standings
        </p>
      </LinkContainer>

      <LinkContainer>
        <ButtonStyles>
          <Link to='/racecalendar'>
            <SvgStyles>
              <HelmetLogo />
            </SvgStyles>
          </Link>
        </ButtonStyles>
        <p style={{ fontSize: '0.5rem', color: 'grey', marginBottom: '5px' }}>
          Race Calendar
        </p>
      </LinkContainer>
    </FooterNavContainer>
  );
};

export default FooterNav;

const FooterNavContainer = styled.div`
  height: 9vh;
  width: 100vw;
  background-color: black;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: none;
`;

const LinkContainer = styled.div`
  display: flex;
  height: 9vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

const SvgStyles = styled.svg`
  height: 40px;
  width: 40px;
`;

const Announcement = styled(Logo)`
  stroke: grey;
  fill: none;
  stroke-width: 4;

  :hover {
    stroke: rgba(115, 10, 9, 0.6);
  }

  :active {
    stroke: rgba(115, 10, 9, 0.6);
  }
`;

const Standings = styled(Podium)`
  stroke: grey;
  stroke-width: 12;
  :hover {
    stroke: rgba(115, 10, 9, 0.6);
  }
`;
const HelmetLogo = styled(Helmet)`
  stroke: grey;
  stroke-width: 2;
  :hover {
    stroke: rgba(115, 10, 9, 0.6);
  }
`;

const ButtonStyles = styled(Button)`
  /* &&& {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 2.5rem;
    margin: 2rem;
    color: white;
  } */
`;
