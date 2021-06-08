import React from 'react';
import styled from 'styled-components';

const CircuitMiddle = ({ details }) => {
  console.log('Details', details);
  return (
    <CircuitMiddleContainer>
      <Flag
        src={`https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/${mapFlag(
          details.Circuit.Location.country.toLowerCase()
        )}-flag.png.transform/1col-retina/image.png`}
      />
      <GridContainer>
        <TrackImg
          src={`https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/${mapCountry(
            details.Circuit.Location.country
          )}_Circuit.png.transform/7col-retina/image.png`}
        />
        <GridDetails>
          <GridDetailsConatiner>
            <GridDetailsTitle>First Grand Prix</GridDetailsTitle>
            <GridDetailsStats>
              {firstGrandPrix(details.Circuit.circuitId)}
            </GridDetailsStats>
          </GridDetailsConatiner>
          <GridDetailsConatiner>
            <GridDetailsTitle>Number of Laps</GridDetailsTitle>
            <GridDetailsStats>
              {numberOfLaps(details.Circuit.circuitId)}
            </GridDetailsStats>
          </GridDetailsConatiner>
          <GridDetailsConatiner>
            <GridDetailsTitle>Circuit Length</GridDetailsTitle>
            <GridDetailsStats>
              {circuitLength(details.Circuit.circuitId)}
            </GridDetailsStats>
          </GridDetailsConatiner>
          <GridDetailsConatiner>
            <GridDetailsTitle>Race Distance</GridDetailsTitle>
            <GridDetailsStats>
              {raceDistance(details.Circuit.circuitId)}
            </GridDetailsStats>
          </GridDetailsConatiner>
          <GridDetailsConatiner>
            <GridDetailsTitle>Fastest Lap Record</GridDetailsTitle>
            <GridDetailsStats>1.36.169</GridDetailsStats>
            <h5 style={{ color: 'whitesmoke', fontWeight: '500' }}>
              Charles Leclerc
            </h5>
          </GridDetailsConatiner>
        </GridDetails>
      </GridContainer>
    </CircuitMiddleContainer>
  );
};

export default CircuitMiddle;

const firstGrandPrix = (circuitId) => {
  switch (circuitId) {
    case 'bahrain':
      return '2004';
    case 'imola':
      return '1980';
    case 'portimao':
      return '2020';
  }
};

const numberOfLaps = (circuitId) => {
  switch (circuitId) {
    case 'bahrain':
      return '57';
    case 'imola':
      return '63';
    case 'portimao':
      return '66';
  }
};

const circuitLength = (circuitId) => {
  switch (circuitId) {
    case 'bahrain':
      return '5.412km';
    case 'imola':
      return '4.909km';
    case 'portimao':
      return '4.653km';
  }
};

const raceDistance = (circuitId) => {
  switch (circuitId) {
    case 'bahrain':
      return '308.238 km';
    case 'imola':
      return '309.049km';
    case 'portimao':
      return '306.826km';
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
    case 'UK':
      return 'Great_Britain';
    case 'UAE':
      return 'Abu_Dhabi';
    case 'Saudi Arabia':
      return 'Saudi_Arabia';
    case 'Monaco':
      return 'Monoco';
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
