import React from 'react';
import styled from 'styled-components';

const CircuitMiddle = ({ circuitId, country, render }) => {
  return (
    <CircuitMiddleContainer>
      <Flag
        src={`https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/${mapFlag(
          country.toLowerCase()
        )}-flag.png.transform/1col-retina/image.png`}
      />
      <GridContainer>
        <TrackImg
          src={`https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/${mapCountry(
            circuitId
          )}_Circuit.png.transform/7col-retina/image.png`}
        />
        <GridDetails>
          {render ? (
            <>
              <GridDetailsConatiner>
                <GridDetailsTitle>First Grand Prix</GridDetailsTitle>
                <GridDetailsStats>{render.firstGrandPrix}</GridDetailsStats>
              </GridDetailsConatiner>
              <GridDetailsConatiner>
                <GridDetailsTitle>Number of Laps</GridDetailsTitle>
                <GridDetailsStats>{render.numberOfLaps}</GridDetailsStats>
              </GridDetailsConatiner>
              <GridDetailsConatiner>
                <GridDetailsTitle>Circuit Length</GridDetailsTitle>
                <GridDetailsStats>{render.circuitLength}</GridDetailsStats>
              </GridDetailsConatiner>
              <GridDetailsConatiner>
                <GridDetailsTitle>Race Distance</GridDetailsTitle>
                <GridDetailsStats>{render.raceDistance}</GridDetailsStats>
              </GridDetailsConatiner>
              <GridDetailsConatiner>
                <GridDetailsTitle>Fastest Lap Record</GridDetailsTitle>
                <GridDetailsStats>{fastestLapTime(circuitId)}</GridDetailsStats>
                <h5 style={{ color: 'whitesmoke', fontWeight: '500' }}>
                  {fastestLapTimeDriver(circuitId)}
                </h5>
              </GridDetailsConatiner>
            </>
          ) : (
            <h1></h1>
          )}
        </GridDetails>
      </GridContainer>
    </CircuitMiddleContainer>
  );
};

export default CircuitMiddle;

// const firstGrandPrix = (circuitId) => {
//   switch (circuitId) {
//     case 'bahrain':
//       return '2004';
//     case 'imola':
//       return '1980';
//     case 'portimao':
//       return '2020';
//     case 'catalunya':
//       return '1991';
//     case 'monaco':
//       return '1950';
//     case 'BAK':
//       return '2016';
//     case 'ricard':
//       return '1971';
//     case 'red_bull_ring':
//       return '1970';
//     case 'silverstone':
//       return '1950';
//     case 'hungaroring':
//       return '1986';
//     case 'spa':
//       return '1950';
//     case 'zandvoort':
//       return '1952';
//     case 'monza':
//       return '1950';
//     case 'sochi':
//       return '2014';
//     case 'marina_bay':
//       return '2008';
//     case 'suzuka':
//       return '1987';
//     case 'americas':
//       return '2012';
//     case 'rodriguez':
//       return '1963';
//     case 'interlagos':
//       return '1973';
//     case 'albert_park':
//       return '1996';
//     case 'jeddah':
//       return '2021';
//     case 'yas_marina':
//       return '2009';
//   }
// };

// const numberOfLaps = (circuitId) => {
//   switch (circuitId) {
//     case 'bahrain':
//       return '57';
//     case 'imola':
//       return '63';
//     case 'portimao':
//       return '66';
//     case 'catalunya':
//       return '66';
//     case 'monaco':
//       return '78';
//     case 'BAK':
//       return '51';
//     case 'ricard':
//       return '53';
//     case 'red_bull_ring':
//       return '71';
//     case 'silverstone':
//       return '52';
//     case 'hungaroring':
//       return '70';
//     case 'spa':
//       return '44';
//     case 'zandvoort':
//       return '72';
//     case 'monza':
//       return '53';
//     case 'sochi':
//       return '53';
//     case 'marina_bay':
//       return '61';
//     case 'suzuka':
//       return '53';
//     case 'americas':
//       return '56';
//     case 'rodriguez':
//       return '71';
//     case 'interlagos':
//       return '71';
//     case 'albert_park':
//       return '58';
//     case 'jeddah':
//       return '50';
//     case 'yas_marina':
//       return '55';
//   }
// };

// const circuitLength = (circuitId) => {
//   switch (circuitId) {
//     case 'bahrain':
//       return '5.412km';
//     case 'imola':
//       return '4.909km';
//     case 'portimao':
//       return '4.653km';
//     case 'catalunya':
//       return '4.675km';
//     case 'monaco':
//       return '3.337 km';
//     case 'BAK':
//       return '6.003 km';
//     case 'ricard':
//       return '5.842km';
//     case 'red_bull_ring':
//       return '4.318km';
//     case 'silverstone':
//       return '5.891km';
//     case 'hungaroring':
//       return '4.381km';
//     case 'spa':
//       return '7.004km';
//     case 'zandvoort':
//       return '4.259km';
//     case 'monza':
//       return '5.793km';
//     case 'sochi':
//       return '5.848km';
//     case 'marina_bay':
//       return '5.063km';
//     case 'suzuka':
//       return '5.807km';
//     case 'americas':
//       return '5.513km';
//     case 'rodriguez':
//       return '4.304km';
//     case 'interlagos':
//       return '4.309km';
//     case 'albert_park':
//       return '5.303km';
//     case 'jeddah':
//       return '6.175km';
//     case 'yas_marina':
//       return '5.554km';
//   }
// };

// const raceDistance = (circuitId) => {
//   switch (circuitId) {
//     case 'bahrain':
//       return '308.238km';
//     case 'imola':
//       return '309.049km';
//     case 'portimao':
//       return '306.826 km';
//     case 'catalunya':
//       return '308.424 km';
//     case 'monaco':
//       return '260.286 km';
//     case 'BAK':
//       return '306.049 km';
//     case 'ricard':
//       return '309.69 km';
//     case 'red_bull_ring':
//       return '306.452 km';
//     case 'silverstone':
//       return '306.198 km';
//     case 'hungaroring':
//       return '306.63 km';
//     case 'spa':
//       return '308.052 km';
//     case 'zandvoort':
//       return '306.648 km';
//     case 'monza':
//       return '306.72 km';
//     case 'sochi':
//       return '309.745 km';
//     case 'marina_bay':
//       return '308.706 km';
//     case 'suzuka':
//       return '307.471 km';
//     case 'americas':
//       return '308.405 km';
//     case 'rodriguez':
//       return '305.354 km';
//     case 'interlagos':
//       return '305.909 km';
//     case 'albert_park':
//       return '307.574 km';
//     case 'jeddah':
//       return '308.75 km';
//     case 'yas_marina':
//       return '305.355 km';
//   }
// };

const fastestLapTime = (circuitId) => {
  switch (circuitId) {
    case 'bahrain':
      return '1:31.447';
    case 'imola':
      return '1:15.484';
    case 'portimao':
      return '1:18.750';
    case 'catalunya':
      return '1:18.149';
    case 'monaco':
      return '1:12.909';
    case 'BAK':
      return '1:43.009 ';
    case 'ricard':
      return '1:32.740 ';
    case 'red_bull_ring':
      return '1:05.619';
    case 'silverstone':
      return '1:27.097 ';
    case 'hungaroring':
      return '1:16.627 ';
    case 'spa':
      return '1:46.286';
    case 'zandvoort':
      return 'null';
    case 'monza':
      return '1:21.046';
    case 'sochi':
      return '1:35.761 ';
    case 'marina_bay':
      return '1:41.905';
    case 'suzuka':
      return '1:30.983 ';
    case 'americas':
      return '1:36.169';
    case 'rodriguez':
      return '1:18.741';
    case 'interlagos':
      return '1:10.540';
    case 'albert_park':
      return '1:24.125';
    case 'jeddah':
      return 'null';
    case 'yas_marina':
      return '1:39.283';
  }
};

const fastestLapTimeDriver = (circuitId) => {
  switch (circuitId) {
    case 'bahrain':
      return 'Pedro de la Rosa(2005)';
    case 'imola':
      return 'Lewis Hamilton(2020)';
    case 'portimao':
      return 'Lewis Hamilton(2020)';
    case 'catalunya':
      return 'Max Verstappen(2021)';
    case 'monaco':
      return 'Lewis Hamilton (2021)';
    case 'BAK':
      return 'Charles Leclerc (2019)';
    case 'ricard':
      return 'Sebastian Vettel (2019)';
    case 'red_bull_ring':
      return 'Carlos Sainz (2020)';
    case 'silverstone':
      return 'Max Verstappen (2020)';
    case 'hungaroring':
      return 'Lewis Hamilton (2020)';
    case 'spa':
      return 'Valtteri Bottas (2018)';
    case 'zandvoort':
      return 'null (null)';
    case 'monza':
      return 'Rubens Barrichello (2004)';
    case 'sochi':
      return 'Lewis Hamilton (2019)';
    case 'marina_bay':
      return 'Kevin Magnussen (2018)';
    case 'suzuka':
      return 'Lewis Hamilton (2019)';
    case 'americas':
      return 'Charles Leclerc (2019)';
    case 'rodriguez':
      return 'Valtteri Bottas (2018)';
    case 'interlagos':
      return 'Valtteri Bottas (2018)';
    case 'albert_park':
      return 'Michael Schumacher (2004)';
    case 'jeddah':
      return 'null (null)';
    case 'yas_marina':
      return 'Lewis Hamilton (2019)';
  }
};

const mapFlag = (country) => {
  switch (country) {
    case 'uk':
      return 'great-britain';
    case 'uae':
      return 'abu-dhabi';
    case 'saudi arabia':
      return 'saudi-arabia';
    case 'usa':
      return 'united-states';
    default:
      return country;
  }
};

const mapCountry = (country) => {
  switch (country) {
    case 'bahrain':
      return 'Bahrain';
    case 'imola':
      return 'Emilia_Romagna';
    case 'portimao':
      return 'Portugal';
    case 'catalunya':
      return 'Spain';
    case 'monaco':
      return 'Monoco';
    case 'BAK':
      return 'Baku';
    case 'ricard':
      return 'France';
    case 'red_bull_ring':
      return 'Austria';
    case 'silverstone':
      return 'Great_Britain';
    case 'hungaroring':
      return 'Hungary';
    case 'spa':
      return 'Belgium';
    case 'zandvoort':
      return 'Netherlands';
    case 'monza':
      return 'Italy';
    case 'sochi':
      return 'Russia';
    case 'marina_bay':
      return 'Singapore';
    case 'suzuka':
      return 'Japan';
    case 'americas':
      return 'USA';
    case 'rodriguez':
      return 'Mexico';
    case 'interlagos':
      return 'Brazil';
    case 'albert_park':
      return 'Australia';
    case 'jeddah':
      return 'Saudi_Arabia';
    case 'yas_marina':
      return 'Abu_Dhabi';
    default:
      return country;
  }
};

const CircuitMiddleContainer = styled.div`
  position: relative;
  display: flex;
  background-color: transparent;
  height: 110vh;
  width: 95%;
  margin-top: 5%;
  border-right: 10px solid rgba(115, 10, 9, 0.9);
  border-top: 10px solid rgba(115, 10, 9, 0.9);
  border-top-right-radius: 15px;
  padding: 5%;
  padding-bottom: 12vh;
`;

// rgba(115, 10, 9, 0.6)

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  grid-gap: 2rem;

  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

const TrackImg = styled.img`
  height: auto;
  width: 100%;
  background-color: rgba(245, 245, 245, 0.9);
  padding: 10px;
  border-radius: 15px;

  @media screen and (max-width: 900px) {
    height: auto;
    width: 100%;
  }
`;

const GridDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;

  .div:nth-last-child(3) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  > h3 {
    color: whitesmoke;
  }
`;

const GridDetailsConatiner = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 2px solid whitesmoke;
  border-bottom: 2px solid whitesmoke;
  border-bottom-right-radius: 15px;
  padding-right: 10px;
  width: 210px;
  height: 80px;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

const GridDetailsTitle = styled.p`
  color: whitesmoke;
  font-weight: 700;
`;

const GridDetailsStats = styled.h1`
  color: whitesmoke;
`;

const Flag = styled.img`
  height: auto;
  width: 4rem;
  border-radius: 5px;
  margin-right: 15px;
  position: absolute;
  left: 0;
  top: -23px;

  @media screen and (min-width: 1100px) {
    height: auto;
    width: 8rem;
    top: -40px;
  }
`;
