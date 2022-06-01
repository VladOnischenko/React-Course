import React, { Component } from 'react';
import Card from "./card/Card";
import './index.scss';
import usersConfig from './config/config.js'
import Button from "./buttons/Button";


class App extends Component{
  state = {
    flag: false,
  }

  displayUser = () => {
    const user = usersConfig[0]
    this.setState({
      flag: !this.state.flag,
      ...user
    })
  }

  changeState = () => {
    this.setState({
      flag: !this.state.flag
    })
  }

  render() {
    const { flag, name, specialization, interests, about,website, social } = this.state
    return (
      <>
        { flag || <Button  onClick={this.displayUser}/>}
        { flag && <Card
        name={name}
        specialization={specialization}
        interests={interests}
        about={about}
        website={website}
        social={social}
        changeState={this.changeState}
        />}
      </>
    );
  }
}

export default App;
