import React, {Component} from 'react';
import './btn.scss'

class Button extends Component {

  render() {
    const { onClick } = this.props
    return (
      <button className="btn-start" onClick={onClick}>Start Program</button>
    );
  }
}

export default Button;