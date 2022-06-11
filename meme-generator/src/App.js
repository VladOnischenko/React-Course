import React from 'react'
import './style.scss'

import Header from "./components/Header/Header";
import Meme from "./components/Meme/Meme";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Meme />
    </div>
  );
}

export default App;
