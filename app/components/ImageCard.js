import React from "react";
import Gallery from "./Gallery";

const App = () => {
  const beforeImage = "/header.jpg"; // Ensure these files are in the public folder
  const afterImage = "/pexels-mstudio-2324562.jpg"; // Ensure these files are in the public folder

  return (
    <div className="flex items-center justify-center h-screen ">
      <Gallery beforeImage={beforeImage} afterImage={afterImage} />
    </div>
  );
};

export default App;