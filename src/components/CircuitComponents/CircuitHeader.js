import React from 'react';
import styled from 'styled-components';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link } from 'react-router-dom';

const CircuitHeader = ({ details, match }) => {
  return (
    <CircuitPageHeader>
      <HeaderTitle>
        <Link to='/racecalendar'>
          <Icon />
        </Link>
        <h1>
          {' '}
          <Flag src='https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/azerbaijan-flag.png.transform/1col-retina/image.png' />
          Azerbaijan
        </h1>
      </HeaderTitle>
      {/* <HeroImage src='https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Azerbaijan.jpg.transform/fullbleed-retina/image.jpg' /> */}
    </CircuitPageHeader>
  );
};

export default CircuitHeader;

const CircuitPageHeader = styled.div`
  width: 100%;
  height: 13rem;
  background-image: url('https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Azerbaijan.jpg.transform/fullbleed-retina/image.jpg');

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
