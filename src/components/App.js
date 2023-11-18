import React from "react";
import NavBar from "./NavBar";
import GifListContainer from "./GifListContainer"; // Import GifListContainer component

function App() {
  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <GifListContainer /> {/* Include the GifListContainer component */}
    </div>
  );
}

export default App;
