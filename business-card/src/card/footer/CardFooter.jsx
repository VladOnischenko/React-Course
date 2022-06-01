import React, {Component} from 'react';
import './cardFooter.scss'
import twitter from "../../images/social-media/Twitter Icon.svg";
import facebook from "../../images/social-media/Facebook Icon.svg";
import instagram from "../../images/social-media/Instagram Icon.svg";
import github from "../../images/social-media/GitHub Icon.svg";

class CardFooter extends Component {
  render() {
    const { social } = this.props
    return (
      <>
        <div className="card__footer-container">
          <a href="#" target="_blank">
            <img src={twitter} alt={twitter}/>
          </a>
          <a href="#" target="_blank">
            <img src={facebook} alt={facebook}/>
          </a>
          <a href="#" target="_blank">
            <img src={instagram} alt={instagram}/>
          </a>
          <a href={social.github} target="_blank">
            <img src={github} alt={github}/>
          </a>
        </div>
      </>
    );
  }
}

export default CardFooter;