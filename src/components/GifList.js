// GifList.js
import React from 'react';

function GifList({ gifs }) {
  return (
    <div>
      <ul>
        {gifs.map((gif) => (
          <li key={gif.id}>
            <img src={gif.images.original.url} alt={gif.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GifList;
