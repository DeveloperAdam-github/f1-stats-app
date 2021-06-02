import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import RaceCard from '../components/RaceCard';
import axios from 'axios';
import { renderableCircuits } from '../circuits';
import StarterRaceCard from '../components/StaterRaceCard';

const RaceCalendar = () => {
  const [trackInfo, setTrackInfo] = useState(null);

  useEffect(() => {
    async function getTrackData() {
      try {
        const response = await axios.get(
          'http://ergast.com/api/f1/current.json'
        );
        setTrackInfo(response.data);
        console.log(response.data);
        // Object.entries(trackInfo?.MRData?.RaceTable?.Races).forEach(
        //   ([key, value]) => {
        //     console.log(key, value.date);
        //   }
        // );
      } catch (err) {
        console.error(err.message);
      }
    }

    getTrackData();
  }, []);

  const dates = renderableCircuits.map((circuit) => circuit.date);

  const todaysDate = Date.now();
  // const dates = [
  //   trackInfo?.MRData?.RaceTable?.Races[0]?.date,
  //   trackInfo?.MRData?.RaceTable?.Races[1]?.date,
  //   trackInfo?.MRData?.RaceTable?.Races[2]?.date,
  //   trackInfo?.MRData?.RaceTable?.Races[3]?.date,
  //   trackInfo?.MRData?.RaceTable?.Races[4]?.date,
  //   trackInfo?.MRData?.RaceTable?.Races[5]?.date,
  //   trackInfo?.MRData?.RaceTable?.Races[6]?.date,
  //   trackInfo?.MRData?.RaceTable?.Races[7]?.date,
  //   trackInfo?.MRData?.RaceTable?.Races[8]?.date,
  // ];

  const [closest] = dates.sort((a, b) => {
    const [aDate, bDate] = [a, b].map((d) =>
      Math.abs(new Date(d) - todaysDate)
    );
    // console.log(aDate, bDate, 'the dates');
    return aDate - bDate;
  });

  console.log(closest, 'closest tracks');

  const getNextTrack = () => {
    switch (closest) {
      case '2021-03-28':
        return 'Bahrain Grand Prix';
      case '2021-06-06':
        return 'Azerbaijan Grand Prix';
      case '2021-06-20':
        return 'French Grand Prix';
      case '2021-06-20':
        return 'French Grand Prix';
      case '2021-07-04':
        return 'RedBull Ring';
      case ' 2021-09-12':
        return 'yes bro';
      default:
        break;
    }
  };

  const getFlag = () => {
    switch (closest) {
      case '2021-03-28':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/bahrain-flag.png.transform/2col-retina/image.png';
      case '2021-06-06':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/azerbaijan-flag.png.transform/2col-retina/image.png';
      default:
        break;
    }
  };
  return (
    <RaceCalendarContainer>
      {trackInfo ? (
        <>
          <StarterCard>
            <CardTitle>F1 2021 Schedule</CardTitle>
            <p>2021 FIA FORMULA ONE WORLD CHAMPIONSHIP™ RACE CALENDAR</p>
            <NextRace>
              <Square>
                <Icon />
              </Square>
              <h4>{getNextTrack()}</h4>
              <Flag src={getFlag()} alt='' />
            </NextRace>
          </StarterCard>
          <CardContainer>
            {Object.keys(
              renderableCircuits,
              trackInfo.MRData.RaceTable.Races
            ).map((key) => (
              <RaceCard
                key={key}
                render={renderableCircuits[key]}
                details={trackInfo.MRData.RaceTable.Races[key]}
              />
            ))}
            {/* {Object.keys(trackInfo.MRData.RaceTable.Races).map((key) => (
            <RaceCard
              key={key}
              details={trackInfo.MRData.RaceTable.Races[key]}
            />
          ))} */}
            {/* <RaceCard
          date='28th March'
          flag='https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/bahrain-flag.png.transform/2col-retina/image.png'
          raceName='Bahrain'
          desc='Formula 1 Gulf Air Bahrain Grand Prix 2021'
          track='https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Bahrain%20carbon.png.transform/8col-retina/image.png'
        />
        <RaceCard
          date='18th April'
          flag='https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/italy-flag.png.transform/2col-retina/image.png'
          raceName='Italy'
          desc='Formula 1 Pirelli Gran Premino Del Made In Italy E Dellemilia Romagna 2021'
          track='https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Emilia%20Romagna%20carbon.png.transform/8col-retina/image.png'
        />
        <RaceCard
          date='2nd May'
          flag='https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/portugal-flag.png.transform/2col-retina/image.png'
          raceName='Portugal'
          desc='Formula 1 Heineken Grande Premino De Portugal 2021'
          track='https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Portugal%20carbon.png.transform/8col-retina/image.png'
        />
        <RaceCard
          date='9th May'
          flag='https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/spain-flag.png.transform/2col-retina/image.png'
          raceName='Spain'
          desc='Foruma 1 Aramco Gran Premino De Espana 2021'
          track='https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Spain%20carbon.png.transform/8col-retina/image.png'
        />
        <RaceCard
          date='23rd May'
          flag='https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/monaco-flag.png.transform/2col-retina/image.png'
          raceName='Monaco'
          desc='Formula 1 Grand Prix De Monaco 2021'
          track='https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Monte%20Carlo%20carbon.png.transform/8col-retina/image.png'
        /> */}
          </CardContainer>
        </>
      ) : (
        <h1>loading</h1>
      )}
    </RaceCalendarContainer>
  );
};

export default RaceCalendar;

const RaceCalendarContainer = styled.div`
  display: flex;
  background-color: #0c0c12;
  flex-direction: column;
  align-items: center;
  height: 91vh;
  width: 100vw;
  padding-bottom: 200px;
  overflow: scroll;
`;

const CardContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr;

  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 5%;
    padding-bottom: 10%;
  }

  @media screen and (min-width: 1450px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 8%;
  }

  @media screen and (min-width: 2000px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

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
