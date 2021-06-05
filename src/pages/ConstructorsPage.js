import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ConstructorCard from '../components/ConstructorCard';
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
import axios from 'axios';
import { motion } from 'framer-motion';

const ConstructorsPage = () => {
  const [teamInfo, setTeamInfo] = useState(null);

  useEffect(() => {
    async function getTeamData() {
      try {
        const response = await axios.get(
          'https://ergast.com/api/f1/current/constructorStandings.json'
        );
        setTeamInfo(response.data);
        console.log(response.data);
      } catch (err) {
        console.error(err.message);
      }
    }

    getTeamData();
  }, []);

  return (
    <ConstructorStyles>
      <ConstructorContainer>
        <ConstructorHeader>
          <ConstructorHeaderContainer>
            <HeaderLink to='/standings'>Drivers</HeaderLink>
            <HeaderLink1 to='/constructors'>
              <HeaderTitle>Constructors</HeaderTitle>
            </HeaderLink1>
          </ConstructorHeaderContainer>
        </ConstructorHeader>
        {teamInfo ? (
          <CardContainer>
            {Object.keys(
              teamInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.ConstructorStandings
            ).map((key) => (
              <ConstructorCard
                key={key}
                details={
                  teamInfo?.MRData?.StandingsTable?.StandingsLists[0]
                    ?.ConstructorStandings[key]
                }
              />
            ))}
            {/* <ConstructorCard
            team='redbull'
            car='https://www.formula1.com/content/dam/fom-website/teams/2021/red-bull-racing.png.transform/6col-retina/image.png'
            position='1'
            points='156'
            driverOne='Max Verstappen'
            driverTwo='Sergio Perez'
            logo={RedBull}
            teamName='RedBull Racing'
          />

          <ConstructorCard
            team='mercedes'
            car='https://www.formula1.com/content/dam/fom-website/teams/2021/mercedes.png.transform/4col-retina/image.png'
            position='2'
            points='124'
            driverOne='Lewis Hamilton'
            driverTwo='Valterri Bottas'
            logo={Mercedes}
            teamName='Mercedes'
          />

          <ConstructorCard
            team='mclaren'
            car='https://www.formula1.com/content/dam/fom-website/teams/2021/mclaren.png.transform/4col-retina/image.png'
            position='3'
            points='100'
            driverOne='Lando Norris'
            driverTwo='Daniel Ricciardo'
            logo={Mclaren}
            teamName='Mclaren'
          />

          <ConstructorCard
            team='ferarri'
            car='https://www.formula1.com/content/dam/fom-website/teams/2021/ferrari.png.transform/4col-retina/image.png'
            position='4'
            points='80'
            driverOne='Carlos Sainz'
            driverTwo='Charles Leclerc'
            logo={Ferrari}
            teamName='Ferarri'
          />

          <ConstructorCard
            team='aston_martin'
            car='https://www.formula1.com/content/dam/fom-website/teams/2021/aston-martin.png.transform/4col-retina/image.png'
            position='5'
            points='70'
            driverOne='Sebastian Vettell'
            driverTwo='Lance Stroll'
            logo={Astonmartin}
            teamName='Aston Martin'
          />

          <ConstructorCard
            team='alphatauri'
            car='https://www.formula1.com/content/dam/fom-website/teams/2021/alphatauri.png.transform/4col-retina/image.png'
            position='6'
            points='40'
            driverOne='Pierre Gasly'
            driverTwo='Yuki Tsunoda'
            logo={AlphaTauri}
            teamName='Alpha Tauri'
          />

          <ConstructorCard
            team='alpine'
            car='https://www.formula1.com/content/dam/fom-website/teams/2021/alpine.png.transform/4col-retina/image.png'
            position='7'
            points='45'
            driverOne='Ferando Alonso'
            driverTwo='Esteban Ocon'
            logo={Alpine}
            teamName='Alpine'
          />

          <ConstructorCard
            team='alfa'
            car='https://www.formula1.com/content/dam/fom-website/teams/2021/alfa-romeo-racing.png.transform/4col-retina/image.png'
            position='8'
            points='30'
            driverOne='Kimi Raikkoen'
            driverTwo='Atonio Giovinazzi'
            logo={Alfa}
            teamName='Alfa Romeo'
          />

          <ConstructorCard
            team='williams'
            car='https://www.formula1.com/content/dam/fom-website/teams/2021/williams.png.transform/4col-retina/image.png'
            position='9'
            points='0'
            driverOne='George Russell'
            driverTwo='Nicholas Latifi'
            logo={Williams}
            teamName='Williams Racing'
          />

          <ConstructorCard
            team='haas'
            car='https://www.formula1.com/content/dam/fom-website/teams/2021/haas-f1-team.png.transform/4col-retina/image.png'
            position='10'
            points='0'
            driverOne='Mick Schumacher'
            driverTwo='Nikita Mazepin'
            logo={Haas}
            teamName='Haas F1 Team'
          /> */}
          </CardContainer>
        ) : (
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 2 }}>
            <h4 style={{ color: 'white' }}>Loading . . . </h4>
          </motion.div>
        )}
      </ConstructorContainer>
    </ConstructorStyles>
  );
};

export default ConstructorsPage;

const ConstructorStyles = styled.div`
  background-color: #0c0c12;
  height: 91vh;
`;

const ConstructorContainer = styled.div`
  height: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;

  /* @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  } */
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  @media screen and (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 3%;
  }

  @media screen and (min-width: 1600px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 3%;
  }

  @media screen and (min-width: 2000px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  :last-child {
    padding-bottom: 15vh;
  }
`;

const ConstructorHeader = styled.div``;

const ConstructorHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 10%;
  margin-bottom: 1%;
`;

const HeaderTitle = styled.div`
  color: white;
`;

const HeaderLink = styled(Link)`
  display: flex;
  color: grey !important;
  font-weight: 500;
  height: 4rem;
  background-color: transparent;
  width: 50%;
  align-items: center;
  justify-content: center;
  border-radius: 0 2rem 2rem 0;
  text-decoration: none;

  &&& {
    color: grey;
  }

  > p {
    color: grey;
  }
`;

const HeaderLink1 = styled(Link)`
  width: 100%;
  display: flex;
  color: white;
  font-weight: 500;
  height: 4rem;
  background-color: transparent;
  width: 50%;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  border-radius: 2rem 0rem 0rem 2rem;
  box-shadow: 2px 6px 0.56rem rgba(115, 10, 9, 0.6);
`;
