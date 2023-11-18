// api.js

const apiKey = 'YOUR_ACTUAL_API_KEY';

export const fetchGifs = async (query) => {
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('There was a problem fetching data:', error);
  }
};
