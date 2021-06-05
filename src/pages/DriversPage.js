import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import DriverCard from '../components/DriverCard';
import { motion } from 'framer-motion';
// import RedBull from '../images/redbull.svg';
// import Mercedes from '../images/mercedes.svg';
// import Mclaren from '../images/mclarenn.png';
// import AlphaTauri from '../images/alphatauri.png';
// import Ferrari from '../images/ferrari.svg';
// import Alpine from '../images/alpine.svg';
// import Astonmartin from '../images/astonmartin.svg';
// import Haas from '../images/haas.png';
// import Williams from '../images/williams.png';
// import Alfa from '../images/alfa.svg';

const DriversPage = () => {
  const [driverInfo, setDriverInfo] = useState(null);

  useEffect(() => {
    async function getDriverData() {
      try {
        const response = await axios.get(
          'https://ergast.com/api/f1/current/driverStandings.json'
        );
        setDriverInfo(response.data);
        console.log(response.data);
      } catch (err) {
        console.error(err.message);
      }
    }

    getDriverData();
  }, []);

  return (
    <DriversPageStyles>
      <DriversPageContainer>
        <DriversPageHeader>
          <DriversPageHeaderContainer>
            <HeaderLink to='/standings'>
              <HeaderTitle>Drivers</HeaderTitle>
            </HeaderLink>
            <HeaderLink1 to='/constructors'>
              <HeaderTitle>Constructors</HeaderTitle>
            </HeaderLink1>
          </DriversPageHeaderContainer>
        </DriversPageHeader>
        {driverInfo ? (
          <CardContainer>
            {Object.keys(
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings
            ).map((key) => (
              <DriverCard
                key={key}
                details={
                  driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                    ?.DriverStandings[key]
                }
              />
            ))}
            {/* <DriverCard firstName lastName driverPoints /> */}

            {/* <DriverCard
            firstName={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[0]?.Driver?.givenName
            }
            lastName={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[0]?.Driver?.familyName
            }
            driverImage='https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col-retina/image.png'
            team={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[0]?.Constructors[0]?.constructorId
            }
            teamLogo={RedBull}
            driverPoints={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[0]?.points
            }
          />
          <DriverCard
            firstName={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[1]?.Driver?.givenName
            }
            lastName={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[1]?.Driver?.familyName
            }
            driverImage='https://www.formula1.com/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/2col-retina/image.png'
            team={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[1]?.Constructors[0]?.constructorId
            }
            teamLogo={Mercedes}
            driverPoints={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[1]?.points
            }
          />
          <DriverCard
            firstName={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[2]?.Driver?.givenName
            }
            lastName={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[2]?.Driver?.familyName
            }
            driverImage='https://www.formula1.com/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png.transform/2col-retina/image.png'
            team={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[2]?.Constructors[0]?.constructorId
            }
            driverPoints={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[2]?.points
            }
            teamLogo={Mclaren}
          />
          <DriverCard
            firstName={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[3]?.Driver?.givenName
            }
            lastName={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[3]?.Driver?.familyName
            }
            driverImage='https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col-retina/image.png'
            team={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[3]?.Constructors[0]?.constructorId
            }
            driverPoints={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[3]?.points
            }
            teamLogo={Ferrari}
          />
          <DriverCard
            firstName={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[4]?.Driver?.givenName
            }
            lastName={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[4]?.Driver?.familyName
            }
            driverImage='https://www.formula1.com/content/dam/fom-website/drivers/V/VALBOT01_Valtteri_Bottas/valbot01.png.transform/2col-retina/image.png'
            team={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[4]?.Constructors[0]?.constructorId
            }
            driverPoints={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[4]?.points
            }
            teamLogo={Mercedes}
          />

          <DriverCard
            firstName={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[5]?.Driver?.givenName
            }
            lastName={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[5]?.Driver?.familyName
            }
            driverImage='https://www.formula1.com/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/2col-retina/image.png'
            team={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[5]?.Constructors[0]?.constructorId
            }
            driverPoints={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[5]?.points
            }
            teamLogo={RedBull}
          />

          <DriverCard
            firstName={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[6]?.Driver?.givenName
            }
            lastName={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[6]?.Driver?.familyName
            }
            driverImage='https://www.formula1.com/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png.transform/2col-retina/image.png'
            team={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[6]?.Constructors[0]?.constructorId
            }
            driverPoints={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[6]?.points
            }
            teamLogo={Ferrari}
          />

          <DriverCard
            firstName={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[7]?.Driver?.givenName
            }
            lastName={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[7]?.Driver?.familyName
            }
            driverImage='https://www.formula1.com/content/dam/fom-website/drivers/P/PIEGAS01_Pierre_Gasly/piegas01.png.transform/2col-retina/image.png'
            team={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[7]?.Constructors[0]?.constructorId
            }
            driverPoints={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[7]?.points
            }
            teamLogo={AlphaTauri}
          />

          <DriverCard
            firstName={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[8]?.Driver?.givenName
            }
            lastName={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[8]?.Driver?.familyName
            }
            driverImage='https://www.formula1.com/content/dam/fom-website/drivers/D/DANRIC01_Daniel_Ricciardo/danric01.png.transform/2col-retina/image.png'
            team={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[8]?.Constructors[0]?.constructorId
            }
            driverPoints={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[8]?.points
            }
            teamLogo={Mclaren}
          />

          <DriverCard
            firstName={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[9]?.Driver?.givenName
            }
            lastName={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[9]?.Driver?.familyName
            }
            driverImage='https://www.formula1.com/content/dam/fom-website/drivers/E/ESTOCO01_Esteban_Ocon/estoco01.png.transform/2col-retina/image.png'
            team={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[9]?.Constructors[0]?.constructorId
            }
            driverPoints={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[9]?.points
            }
            teamLogo={Alpine}
          />

          <DriverCard
            firstName={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[10]?.Driver?.givenName
            }
            lastName={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[10]?.Driver?.familyName
            }
            driverImage='https://www.formula1.com/content/dam/fom-website/drivers/M/MICSCH02_Mick_Schumacher/micsch02.png.transform/2col-retina/image.png'
            team={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[10]?.Constructors[0]?.constructorId
            }
            driverPoints={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[10]?.points
            }
            teamLogo={Haas}
          />

          <DriverCard
            firstName={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[11]?.Driver?.givenName
            }
            lastName={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[11]?.Driver?.familyName
            }
            driverImage='https://www.formula1.com/content/dam/fom-website/drivers/S/SEBVET01_Sebastian_Vettel/sebvet01.png.transform/2col-retina/image.png'
            team={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[11]?.Constructors[0]?.constructorId
            }
            driverPoints={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[11]?.points
            }
            teamLogo={Astonmartin}
          />

          <DriverCard
            firstName={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[12]?.Driver?.givenName
            }
            lastName={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[12]?.Driver?.familyName
            }
            driverImage='https://www.formula1.com/content/dam/fom-website/drivers/K/KIMRAI01_Kimi_R%C3%A4ikk%C3%B6nen/kimrai01.png.transform/2col-retina/image.png'
            team={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[12]?.Constructors[0]?.constructorId
            }
            driverPoints={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[12]?.points
            }
            teamLogo={Alfa}
          />

          <DriverCard
            firstName={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[13]?.Driver?.givenName
            }
            lastName={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[13]?.Driver?.familyName
            }
            driverImage='https://www.formula1.com/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/2col-retina/image.png'
            team={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[13]?.Constructors[0]?.constructorId
            }
            driverPoints={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[13]?.points
            }
            teamLogo={Williams}
          />

          <DriverCard
            firstName={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[14]?.Driver?.givenName
            }
            lastName={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[14]?.Driver?.familyName
            }
            driverImage='https://www.formula1.com/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/2col-retina/image.png'
            team={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[14]?.Constructors[0]?.constructorId
            }
            driverPoints={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[14]?.points
            }
            teamLogo={Williams}
          />

          <DriverCard
            firstName={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[15]?.Driver?.givenName
            }
            lastName={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[15]?.Driver?.familyName
            }
            driverImage='https://www.formula1.com/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/2col-retina/image.png'
            team={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[15]?.Constructors[0]?.constructorId
            }
            driverPoints={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[15]?.points
            }
            teamLogo={Williams}
          />

          <DriverCard
            firstName={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[16]?.Driver?.givenName
            }
            lastName={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[16]?.Driver?.familyName
            }
            driverImage='https://www.formula1.com/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/2col-retina/image.png'
            team={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[16]?.Constructors[0]?.constructorId
            }
            driverPoints={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[16]?.points
            }
            teamLogo={Williams}
          />

          <DriverCard
            firstName={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[17]?.Driver?.givenName
            }
            lastName={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[17]?.Driver?.familyName
            }
            driverImage='https://www.formula1.com/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/2col-retina/image.png'
            team={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[17]?.Constructors[0]?.constructorId
            }
            driverPoints={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[17]?.points
            }
            teamLogo={Williams}
          />

          <DriverCard
            firstName={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[18]?.Driver?.givenName
            }
            lastName={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[18]?.Driver?.familyName
            }
            driverImage='https://www.formula1.com/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/2col-retina/image.png'
            team={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[18]?.Constructors[0]?.constructorId
            }
            driverPoints={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[18]?.points
            }
            teamLogo={Williams}
          />

          <DriverCard
            firstName={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[19]?.Driver?.givenName
            }
            lastName={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[19]?.Driver?.familyName
            }
            driverImage='https://www.formula1.com/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/2col-retina/image.png'
            team={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[19]?.Constructors[0]?.constructorId
            }
            driverPoints={
              driverInfo?.MRData?.StandingsTable?.StandingsLists[0]
                ?.DriverStandings[19]?.points
            }
            teamLogo={Williams}
          /> */}
          </CardContainer>
        ) : (
          <LoadingDiv>
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 2 }}>
              <h4 style={{ color: 'white' }}>Loading . . . </h4>
            </motion.div>
          </LoadingDiv>
        )}
      </DriversPageContainer>
    </DriversPageStyles>
  );
};

export default DriversPage;

const LoadingImage = styled.img`
  height: 15%;
  width: 50%;
`;

const LoadingDiv = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  bottom: 15%;
  position: absolute;
  -webkit-animation: linear infinite alternate;
  -webkit-animation-name: run;
  -webkit-animation-duration: 5s;
`;

const DriversPageStyles = styled.div`
  background-color: #0c0c12;
  height: 91vh;
`;

const DriversPageContainer = styled.div`
  height: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 3%;
  }

  @media screen and (min-width: 1700px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 3%;
  }

  :last-child {
    padding-bottom: 15vh;
  }
`;

const DriversPageHeader = styled.header``;

const DriversPageHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 10%;
  margin-bottom: 1%;
`;

const HeaderLink = styled(Link)`
  display: flex;
  color: white;
  font-weight: 500;
  height: 4rem;
  background-color: transparent;
  width: 50%;
  align-items: center;
  justify-content: center;
  border-radius: 0 2rem 2rem 0;
  text-decoration: none;
  box-shadow: 2px 6px 0.56rem rgba(115, 10, 9, 0.6);
`;

const HeaderLink1 = styled(Link)`
  width: 100%;
  display: flex;
  color: grey;
  font-weight: 500;
  height: 4rem;
  background-color: transparent;
  width: 50%;
  align-items: center;
  justify-content: center;

  text-decoration: none;
`;

const HeaderTitle = styled.div``;

const DriversPageList = styled.li``;
