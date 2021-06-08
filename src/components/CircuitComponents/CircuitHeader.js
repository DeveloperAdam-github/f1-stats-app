import React from 'react';
import styled from 'styled-components';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link } from 'react-router-dom';

const CircuitHeader = ({ details, match }) => {
  console.log('Details', details);
  return (
    <CircuitPageHeader details={details}>
      <HeaderTitle>
        <Link to='/racecalendar'>
          <Icon />
        </Link>
        <h4>{details.raceName}</h4>
        <Flag
          src={`https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/${mapFlag(
            details.Circuit.Location.country.toLowerCase()
          )}-flag.png.transform/1col-retina/image.png`}
        />
      </HeaderTitle>
    </CircuitPageHeader>
  );
};

export default CircuitHeader;

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
      return 'Great%20Britain';
    case 'UAE':
      return 'Abu%20Dhabi';
    case 'Saudi Arabia':
      return 'Saudi%20Arabia';
    default:
      return country;
  }
};

const CircuitPageHeader = styled.div`
  width: 100%;
  min-height: 20vh;
  max-height: 21vh;
  background-position: center center;
  background-size: cover;
  background-image: url(${(props) =>
    props.details.Circuit.Location.country
      ? `https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/${mapCountry(
          props.details.Circuit.Location.country
        )}.jpg.transform/fullbleed-retina/image.jpg`
      : ''});

  @media screen and (min-width: 1500px) {
    min-height: 20vh;
    max-height: 21vh;
  }
`;

const HeaderTitle = styled.div`
  height: 3rem;
  display: flex;
  background-color: #0c0c12;
  opacity: 0.9;
  align-items: center;
  text-align: center;
  padding: 0.5rem;
  color: whitesmoke;
  justify-content: space-between;
  @media screen and (min-width: 1500px) {
    height: 5.5rem;
    font-size: 3rem;
  }
`;

const Icon = styled(ArrowBackIosIcon)`
  color: whitesmoke;
  font-weight: 900;
  height: 3rem;
  padding-left: 0.5rem;
  &&& {
    font-size: 2rem;
  }

  @media screen and (min-width: 1500px) {
    &&& {
      font-size: 3.5rem;
    }
  }
`;

const Flag = styled.img`
  height: 1.5rem;
  width: 2rem;
  border-radius: 5px;
  margin-right: 15px;

  @media screen and (min-width: 1500px) {
    height: 2.5rem;
    width: 3.5rem;
  }
`;
