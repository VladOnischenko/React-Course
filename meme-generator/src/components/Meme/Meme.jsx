import React, {useState} from 'react';
import './meme.scss';
import {FaEarlybirds} from "react-icons/fa";
import memesData from "../../memesData"

const Meme = () => {
  const [ image, setImage ] = useState('')

  const getMemeImage = (event) => {
    event.preventDefault();
    const memesArray = memesData.data.memes
    const randomMemes = Math.floor(Math.random() * memesArray.length)
    const { url } = memesArray[randomMemes]
    setImage(url)
  }
  return (
    <main className="main">
      <form className="form">
        <input className="form__input" type="text" placeholder="Top text"/>
        <input className="form__input" type="text" placeholder="Bottom text"/>
        <button className="form__button" onClick={getMemeImage}>Get a new meme image <FaEarlybirds /></button>
      </form>
      <img src={image} alt="image" className="meme-image"/>
    </main>
  );
};

export default Meme;