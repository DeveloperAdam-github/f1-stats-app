import React, { useState } from 'react';
import styled from 'styled-components';
import RedBull from '../images/redbull.svg';
import Mercedes from '../images/mercedes.svg';
import Mclaren from '../images/mclarenn.png';
import AlphaTauri from '../images/alphatauri.png';
import Ferrari from '../images/ferrari.svg';
import Alpine from '../images/alpine.svg';
import Astonmartin from '../images/astonmartin.svg';
import Haas from '../images/haas.png';
import Williams from '../images/williams.png';
import Alfa from '../images/alfa.svg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ConstructorCard = ({
  team,
  car,
  points,
  position,
  driverOne,
  driverTwo,
  logo,
  teamName,
  details,
}) => {
  const getFirstDriverName = () => {
    switch (details.Constructor.constructorId) {
      case 'red_bull':
        return 'Max Verstappen';
      case 'mercedes':
        return 'Lewis Hamilton';
      case 'williams':
        return 'George Russell';
      case 'ferrari':
        return 'Carlos Sainz';
      case 'mclaren':
        return 'Lando Norris';
      case 'alphatauri':
        return 'Pierre Gasly';
      case 'alpine':
        return 'Fernando Alonso';
      case 'aston_martin':
        return 'Sebastian Vettel';
      case 'haas':
        return 'Mick Schumacher';
      case 'alfa':
        return 'Antonio Giovinazzi';
      default:
        return;
    }
  };
  const getSecondDriverName = () => {
    switch (details.Constructor.constructorId) {
      case 'red_bull':
        return 'Sergio Perez';
      case 'mercedes':
        return 'Valterri Bottas';
      case 'williams':
        return 'Nicholas Latifi';
      case 'ferrari':
        return 'Charles Leclerc';
      case 'mclaren':
        return 'Daniel Ricciardo';
      case 'alphatauri':
        return 'Yuki Tsunoda';
      case 'alpine':
        return 'Esteban Ocon';
      case 'aston_martin':
        return 'Lance Stroll';
      case 'haas':
        return 'Nikita Mazepin';
      case 'alfa':
        return 'Kimi Räikkönen';
      default:
        return;
    }
  };

  const getTeamLogo = () => {
    switch (details.Constructor.constructorId) {
      case 'red_bull':
        return RedBull;
      case 'mercedes':
        return Mercedes;
      case 'williams':
        return Williams;
      case 'ferrari':
        return Ferrari;
      case 'mclaren':
        return Mclaren;
      case 'alphatauri':
        return AlphaTauri;
      case 'alpine':
        return Alpine;
      case 'aston_martin':
        return Astonmartin;
      case 'haas':
        return Haas;
      case 'alfa':
        return Alfa;
      default:
        return;
    }
  };

  const getTeamCar = () => {
    switch (details.Constructor.constructorId) {
      case 'red_bull':
        return 'https://www.formula1.com/content/dam/fom-website/teams/2021/red-bull-racing.png.transform/6col-retina/image.png';
      case 'mercedes':
        return 'https://www.formula1.com/content/dam/fom-website/teams/2021/mercedes.png.transform/4col-retina/image.png';
      case 'mclaren':
        return 'https://www.formula1.com/content/dam/fom-website/teams/2021/mclaren.png.transform/4col-retina/image.png';
      case 'ferrari':
        return 'https://www.formula1.com/content/dam/fom-website/teams/2021/ferrari.png.transform/4col-retina/image.png';
      case 'alfa':
        return 'https://www.formula1.com/content/dam/fom-website/teams/2021/alfa-romeo-racing.png.transform/4col-retina/image.png';
      case 'alphatauri':
        return 'https://www.formula1.com/content/dam/fom-website/teams/2021/alphatauri.png.transform/4col-retina/image.png';
      case 'alpine':
        return 'https://www.formula1.com/content/dam/fom-website/teams/2021/alpine.png.transform/4col-retina/image.png';
      case 'haas':
        return 'https://www.formula1.com/content/dam/fom-website/teams/2021/haas-f1-team.png.transform/4col-retina/image.png';
      case 'williams':
        return 'https://www.formula1.com/content/dam/fom-website/teams/2021/williams.png.transform/4col-retina/image.png';
      case 'aston_martin':
        return 'https://www.formula1.com/content/dam/fom-website/teams/2021/aston-martin.png.transform/4col-retina/image.png';
      default:
        return;
    }
  };

  return (
    <motion.div
      initial={{ y: -2000 }}
      animate={{ y: 10 }}
      transition={{ ease: 'easeIn', duration: 1 }}
    >
      <ConstructorCardContainer team={details.Constructor.constructorId}>
        {/* <Link
        to={`/${details.Constructor.constructorId}`}
        style={{ textDecoration: 'none', color: 'whitesmoke' }}
      > */}
        <CardTitleContainer>
          <CardHeader>
            <TeamPosition>{details.position}</TeamPosition>
            <TeamPoints>
              {details.points}{' '}
              <span
                style={{
                  backgroundColor: 'black',
                  fontSize: '1rem',
                  borderRadius: '10px',
                  fontWeight: '900',
                  padding: '3px',
                }}
              >
                PTS
              </span>
            </TeamPoints>
          </CardHeader>
          <CardMiddle>
            <TeamName>{details.Constructor.name}</TeamName>
            <TeamLogo src={getTeamLogo()} />
          </CardMiddle>
          <CardBottom>
            <FirstDriver>{getFirstDriverName()}</FirstDriver>
            <SecondDriver>{getSecondDriverName()}</SecondDriver>
          </CardBottom>
          <TeamCarContainer>
            <TeamCar src={getTeamCar()} />
          </TeamCarContainer>
        </CardTitleContainer>
        {/* </Link> */}
      </ConstructorCardContainer>
    </motion.div>
  );
};

export default ConstructorCard;

const ConstructorCardContainer = styled.div`
  font-family: 'Oswald';
  /* min-height: 10em; */
  height: 30rem;
  width: 100%;
  background-image: ${({ team }) => {
    switch (team) {
      case 'red_bull':
        return `linear-gradient(to bottom right, #1c1286, rgba(24, 17, 102, 0.1))`;
      case 'mercedes':
        return `linear-gradient(to bottom right, #40BAB5, rgb(64, 186, 181, 0.4))`;
      case 'mclaren':
        return 'linear-gradient(to bottom right, #fd9900, rgb(253, 153, 0, 0.1))';
      case 'ferrari':
        return 'linear-gradient(to bottom right, #CC1700, rgba(204, 23, 0, 0.1))';
      case 'alphatauri':
        return `linear-gradient(to bottom right, #FFFFFF, rgba(10, 40, 64, 0.2))`;
      case 'alpine':
        return `linear-gradient(to bottom right, #0038BD, rgb(214, 34, 16, 0.8))`;
      case 'aston_martin':
        return `linear-gradient(to bottom right, #015850, rgba(1, 88, 80, 0.3))`;
      case 'haas':
        return `linear-gradient(to bottom right, #f9fefd, rgb(167, 35, 40, 0.7))`;
      case 'alfa':
        return `linear-gradient(to bottom right,#87181F, rgb(255, 255, 255, 0.9))`;
      case 'williams':
        return `linear-gradient(to bottom right,#13151B, rgb(7, 162, 205, 0.5))`;
      default:
        return;
    }
  }};

  border-radius: 1rem;
  color: white;
  margin-top: 2rem;
  padding: 0.5rem;

  :hover {
    border: 3px solid #0d0d14;
  }

  /* @media screen and (min-width: 800px) {
    height: 30rem;
  } */
`;

const CardTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  border-bottom: 2px solid #111111;
`;

const TeamPosition = styled.p`
  font-size: 2rem;
  font-weight: 900;
`;

const TeamPoints = styled.p`
  font-size: 2rem;
`;

const CardMiddle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  border-bottom: 2px solid #111111;
`;

const TeamName = styled.p`
  font-size: 25px;
  font-weight: 900;
`;

const TeamLogo = styled.img`
  height: 100%;
  padding: 5px;
`;

const CardBottom = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const FirstDriver = styled.p`
  border-bottom: 2px solid #111111;
  border-right: 2px solid #111111;
  border-bottom-right-radius: 1rem;
  margin-right: 1rem;
  padding: 1rem;
  font-size: 1.2rem;
  letter-spacing: -1px;
`;

const SecondDriver = styled.p`
  border-bottom: 2px solid #111111;
  border-right: 2px solid #111111;
  border-bottom-right-radius: 1rem;
  padding: 1rem;
  font-size: 1.2rem;
  letter-spacing: -1px;
`;

const TeamCarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const TeamCar = styled.img`
  width: 80%;
  grid-row-start: 2;
`;
