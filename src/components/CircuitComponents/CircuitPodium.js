import React from 'react';
import styled from 'styled-components';

const CircuitPodium = () => {
  return (
    <CircuitPodiumStyles>
      <CircuitPodiumContainer>
        <SecondPlace>
          <DriverImage src='https://www.formula1.com/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/2col-retina/image.png' />
        </SecondPlace>
        <FirstPlace>
          <DriverImage src='https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col-retina/image.png' />
          <TitleContainer>
            <Line></Line>
            <Position>1</Position>
            <Line />
          </TitleContainer>
        </FirstPlace>
        <ThirdPlace>
          <DriverImage src='https://www.formula1.com/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/2col-retina/image.png' />
        </ThirdPlace>
      </CircuitPodiumContainer>
    </CircuitPodiumStyles>
  );
};

export default CircuitPodium;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
`;

const Line = styled.div`
  height: 15px;
  width: 50%;
  background-color: #690c0b;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
`;

const Position = styled.h1`
  padding-left: 5%;
  padding-right: 5%;
`;

const CircuitPodiumStyles = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CircuitPodiumContainer = styled.div`
  display: flex;
  align-items: flex-end;
  background-color: transparent;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const FirstPlace = styled.div`
  height: 250px;
  width: 30%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0 1% 0 1%;
  background-image: linear-gradient(
    to bottom right,
    #1c1286,
    rgba(24, 17, 102, 0.6)
  );
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const SecondPlace = styled.div`
  height: 230px;
  width: 30%;
  background-image: linear-gradient(
    to bottom right,
    #40bab5,
    rgb(64, 186, 181, 0.4)
  );
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0 1% 0 1%;
  display: flex;
  justify-content: center;
`;

const ThirdPlace = styled.div`
  height: 210px;
  width: 30%;
  background-image: linear-gradient(
    to bottom right,
    #1c1286,
    rgba(24, 17, 102, 0.6)
  );
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0 1% 0 1%;
  display: flex;
  justify-content: center;
`;

const DriverImage = styled.img`
  width: 50%;
  height: 60%;
`;
