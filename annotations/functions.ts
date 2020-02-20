const add = (a: number, b: number) => {
  return a + b;
};

function subtract(a: number, b: number) {
  return a - b;
}

const logger = function(): void {
  console.log('Void');
};

const throwError = (message: string): never => {
  if (true) {
    throw new Error(message);
  }
};

interface Forecast {
  date: Date;
  weather: string;
}

const logWeather = ({ date }: Forecast): void => {
  console.log(date);
  // console.log(weather);
};

const forecast = {
  date: new Date(),
  weather: 'sunny',
};
logWeather(forecast);
