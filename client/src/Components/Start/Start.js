import React, { Component } from 'react';
import axios from 'axios';
import Login from '../Login/Login';
import UserPages from '../UserPages/HomePage';

class Start extends Component {
  state = {
    authenticated: false
  };

  isAuth = variable => {
    this.setState({ authenticated: true });
    console.log(this.state.authenticated);
  };

  render() {
    let page = this.state.authenticated ? (
      <Login verify={this.isAuth} />
    ) : (
      <UserPages />
    );
    return <div>{page}</div>;
  }
}
