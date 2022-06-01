import React, {Component} from 'react';
import './card.scss'
import CardFooter from "./footer/CardFooter";
import CardBody from "./body/CardBody";
import CardHeader from "./header/CardHeader";

class Card extends Component {
  render() {
    const { name, website, about, interests, social, specialization, changeState } = this.props
    return (
      <section className="card">
        <header className="card__header">
          <CardHeader name={name} website={website} specialization={specialization} social={social} changeState={changeState}/>
        </header>
        <main className="card__body">
          <CardBody about={about} interests={interests}/>
        </main>
        <footer className="card__footer">
            <CardFooter social={social}/>
        </footer>
      </section>
    );
  }
}

export default Card;