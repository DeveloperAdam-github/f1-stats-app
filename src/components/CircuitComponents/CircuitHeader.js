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
        <h1>
          <Flag src={`https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/${mapFlag(details.Circuit.Location.country.toLowerCase())}-flag.png.transform/1col-retina/image.png`} />
            {details.Circuit.Location.country}
        </h1>
      </HeaderTitle>
    </CircuitPageHeader>
  );
};

export default CircuitHeader;

const mapFlag = (country) => {
  switch (country) {
    case 'uk':
      return 'great-britain';
    default:
      return country;
  }
}


const mapCountry = (country) => {
  switch (country) {
    case 'UK':
      return 'Great%20Britain';
    default:
      return country;
  }
};

const CircuitPageHeader = styled.div`
  width: 100%;
  height: 13rem;
  background-image: url(${props => (props.details.Circuit.Location.country ? `https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/${mapCountry(props.details.Circuit.Location.country)}.jpg.transform/fullbleed-retina/image.jpg` : '')});
  background-position: center;
  background-size: cover;
`;

const HeaderTitle = styled.div`
  height: 3rem;
  display: flex;
  background-color: #0c0c12;
  opacity: 0.9;
  align-items: center;
  padding: 0.5rem;
  color: whitesmoke;
  justify-content: space-between;
`;

const Icon = styled(ArrowBackIosIcon)`
  color: whitesmoke;
  font-weight: 900;
  height: 3rem;
`;

const Flag = styled.img`
  height: 1.5rem;
  width: 2rem;
  border-radius: 5px;
  margin-right: 15px;
`;
