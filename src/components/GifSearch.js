import React, { useState, useEffect } from 'react';

const GifSearch = () => {
  const [gifs, setGifs] = useState([]);
  const apiKey = process.env.REACT_APP_GIPHY_API_KEY; // Accessing API key from environment variable

  useEffect(() => {
    if (!apiKey) {
      console.error('API key not found');
      return;
    }

    // Fetching data using the API key when the component mounts
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=10`)
      .then((response) => response.json())
      .then((data) => {
        // Handle the fetched data
        setGifs(data.data);
      })
      .catch((error) => {
        // Handle errors
        console.error('Error fetching data:', error);
      });
  }, [apiKey]);

  // Display fetched GIFs
  return (
    <div>
      <h1>Trending GIFs</h1>
      <ul>
        {gifs.map((gif) => (
          <li key={gif.id}>
            <img src={gif.images.fixed_height.url} alt={gif.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GifSearch;
