const circuits = [
  { name: 'Formula 1 Gulf Air Bahrain Grand Prix 2021', country: 'bahrain' },
  {
    name: 'Formula 1 Pirelli Gran Premio Del Made In Italy E Dell emilia Romagna 2021',
    country: 'italy',
  },
  {
    name: 'Formula 1 Heineken Grande Prémio De Portugal 2021',
    country: 'portugal',
  },
  { name: 'Formula 1 Aramco Gran Premio De España 2021', country: 'spain' },
  { name: 'Monaco', country: 'monaco' },
  { name: 'Azerbaijan', country: 'azerbaijan' },
  { name: 'France', country: 'france' },
  { name: 'Formula 1 Grosser Preis Der Steiermark 2021', country: 'austria' },
  { name: 'Formula 1 Grosser Preis Von Österreich 2021', country: 'austria' },
  { name: 'Great Britain', country: 'great-britain' },
  { name: 'Hungary', country: 'hungary' },
  { name: 'Belgium', country: 'belgium' },
  { name: 'Netherlands', country: 'netherlands' },
  { name: 'Formula 1 Heineken Gran Premio D’italia 2021', country: 'italy' },
  { name: 'Russia', country: 'russia' },
  { name: 'Singapore', country: 'singapore' },
  { name: 'Japan', country: 'japan' },
  { name: 'United States', country: 'united states' },
  { name: 'Mexico', country: 'mexico' },
  { name: 'Brazil', country: 'brazil' },
  { name: 'Australia', country: 'australia' },
  { name: 'Saudi Arabia', country: 'saudi arabia' },
  { name: 'Abu Dhabi', country: 'uae' },
];

const capitalise = (str) => {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
};

export const renderableCircuits = circuits.map((circuit) => {
  const newCircuit = {
    name: capitalise(circuit.name),
    country: capitalise(circuit.country),
  };

  switch (circuit.country) {
    case 'bahrain':
      newCircuit.flag =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/bahrain-flag.png.transform/2col-retina/image.png';
      break;
    case 'italy':
      newCircuit.flag =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/italy-flag.png.transform/2col-retina/image.png';
      break;
    case 'portugal':
      newCircuit.flag =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/portugal-flag.png.transform/2col-retina/image.png';
      break;
    case 'spain':
      newCircuit.flag =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/spain-flag.png.transform/2col-retina/image.png';
      break;
    case 'monaco':
      newCircuit.flag =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/monaco-flag.png.transform/2col-retina/image.png';
      break;
    case 'azerbaijan':
      newCircuit.flag =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/azerbaijan-flag.png.transform/2col-retina/image.png';
      break;
    case 'france':
      newCircuit.flag =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/france-flag.png.transform/2col-retina/image.png';
      break;
    case 'austria':
      newCircuit.flag =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/austria-flag.png.transform/2col-retina/image.png';
      break;
    case 'great-britain':
      newCircuit.flag =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/great-britain-flag.png.transform/2col-retina/image.png';
      break;
    case 'hungary':
      newCircuit.flag =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/hungary-flag.png.transform/2col-retina/image.png';
      break;
    case 'belgium':
      newCircuit.flag =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/belgium-flag.png.transform/2col-retina/image.png';
      break;
    case 'netherlands':
      newCircuit.flag =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/netherlands-flag.png.transform/2col-retina/image.png';
      break;
    case 'russia':
      newCircuit.flag =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAD1BMVEX///8AOabVKx4AMqTTKxXmvQ9FAAAA9UlEQVR4nO3QsQGAMAzAsBT4/2b2eOwqnaAZAAAAAAAAAAAAAAAAAAAAAK69bHPYnJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JS87HNw+aknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk/oBg6TI4mvpq6EAAAAASUVORK5CYII=';
      break;
    case 'singapore':
      newCircuit.flag =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/singapore-flag.png.transform/2col-retina/image.png';
      break;
    case 'japan':
      newCircuit.flag =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/japan-flag.png.transform/2col-retina/image.png';
      break;
    case 'united states':
      newCircuit.flag =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/united-states-flag.png.transform/2col-retina/image.png';
      break;
    case 'mexico':
      newCircuit.flag =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/mexico-flag.png.transform/2col-retina/image.png';
      break;
    case 'brazil':
      newCircuit.flag =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/brazil-flag.png.transform/2col-retina/image.png';
      break;
    case 'australia':
      newCircuit.flag =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/australia-flag.png.transform/2col-retina/image.png';
      break;
    case 'saudi arabia':
      newCircuit.flag =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/saudi-arabia-flag.png.transform/2col-retina/image.png';
      break;
    case 'uae':
      newCircuit.flag =
        'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Flags%2016x9/abu-dhabi-flag.png.transform/2col-retina/image.png';
    default:
      break;
  }

  return newCircuit;
});

console.log(renderableCircuits);
