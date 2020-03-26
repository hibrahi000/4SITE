import React, { Component } from 'react';
import axios from 'axios';
import classes from './Login.module.css';
import ProgressBar from '../ProgressBar/ProgressBar';
import { Redirect } from 'react-router-dom';
export default class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: '',
			loginErrors: '',
			user: '',
			store: '',
			company: '',
			redirect: false,
			wrongPass: false,
			message: ''
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
		event.preventDefault();
		const { username, password } = this.state;
		console.log('this', username);
		if (username === '' || username === undefined || password === '' || password === undefined) {
			this.setState({ message: 'Please Fill All Fields', wrongPass: true });
		} else {
			console.log(username, password);
			axios
				.post(`/Login/Validate?username=${username}&password=${password}`)
				.then((response) => {
					console.log(response.data.authenticated);
					if (response.data.authenticated) {
						let user = response.data.response;
						axios.get(`/Home?id=${user.id}`).then((response) => {
							let user = response.data.user;
							let store = response.data.store;
							let company = response.data.company;
							this.setState({ user: user, store: store, company: company, redirect: true });
						});
					} else {
						this.setState({ message: 'Error: Wrong Credentials', wrongPass: true });
					}
				})
				.catch((error) => {
					console.log('login error', error);
					this.setState({ message: 'Error: Wrong Credentials', wrongPass: true });
				});
		}
	}

	render() {
		let redirect = this.state.redirect ? (
			<Redirect
				to={{
					pathname: '/Home',
					state: { state: { user: this.state.user, store: this.state.store, company: this.state.company } }
				}}
			/>
		) : (
			<div />
		);

		let errMessage = this.state.wrongPass ? <p className={classes.errMsg}>{this.state.message}</p> : <div />;
		return (
			<div className={classes.Login}>
				<h1 className={classes.loginHeader}>Login</h1>
				<form className={classes.login}>
					{errMessage}
					<input
						className={classes.email}
						type="username"
						name="username"
						placeholder="Username"
						value={this.state.username}
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
					<button className={classes.btn} type="submit" onClick={this.handleSubmit}>
						Login
					</button>
					{redirect}
				</form>
			</div>
		);
	}
}
