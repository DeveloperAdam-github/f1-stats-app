import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import RaceCard from '../components/RaceCard';
import axios from 'axios';
import { renderableCircuits } from '../circuits';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FooterNav from '../components/FooterNav';

const RaceCalendar = () => {
  const [trackInfo, setTrackInfo] = useState(null);

  const myRef = useRef({});

  const scrollToTrack = () => {
    getNextTrackScroll();
    console.log('clickeeedddddd');
  };

  const getNextTrackScroll = () => {
    switch (closest) {
      case '2021-03-28':
        return myRef.current[0].scrollIntoView({ behavior: 'smooth' });
      case '2021-04-18':
        return myRef.current[1].scrollIntoView({ behavior: 'smooth' });
      case '2021-05-02':
        return myRef.current[2].scrollIntoView({ behavior: 'smooth' });
      case '2021-05-09':
        return myRef.current[3].scrollIntoView({ behavior: 'smooth' });
      case '2021-05-23':
        return myRef.current[4].scrollIntoView({ behavior: 'smooth' });
      case '2021-06-06':
        return myRef.current[5].scrollIntoView({ behavior: 'smooth' });
      case '2021-06-20':
        return myRef.current[6].scrollIntoView({ behavior: 'smooth' });
      case '2021-06-27':
        return myRef.current[7].scrollIntoView({ behavior: 'smooth' });
      case '2021-07-04':
        return myRef.current[8].scrollIntoView({ behavior: 'smooth' });
      case '2021-07-18':
        return myRef.current[9].scrollIntoView({ behavior: 'smooth' });
      case '2021-08-01':
        return myRef.current[10].scrollIntoView({ behavior: 'smooth' });
      case '2021-08-29':
        return myRef.current[11].scrollIntoView({ behavior: 'smooth' });
      case '2021-08-29':
        return myRef.current[12].scrollIntoView({ behavior: 'smooth' });
      case '2021-09-12':
        return myRef.current[13].scrollIntoView({ behavior: 'smooth' });
      case '2021-09-26':
        return myRef.current[14].scrollIntoView({ behavior: 'smooth' });
      case '2021-10-01':
        return myRef.current[15].scrollIntoView({ behavior: 'smooth' });
      case '2021-10-10':
        return myRef.current[16].scrollIntoView({ behavior: 'smooth' });
      case '2021-10-24':
        return myRef.current[17].scrollIntoView({ behavior: 'smooth' });
      case '2021-10-31':
        return myRef.current[18].scrollIntoView({ behavior: 'smooth' });
      case '2021-11-05':
        return myRef.current[19].scrollIntoView({ behavior: 'smooth' });
      case '2021-11-21':
        return myRef.current[20].scrollIntoView({ behavior: 'smooth' });
      case '2021-12-05':
        return myRef.current[21].scrollIntoView({ behavior: 'smooth' });
      case '2021-12-12':
        return myRef.current[22].scrollIntoView({ behavior: 'smooth' });
      default:
        break;
    }
  };

  useEffect(() => {
    async function getTrackData() {
      try {
        const response = await axios.get(
          'https://ergast.com/api/f1/current.json'
        );
        setTrackInfo(response.data);
        // console.log(response.data);
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

  const [closest] = dates.sort((a, b) => {
    const [aDate, bDate] = [a, b].map((d) =>
      Math.abs(new Date(d) <= todaysDate)
    );
    return aDate - bDate;
  });

  console.log(closest, 'closest track/upcoming track');

  const getNextTrack = () => {
    switch (closest) {
      case '2021-03-28':
        return 'Bahrain Grand Prix';
      case '2021-04-18':
        return 'Emilia-Romagna Grand Prix';
      case '2021-05-02':
        return 'Portugal Grand Prix';
      case '2021-05-09':
        return 'Spain Grand Prix';
      case '2021-05-23':
        return 'Monaco Grand Prix';
      case '2021-06-06':
        return 'Azerbaijan Grand Prix';
      case '2021-06-20':
        return 'France Grand Prix';
      case '2021-06-27':
        return 'Styria Grand Prix';
      case '2021-07-04':
        return 'Austria Grand Prix';
      case '2021-07-18':
        return 'Great Britain Grand Prix';
      case '2021-08-01':
        return 'Hungary Grand Prix';
      case '2021-08-29':
        return 'Belgium Grand Prix';
      case '2021-08-29':
        return 'Netherlands Grand Prix';
      case '2021-09-12':
        return 'Italy Grand Prix';
      case '2021-09-26':
        return 'Russia Grand Prix';
      case '2021-10-01':
        return 'Singapore Grand Prix';
      case '2021-10-10':
        return 'Japan Grand Prix';
      case '2021-10-24':
        return 'United States Grand Prix';
      case '2021-10-31':
        return 'Mexico Grand Prix';
      case '2021-11-05':
        return 'Brazilian Grand Prix';
      case '2021-11-21':
        return 'Australian Grand Prix';
      case '2021-12-05':
        return 'Saudi Arabia Grand Prix';
      case '2021-12-12':
        return 'Abu Dhabi Grand Prix';
      default:
        break;
    }
  };

  // const getNextTrackScroll = () => {
  //   switch (closest) {
  //     case '2021-03-28':
  //       return [0];
  //     case '2021-04-18':
  //       return [1];
  //     case '2021-05-02':
  //       return [3];
  //     case '2021-05-09':
  //       return [4];
  //     case '2021-05-23':
  //       return [5];
  //     case '2021-06-06':
  //       return [6];
  //     case '2021-06-20':
  //       return [7];
  //     default:
  //       break;
  //   }
  // };

  const getFlag = () => {
    switch (closest) {
      case '2021-03-28':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/bahrain-flag.png.transform/2col-retina/image.png';
      case '2021-06-06':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/azerbaijan-flag.png.transform/2col-retina/image.png';
      case '2021-06-20':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/france-flag.png.transform/2col-retina/image.png';
      case '2021-06-27':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/austria-flag.png.transform/2col-retina/image.png';
      case ' 2021-07-04':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/austria-flag.png.transform/2col-retina/image.png';
      case ' 2021-07-18':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/great-britain-flag.png.transform/2col-retina/image.png';
      case ' 2021-08-01':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/hungary-flag.png.transform/2col-retina/image.png';
      case ' 2021-08-29':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/belgium-flag.png.transform/2col-retina/image.png';
      case ' 2021-08-29':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/netherlands-flag.png.transform/2col-retina/image.png';
      case ' 2021-09-12':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/italy-flag.png.transform/2col-retina/image.png';
      case ' 2021-09-26':
        return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAD1BMVEX///8AOabVKx4AMqTTKxXmvQ9FAAAA9UlEQVR4nO3QsQGAMAzAsBT4/2b2eOwqnaAZAAAAAAAAAAAAAAAAAAAAAK69bHPYnJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JS87HNw+aknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk/oBg6TI4mvpq6EAAAAASUVORK5CYII=';
      case ' 2021-10-01':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/singapore-flag.png.transform/2col-retina/image.png';
      case ' 2021-10-10':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/japan-flag.png.transform/2col-retina/image.png';
      case ' 2021-10-24':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/united-states-flag.png.transform/2col-retina/image.png';
      case ' 2021-10-31':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/mexico-flag.png.transform/2col-retina/image.png';
      case ' 2021-11-05':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/brazil-flag.png.transform/2col-retina/image.png';
      case ' 2021-11-21':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/australia-flag.png.transform/2col-retina/image.png';
      case ' 2021-12-05':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/saudi-arabia-flag.png.transform/2col-retina/image.png';
      case ' 2021-12-12':
        return 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/abu-dhabi-flag.png.transform/2col-retina/image.png';
      default:
        break;
    }
  };

  return (
    <>
      <RaceCalendarContainer>
        {trackInfo ? (
          <>
            <StarterCard>
              <CardTitle>F1 2021 Schedule</CardTitle>
              <p>2021 FIA FORMULA ONE WORLD CHAMPIONSHIP??? RACE CALENDAR</p>
              <NextRace>
                <Square onClick={scrollToTrack}>
                  <Icon />
                </Square>
                <h4>{getNextTrack()}</h4>
                <Flag src={getFlag()} alt='' />
              </NextRace>
            </StarterCard>
            <motion.div
              initial={{ x: -5000 }}
              animate={{ x: 0 }}
              transition={{
                type: 'spring',
                duration: '1',
                delay: '0.1s',
                delayChildren: '0.5',
              }}
            >
              <CardContainer>
                {Object.keys(
                  renderableCircuits,
                  trackInfo.MRData.RaceTable.Races
                ).map((key) => (
                  <RaceCard
                    key={key}
                    render={renderableCircuits[key]}
                    details={trackInfo.MRData.RaceTable.Races[key]}
                    ref={(element) => (myRef.current[key] = element)}
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
            </motion.div>
          </>
        ) : (
          <LoadingDiv>
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 2 }}>
              <h4 style={{ color: 'white' }}>Loading . . . </h4>
            </motion.div>
          </LoadingDiv>
        )}
      </RaceCalendarContainer>
      <FooterNav raceCalendar />
    </>
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

const LoadingDiv = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  bottom: 15%;
  position: absolute;
  -webkit-animation: linear infinite alternate;
  -webkit-animation-name: run;
  -webkit-animation-duration: 5s;
`;
