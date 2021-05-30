import React from 'react';
import styled from 'styled-components';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const RaceCard = ({ date, flag, raceName, desc, track, details, render }) => {
  // const getFlag = () => {
  //   switch (details.Circuit.circuitId) {
  //     case 'BAK':
  //       return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/azerbaijan-flag.png.transform/2col-retina/image.png';
  //     case 'bahrain':
  //       return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/bahrain-flag.png.transform/2col-retina/image.png';
  //     default:
  //       break;
  //   }
  // };

  return (
    <CardContainer>
      <CardTitle>
        {details.date} <Flag src={render.flag} />
      </CardTitle>
      <hr />
      <CardMiddle>
        <h4>
          {details.raceName} <ChevronRightIcon style={{ color: '#730a0B' }} />{' '}
        </h4>
        <p>{details.Circuit.circuitName}</p>
      </CardMiddle>
      <hr />
      <ImageContainer>
        <TrackImg src={track} />
      </ImageContainer>
    </CardContainer>
  );
};

export default RaceCard;

const CardContainer = styled.div`
  margin-top: 2.5rem;
  padding: 1rem;
  height: 15rem;
  width: 22rem;
  background-color: transparent;
  border-top: 1px solid whitesmoke;
  border-right: 1px solid whitesmoke;
  border-top-right-radius: 30px;

  :hover {
    border-top: 4px solid #730a0b;
    border-right: 4px solid #730a0b;
  }

  > p {
    color: whitesmoke;
  }

  @media screen and (min-width: 900px) {
    height: 16rem;
    width: 25rem;
  }
`;

const CardTitle = styled.h2`
  color: whitesmoke;
  font-weight: 900;
  display: flex;
  justify-content: space-between;
  width: 97%;
  margin-bottom: 0.5rem;
`;

const Flag = styled.img`
  height: 80;
  width: 3rem;
  border-radius: 5px;
  margin-right: 5px;
`;

const CardMiddle = styled.div`
  color: white;
  margin-top: 1rem;
  margin-bottom: 1rem;

  > h4 {
    align-items: center;
    display: flex;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: whitesmoke;
`;

const TrackImg = styled.img`
  width: 40%;
`;
