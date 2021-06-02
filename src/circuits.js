const circuits = [
  {
    name: 'Formula 1 Gulf Air Bahrain Grand Prix 2021',
    country: 'bahrain',
    date: '2021-03-28',
  },
  {
    name: 'Formula 1 Pirelli Gran Premio Del Made In Italy E Dell emilia Romagna 2021',
    country: 'italy',
    date: '2021-04-18',
  },
  {
    name: 'Formula 1 Heineken Grande Prémio De Portugal 2021',
    country: 'portugal',
    date: '2021-05-02',
  },
  {
    name: 'Formula 1 Aramco Gran Premio De España 2021',
    country: 'spain',
    date: '2021-05-09',
  },
  { name: 'Monaco', country: 'monaco', date: '2021-05-23' },
  { name: 'Azerbaijan', country: 'azerbaijan', date: '2021-06-06' },
  { name: 'France', country: 'france', date: '2021-06-20' },
  {
    name: 'Formula 1 Grosser Preis Der Steiermark 2021',
    country: 'austria',
    date: '2021-06-27',
  },
  {
    name: 'Formula 1 Grosser Preis Von Österreich 2021',
    country: 'austria-2',
    date: '2021-07-04',
  },
  { name: 'Great Britain', country: 'great-britain', date: '2021-07-18' },
  { name: 'Hungary', country: 'hungary', date: '2021-08-01' },
  { name: 'Belgium', country: 'belgium', date: '2021-08-29' },
  { name: 'Netherlands', country: 'netherlands', date: '2021-09-05' },
  {
    name: 'Formula 1 Heineken Gran Premio D’italia 2021',
    country: 'italy-2',
    date: '2021-09-12',
  },
  { name: 'Russia', country: 'russia', date: '2021-09-26' },
  { name: 'Singapore', country: 'singapore', date: '2021-10-03' },
  { name: 'Japan', country: 'japan', date: '2021-10-10' },
  { name: 'United States', country: 'united states', date: '2021-10-24' },
  { name: 'Mexico', country: 'mexico', date: '2021-10-31' },
  { name: 'Brazil', country: 'brazil', date: '2021-11-07' },
  { name: 'Australia', country: 'australia', date: '2021-11-21' },
  { name: 'Saudi Arabia', country: 'saudi arabia', date: '2021-12-05' },
  { name: 'Abu Dhabi', country: 'uae', date: '2021-12-12' },
];

const capitalise = (str) => {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
};

export const renderableCircuits = circuits.map((circuit) => {
  const newCircuit = {
    name: capitalise(circuit.name),
    country: capitalise(circuit.country),
    date: circuit.date,
  };

  switch (circuit.country) {
    case 'bahrain':
      newCircuit.flag =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/bahrain-flag.png.transform/2col-retina/image.png';
      newCircuit.track =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Bahrain%20carbon.png.transform/3col-retina/image.png';
      break;
    case 'italy':
      newCircuit.flag =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/italy-flag.png.transform/2col-retina/image.png';
      newCircuit.track =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Emilia%20Romagna%20carbon.png.transform/3col-retina/image.png';
      break;
    case 'portugal':
      newCircuit.flag =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/portugal-flag.png.transform/2col-retina/image.png';
      newCircuit.track =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Portugal%20carbon.png.transform/3col-retina/image.png';
      break;
    case 'spain':
      newCircuit.flag =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/spain-flag.png.transform/2col-retina/image.png';
      newCircuit.track =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Spain%20carbon.png.transform/3col-retina/image.png';
      break;
    case 'monaco':
      newCircuit.flag =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/monaco-flag.png.transform/2col-retina/image.png';
      newCircuit.track =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Monte%20Carlo%20carbon.png.transform/3col-retina/image.png';
      break;
    case 'azerbaijan':
      newCircuit.flag =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/azerbaijan-flag.png.transform/2col-retina/image.png';
      newCircuit.track =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Azerbaijan%20carbon.png.transform/3col-retina/image.png';
      break;
    case 'france':
      newCircuit.flag =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/france-flag.png.transform/2col-retina/image.png';
      newCircuit.track =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/France%20carbon.png.transform/2col-retina/image.png';
      break;
    case 'austria':
      newCircuit.flag =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/austria-flag.png.transform/2col-retina/image.png';
      newCircuit.track =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Styria%20carbon.png.transform/2col-retina/image.png';
      break;
    case 'austria-2':
      newCircuit.flag =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/austria-flag.png.transform/2col-retina/image.png';
      newCircuit.track =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Styria%20carbon.png.transform/2col-retina/image.png';
      break;
    case 'great-britain':
      newCircuit.flag =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/great-britain-flag.png.transform/2col-retina/image.png';
      newCircuit.track =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Great%20Britain%20carbon.png.transform/2col-retina/image.png';
      break;
    case 'hungary':
      newCircuit.flag =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/hungary-flag.png.transform/2col-retina/image.png';
      newCircuit.track =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Hungary%20carbon.png.transform/2col-retina/image.png';
      break;
    case 'belgium':
      newCircuit.flag =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/belgium-flag.png.transform/2col-retina/image.png';
      newCircuit.track =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Belgium%20carbon.png.transform/2col-retina/image.png';
      break;
    case 'netherlands':
      newCircuit.flag =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/netherlands-flag.png.transform/2col-retina/image.png';
      newCircuit.track =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Netherlands%20carbon.png.transform/2col-retina/image.png';
      break;
    case 'italy-2':
      newCircuit.flag =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/italy-flag.png.transform/2col-retina/image.png';
      newCircuit.track =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Italy%20carbon.png.transform/2col-retina/image.png';
      break;
    case 'russia':
      newCircuit.flag =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAD1BMVEX///8AOabVKx4AMqTTKxXmvQ9FAAAA9UlEQVR4nO3QsQGAMAzAsBT4/2b2eOwqnaAZAAAAAAAAAAAAAAAAAAAAAK69bHPYnJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JS87HNw+aknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk/oBg6TI4mvpq6EAAAAASUVORK5CYII=';
      newCircuit.track =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Russia%20carbon.png.transform/2col-retina/image.png';
      break;
    case 'singapore':
      newCircuit.flag =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/singapore-flag.png.transform/2col-retina/image.png';
      newCircuit.track =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Singapore%20carbon.png.transform/2col-retina/image.png';
      break;
    case 'japan':
      newCircuit.flag =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/japan-flag.png.transform/2col-retina/image.png';
      newCircuit.track =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Japan%20carbon.png.transform/2col-retina/image.png';
      break;
    case 'united states':
      newCircuit.flag =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/united-states-flag.png.transform/2col-retina/image.png';
      newCircuit.track =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/United%20States%20carbon.png.transform/2col-retina/image.png';
      break;
    case 'mexico':
      newCircuit.flag =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/mexico-flag.png.transform/2col-retina/image.png';
      newCircuit.track =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Mexico%20carbon.png.transform/2col-retina/image.png';
      break;
    case 'brazil':
      newCircuit.flag =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/brazil-flag.png.transform/2col-retina/image.png';
      newCircuit.track =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Brazil%20carbon.png.transform/2col-retina/image.png';
      break;
    case 'australia':
      newCircuit.flag =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/australia-flag.png.transform/2col-retina/image.png';
      newCircuit.track =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Australia%20carbon.png.transform/2col-retina/image.png';
      break;
    case 'saudi arabia':
      newCircuit.flag =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/saudi-arabia-flag.png.transform/2col-retina/image.png';
      newCircuit.track =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Saudi%20Arabia%20carbon.png.transform/2col-retina/image.png';
      break;
    case 'uae':
      newCircuit.flag =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/abu-dhabi-flag.png.transform/2col-retina/image.png';
      newCircuit.track =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Abu%20Dhabi%20carbon.png.transform/2col-retina/image.png';
    default:
      break;
  }

  return newCircuit;
});

console.log(renderableCircuits, 'Im the renderable circuits');
