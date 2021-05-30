import React from 'react';
import styled from 'styled-components';
import RedBull from '../images/redbull.svg';
import Mercedes from '../images/mercedes.svg';
import Mclaren from '../images/mclarenn.png';
import AlphaTauri from '../images/alphatauri.png';
import Ferrari from '../images/ferrari.svg';
import Alpine from '../images/alpine.svg';
import Astonmartin from '../images/astonmartin.svg';
import Haas from '../images/haas.png';
import Williams from '../images/williams.png';
import Alfa from '../images/alfa.svg';

const DriverCard = ({ details }) => {
  const getTeamLogo = () => {
    switch (details.Constructors[0].constructorId) {
      case 'red_bull':
        return RedBull;
      case 'mercedes':
        return Mercedes;
      case 'williams':
        return Williams;
      case 'ferrari':
        return Ferrari;
      case 'mclaren':
        return Mclaren;
      case 'alphatauri':
        return AlphaTauri;
      case 'alpine':
        return Alpine;
      case 'aston_martin':
        return Astonmartin;
      case 'haas':
        return Haas;
      case 'alfa':
        return Alfa;
      default:
        return;
    }
  };

  const getDriversImage = () => {
    switch (details.Driver.givenName) {
      case 'Max':
        return 'https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col-retina/image.png';
      case 'Lewis':
        return 'https://www.formula1.com/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/2col-retina/image.png';
      case 'Lando':
        return 'https://www.formula1.com/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png.transform/2col-retina/image.png';
      case 'Sergio':
        return 'https://www.formula1.com/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/2col-retina/image.png';
      case 'Valtteri':
        return 'https://www.formula1.com/content/dam/fom-website/drivers/V/VALBOT01_Valtteri_Bottas/valbot01.png.transform/2col-retina/image.png';
      case 'Charles':
        return 'https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col-retina/image.png';
      case 'Carlos':
        return 'https://www.formula1.com/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png.transform/2col-retina/image.png';
      case 'Daniel':
        return 'https://www.formula1.com/content/dam/fom-website/drivers/D/DANRIC01_Daniel_Ricciardo/danric01.png.transform/2col-retina/image.png';
      case 'Pierre':
        return 'https://www.formula1.com/content/dam/fom-website/drivers/P/PIEGAS01_Pierre_Gasly/piegas01.png.transform/2col-retina/image.png';
      case 'Esteban':
        return 'https://www.formula1.com/content/dam/fom-website/drivers/E/ESTOCO01_Esteban_Ocon/estoco01.png.transform/2col-retina/image.png';
      case 'Sebastian':
        return 'https://www.formula1.com/content/dam/fom-website/drivers/S/SEBVET01_Sebastian_Vettel/sebvet01.png.transform/2col-retina/image.png';
      case 'Lance':
        return 'https://www.formula1.com/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png.transform/2col-retina/image.png';
      case 'Fernando':
        return 'https://www.formula1.com/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png.transform/2col-retina/image.png';
      case 'Yuki':
        return 'https://www.formula1.com/content/dam/fom-website/drivers/Y/YUKTSU01_Yuki_Tsunoda/yuktsu01.png.transform/2col-retina/image.png';
      case 'Antonio':
        return 'https://www.formula1.com/content/dam/fom-website/drivers/A/ANTGIO01_Antonio_Giovinazzi/antgio01.png.transform/2col-retina/image.png';
      case 'Kimi':
        return 'https://www.formula1.com/content/dam/fom-website/drivers/K/KIMRAI01_Kimi_R%C3%A4ikk%C3%B6nen/kimrai01.png.transform/2col-retina/image.png';
      case 'George':
        return 'https://www.formula1.com/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/2col-retina/image.png';
      case 'Nicholas':
        return 'https://www.formula1.com/content/dam/fom-website/drivers/N/NICLAF01_Nicholas_Latifi/niclaf01.png.transform/2col-retina/image.png';
      case 'Mick':
        return 'https://www.formula1.com/content/dam/fom-website/drivers/M/MICSCH02_Mick_Schumacher/micsch02.png.transform/2col-retina/image.png';
      case 'Nikita':
        return 'https://www.formula1.com/content/dam/fom-website/drivers/N/NIKMAZ01_Nikita_Mazepin/nikmaz01.png.transform/2col-retina/image.png';
      default:
        return;
    }
  };

  return (
    <DriversCardContainer team={details.Constructors[0].constructorId}>
      <CardTitleContainer>
        <TeamLogo src={getTeamLogo()} alt='' width='70px' />
        <CardTitle>
          <p>{details.Driver.givenName}</p>
          <h2>{details.Driver.familyName}</h2>
          <DriverPoints>
            {details.points}
            <small
              style={{
                fontSize: '1.5rem',
                letterSpacing: '-1.2px',
              }}
            >
              points
            </small>
          </DriverPoints>
        </CardTitle>
        <CardDriver src={getDriversImage()} />
      </CardTitleContainer>
    </DriversCardContainer>
  );
};

export default DriverCard;

// background-image: linear-gradient(
//   to bottom right,
//   #1c1286,
//   rgba(24, 17, 102, 0.1)
// );

// === 'mercedes'
//       ? 'linear-gradient(to bottom right, #116865, rgb(17, 104, 101, 0.1))'
//       : 'red'};

// props.team === 'redbull'
// ? 'linear-gradient(to bottom right, #1c1286, rgba(24, 17, 102, 0.1))'
// : 'linear-gradient(to bottom right, #1c1234, rgba(4, 244, 102, 01))' ===
//   'mercedes'
// ? 'linear-gradient(to bottom right, #116865, rgb(17, 104, 101, 0.1))'
// : 'linear-gradient(to bottom right, #116865, rgb(17, 104, 101, 1))' ===
//   'mclaren'
// ? 'linear-gradient(to bottom right, #fd9900, rgb(253, 153, 0, 0.1)))'
// : 'linear-gradient(to bottom right, #fd9900, rgb(253, 153, 0, 2))'};

const DriversCardContainer = styled.div`
  font-family: 'Oswald';
  /* min-height: 10em; */
  height: 10rem;
  width: 100%;
  background-image: ${({ team }) => {
    switch (team) {
      case 'red_bull':
        return `linear-gradient(to bottom right, #1c1286, rgba(24, 17, 102, 0.1))`;
      case 'mercedes':
        return `linear-gradient(to bottom right, #40BAB5, rgb(64, 186, 181, 0.4))`;
      case 'mclaren':
        return 'linear-gradient(to bottom right, #fd9900, rgb(253, 153, 0, 0.1))';
      case 'ferrari':
        return 'linear-gradient(to bottom right, #CC1700, rgba(204, 23, 0, 0.1))';
      case 'alphatauri':
        return `linear-gradient(to bottom right, #FFFFFF, rgba(10, 40, 64, 0.2))`;
      case 'alpine':
        return `linear-gradient(to bottom right, #0038BD, rgb(214, 34, 16, 0.8))`;
      case 'aston_martin':
        return `linear-gradient(to bottom right, #015850, rgba(1, 88, 80, 0.3))`;
      case 'haas':
        return `linear-gradient(to bottom right, #f9fefd, rgb(167, 35, 40, 0.7))`;
      case 'alfa':
        return `linear-gradient(to bottom right,#87181F, rgb(255, 255, 255, 0.9))`;
      case 'williams':
        return `linear-gradient(to bottom right,#13151B, rgb(7, 162, 205, 0.5))`;
      default:
        return;
    }
  }};

  border-radius: 1rem;
  color: white;
  margin-top: 2rem;

  @media screen and (min-width: 1100px) {
    height: 17rem;
  }

  :hover {
    border: 3px solid #0d0d14;
  }
`;

const CardTitleContainer = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr;
  grid-template-rows: 1fr;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

// background-position: center;
//   background-size: cover;
//   background-image: url('https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col-retina/image.png');
//   /* background-image: ${({ driver }) => {
//     switch (driver) {
//       case 'max':
//         return `url('https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col-retina/image.png')`;
//     }
//   }}; */

const CardDriver = styled.img`
  height: 100%;
  width: 100%;
`;

const DriverPoints = styled.p`
  font-weight: 900;
  font-size: 2.5rem;
  text-decoration: underline;
  letter-spacing: -5px;
`;

const CardTitle = styled.div`
  font-size: 1.2rem;
  letter-spacing: -0.5px;
  font-weight: 900;
`;

const TeamLogo = styled.img`
  padding: 13px;
  width: 100%;
`;
