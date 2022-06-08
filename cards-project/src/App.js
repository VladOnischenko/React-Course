import React, {useEffect, useState} from 'react'
import './index.scss'
import Header from "./components/header/Header";
import Cards from "./components/cards/Cards";

function App() {
  const [cards, setCards] = useState([])

  useEffect( () => {
    fetch('./info-cards.json')
      .then(response => response.json())
      .then(data => setCards(data))
  },[])

  return (
   <main className="page">
      <Header />
      <Cards cards={cards}/>
   </main>
  );
}

export default App;
