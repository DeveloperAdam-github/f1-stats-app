import React from 'react';
import styled from 'styled-components';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const StaterRaceCard = ({ details }) => {
  return (
    <StarterCard>
      <CardTitle>F1 2021 Schedule</CardTitle>
      <p>2021 FIA FORMULA ONE WORLD CHAMPIONSHIP™ RACE CALENDAR</p>
      <NextRace>
        <Square>
          <Icon />
        </Square>
        <h4>{details.raceName}</h4>
        <Flag
          src='https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/azerbaijan-flag.png.transform/2col-retina/image.png'
          alt=''
        />
      </NextRace>
    </StarterCard>
  );
};

export default StaterRaceCard;

const StarterCard = styled.div`
  margin-top: 2.5rem;
  height: 10rem;
  width: 23rem;
  background-color: transparent;
  border-top: 5px solid whitesmoke;
  border-right: 5px solid whitesmoke;
  border-top-right-radius: 30px;

  > p {
    color: whitesmoke;
  }

  @media screen and (min-width: 600px) {
    width: 93%;
    height: 20rem;
  }
`;

const CardTitle = styled.h1`
  color: whitesmoke;
  font-weight: 900;

  @media screen and (min-width: 1700px) {
    font-size: 58px;
  }
`;

const NextRace = styled.div`
  width: 97%;
  height: 2.5rem;
  margin-top: 1rem;
  background-color: whitesmoke;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 1700px) {
    height: 3.5rem;
    > h4 {
      font-size: 28px;
    }
  }
`;

const Square = styled.div`
  background-color: rgba(115, 10, 9);
  width: 4rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 2px solid black;

  :hover {
    background-color: whitesmoke;
  }
`;

const Icon = styled(ArrowDownwardIcon)`
  color: whitesmoke;

  :hover {
    color: black;
  }
`;

const Flag = styled.img`
  width: 3rem;
  border-radius: 5px;
  margin-right: 5px;

  @media screen and (min-width: 1700px) {
    width: 5rem;
  }
`;
