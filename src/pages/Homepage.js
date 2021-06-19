import React from 'react';
import styled from 'styled-components';
import { Timeline } from 'react-twitter-widgets';
import FooterNav from '../components/FooterNav';

const Homepage = () => {
  return (
    <>
      <HomepageContainer>
        {/* <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: 'F1',
        }}
        options={{
          height: '400',
          width: '400',
        }}
      /> */}
        <Tweets>
          <a
            class='twitter-timeline'
            href='https://twitter.com/F1?ref_src=twsrc%5Etfw'
            style={{
              color: 'whitesmoke',
              fontWeight: '900',
              fontSize: '26px',
            }}
          >
            Tweets by F1
          </a>{' '}
          <script
            async
            src='https://platform.twitter.com/widgets.js'
            charset='utf-8'
          ></script>
        </Tweets>
      </HomepageContainer>
      <FooterNav news />
    </>
  );
};

export default Homepage;

const HomepageContainer = styled.div`
  height: 91vh;
  width: 100vw;
  background-image: url('https://wallpapercave.com/wp/wp4978571.png');
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Tweets = styled.div`
  height: 90%;
  width: 60%;
  overflow: scroll;

  @media screen and (max-width: 900px) {
    width: 80%;
    height: 60%;
    margin-bottom: 10%;
  }
`;
