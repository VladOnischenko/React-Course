import React, {Component} from 'react';
import './cardBody.scss'

class CardBody extends Component {
  render() {
    const { about, interests} = this.props
    return (
      <>
        <div className="card__body-about">
          <h3>About</h3>
          <p>{about}</p>
        </div>
        <div className="card__body-interests">
          <h3>Interests</h3>
          <p>{interests}</p>
        </div>
      </>
    );
  }
}

export default CardBody;