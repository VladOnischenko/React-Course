import React from "react";
import Header from "./components/Header";
import MainContext from "./components/MainContent";
import Footer from "./components/Footer";

function App () {
  return (
      <main className="content">
        <Header />
        <MainContext />
        <Footer />
      </main>
  )
}

export default App;
