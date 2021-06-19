import React from 'react';
import styled from 'styled-components';

const CircuitPodium = () => {
  return (
    <CircuitPodiumStyles>
      <CircuitPodiumContainer>
        <SecondPlace>lewis</SecondPlace>
        <FirstPlace>max</FirstPlace>
        <ThirdPlace>bottas</ThirdPlace>
      </CircuitPodiumContainer>
    </CircuitPodiumStyles>
  );
};

export default CircuitPodium;

const CircuitPodiumStyles = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CircuitPodiumContainer = styled.div`
  display: flex;
  align-items: flex-end;
  background-color: blue;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const FirstPlace = styled.div`
  height: 200px;
  width: 30%;
  background-color: red;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0 1% 0 1%;
`;

const SecondPlace = styled.div`
  height: 180px;
  width: 30%;
  background-color: red;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0 1% 0 1%;
`;

const ThirdPlace = styled.div`
  height: 160px;
  width: 30%;
  background-color: red;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0 1% 0 1%;
`;
