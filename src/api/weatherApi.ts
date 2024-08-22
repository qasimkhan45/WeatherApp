const API_KEY = 'd69ef1ad9dd89445b109b52bb03a8c16';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export interface FetchError {
  message: string;
}
export const fetchWeather = async (city: string) => {
  try {
    const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    if (!response.ok) {
      throw new Error('City not found');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error((error as FetchError).message);
  }
};