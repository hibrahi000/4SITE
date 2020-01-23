import React, { Component } from 'react';
import axios from 'axios';
import classes from './Login.module.css';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      loginErrors: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const { email, password } = this.state;
    //this.props.isAuth();
    // axios
    //   .post(
    //     'http://localhost:3001/sessions',
    //     {
    //       user: {
    //         email: email,
    //         password: password
    //       }
    //     },
    //     { withCredentials: true }
    //   )
    //   .then(response => {
    //     if (response.authenticated) {
    //       this.props.handleSuccessfulAuth(response.data);
    //     }
    //   })
    //   .catch(error => {
    //     console.log('login error', error);
    //   });
    // event.preventDefault();
  }

  render() {
    return (
      <div className={classes.Login}>
        <form className={classes.login} onSubmit={this.handleSubmit}>
          <input
            className={classes.email}
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <br />
          <input
            className={classes.password}
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <br />
          <br />
          <button className={classes.btn} type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}
