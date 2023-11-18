import React, { useState, useEffect } from 'react';

const GifSearch = () => {
  const [gifs, setGifs] = useState([]);
  const apiKey = 'bhy2TiGGYQTwALj3Mmab4HUzn1o2sQRV'; // Replace with your actual API key

  useEffect(() => {
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
