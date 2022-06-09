import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import config from "./config/config"
import Items from "./components/Items";

const App = () => {

  return (
    <div className="wrapper">
      <Header />
      <Items items={config}/>
      <Footer />
    </div>
  );
};

export default App;