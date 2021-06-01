import React from 'react';
import styled from 'styled-components';

const TeamPage = () => {
  return (
    <TeamPageStyles>
      <TeamPageContainer>
        <TeamPageHeader>
          {' '}
          <h2>Red Bull Racing</h2>{' '}
        </TeamPageHeader>
      </TeamPageContainer>
    </TeamPageStyles>
  );
};

export default TeamPage;

const TeamPageStyles = styled.div`
  height: 91vh;
  width: 100vw;
  background-color: #0d0d14;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TeamPageContainer = styled.div`
  height: 90%;
  width: 80%;
  padding: 2%;
  /* border-top: 5px solid linear-gradient(#1c1286, rgba(24, 17, 102, 0.1)); */
  border-top: 8px solid;
  border-right: 8px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(
    to bottom right,
    #1c1286,
    rgba(24, 17, 102, 0.1)
  );
  border-radius: 30px;
`;

const TeamPageHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: white;
`;
