import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CircuitHeader from '../components/CircuitComponents/CircuitHeader';
import CircuitMiddle from '../components/CircuitComponents/CircuitMiddle';
import { useLocation } from 'react-router';
import { circuits } from '../circuits';
import CircuitPodium from '../components/CircuitComponents/CircuitPodium';
import FooterNav from '../components/FooterNav';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const CircuitPage = (render) => {
  console.log(circuits, 'circuits');
  let query = useQuery();
  const trackName = query.get('name');
  const [trackInfo, setTrackInfo] = useState();
  const [renderTrackInfo, setRenderTrackInfo] = useState();

  // console.log('trackname', trackName);
  // console.log('render', render);

  useEffect(() => {
    const getTrackData = async () => {
      try {
        const response = await axios.get(
          `https://ergast.com/api/f1/circuits/${trackName}.json`
        );
        setTrackInfo(response.data.MRData.CircuitTable.Circuits?.[0]);
        console.log(response, 'this is the response');
      } catch (error) {
        console.error(error.message);
      }
    };
    getTrackData();
  }, [trackName]);

  const { circuitName: raceName, circuitId } = trackInfo || {};
  // console.log(trackInfo, 'trackinfo');
  const { country } = trackInfo?.Location || {};

  return (
    <>
      {trackInfo ? (
        <>
          <CircuitPageContainer>
            <CircuitHeader raceName={raceName} country={country} />
            <CircuitMiddle
              circuitId={circuitId}
              country={country}
              render={render.location.renderDetails}
            />
            {/* <CircuitPodium /> */}
          </CircuitPageContainer>
          <FooterNav raceCalendar />
        </>
      ) : (
        <h1>loading</h1>
      )}
    </>
  );
};

export default CircuitPage;

const CircuitPageContainer = styled.div`
  height: 91vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0c0c12;
  overflow: scroll;
`;

// const CircuitPageHeader = styled.div`
//   width: 100%;
//   height: 13rem;
//   background-image: url('https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Azerbaijan.jpg.transform/fullbleed-retina/image.jpg');

//   background-position: center;
//   background-size: cover;
// `;

// const HeaderTitle = styled.div`
//   height: 3rem;
//   display: flex;
//   background-color: #0c0c12;
//   opacity: 0.9;
//   align-items: center;
//   padding: 0.5rem;
//   color: whitesmoke;
//   justify-content: space-between;
// `;

// const Icon = styled(ArrowBackIosIcon)`
//   color: whitesmoke;
//   font-weight: 900;
//   height: 3rem;
// `;

// const Flag = styled.img`
//   height: 1.5rem;
//   width: 2rem;
//   border-radius: 5px;
//   margin-right: 15px;
// `;

// const HeroImage = styled.img`
//   height: 100%;
//   width: 100%;
// `;
