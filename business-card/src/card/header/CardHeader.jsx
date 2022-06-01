import React, {Component} from 'react';
import userPhoto from "../../images/VladOnischenko.jpeg";
import mail from "../../images/social-media/mail.svg";
import linkedin from "../../images/social-media/linkedin.svg";
import './cardHeader.scss'

class CardHeader extends Component {
  render() {
    const {website, name, social, specialization, changeState} =this.props
    return (
      <>
        <div className="card__header-img">
          <img src={userPhoto} alt={userPhoto}/>
        </div>
        <div className="card__header__info">
          <p className="card__header__info-name">{name}</p>
          <p className="card__header__info-specialization">{specialization}</p>
          <a href={website} target="_blank" className="card__header__info-portfolio">{website}</a>
        </div>
        <div className="card__header__links">
          <a href={`mailto:${social.email}`} className="card__header__links-email">
            <img src={mail} alt={mail}/>
            <span>Email</span>
          </a>
          <a href={social.linkedin} className="card__header__links-linkedin" target="_blank">
            <img src={linkedin} alt={linkedin}/>
            <span>LinkedIn</span>
          </a>
        </div>
        <button className="btn-close" onClick={changeState}>&times;</button>
      </>
    );
  }
}

export default CardHeader;