import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { firebaseApp, authGoogle, authProvider } from './firebase/firebase.utils';

const UserContext = React.createContext();


class UserProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			/*Login State*/
			loggedIn: false,
			alert: null,
			loading: false,
			user: null,
			users: [
				{
					id: 1,
					email: 'aaaa@test.com',
					password: 'aaaa'
				},
				{
					id: 2,
					email: 'bbbb@test.com',
					password: 'bbbb'
				},
			]
		}
	}



	/****************************
	 * Login/Validation/Logout
	 * ************************** */

	validateUser = (userData) => {
		const users = this.state.users;
		let matchEmail = users.find(user => user.email === userData.email);
		let matchPass = users.find(user => user.password === userData.password);
		if (!matchEmail || !matchPass) {
			this.setState({
				alert: { msg: 'Email or password does not match the record. Please try again.', type: 'danger' },
				loggedIn: false,
			});
		} else if (matchEmail && matchPass) {
			this.setState({
				alert: { msg: 'Login Success', type: 'success' },
				loggedIn: true,
				user: userData,
			}, () => { this.saveUser(userData) })
		}
	}
	checkInputsEmpty = (userData) => {
		if (!userData.email || !userData.password) {
			this.setState({
				alert: { msg: 'either user email or password is empty please enter the correct email/password', type: 'danger' }
			})
		};
	}

	checkUserLoggedIn = () => {
		if (sessionStorage.getItem('loggedInUser')) {
			this.setState({
				alert: { msg: 'there is a user logged in, please log out and try again', type: 'danger' }
			})
		};
	}

	checkUserExists = (userEmail) => {
		const users = this.state.users;
		let matchEmail = users.find(user => user.email === userEmail);
		if (!matchEmail) {
			return false;
		} else {
			return true;
		}
	}

	//Handle Signup:
	handleSignup = (userData) => {
		//ATTENTION: SOMETHING WRONG HERE!!!
		let oldUsers = this.state.users;
		let userNum = this.state.users.length;
		let newUser = {
			id: ++userNum,
			email: userData.email,
			password: userData.password
		}
		if (!this.checkUserExists(userData.email)) {
			let newUsers = [...oldUsers, newUser]
			this.setState({
				users: newUsers,
				alert: { msg: 'new user added successfully,please log in', type: 'success' }
			}, () => {
				console.log(this.state.users)
			})
		} else {
			this.setState({
				alert: { msg: 'user exists,please log in', type: 'danger' }
			}, () => {
				console.log(this.state.users)
			})
		}
	}

	//Handle Google Signup:
	handleGoogleSignup = (userData) => {
		this.handleLogout();


		const signupPromise = authGoogle.createUserWithEmailAndPassword(userData.email, userData.password);

		signupPromise
			.then((result) => { console.log(result) })
			.catch((error) => {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				// The email of the user's account used.
				var email = error.email;
				// The firebase.auth.AuthCredential type that was used.
				var credential = error.credential;
				// ...
				console.log(errorMessage);
				this.setState({
					alert: { msg: errorCode + ": " + errorMessage + ": " + credential + ": " + email, type: 'danger' }
				})
			});
	}




	// Login user
	loginLocalData = (userData) => {
		this.validateUser(userData);
	};



	handleGoogleLogin = (userData) => {
		console.log("userData: " + userData.email + userData.password);
		authGoogle.signInWithPopup(authProvider)
			.then((result) => {
				/** @type {firebase.auth.OAuthCredential} */
				var credential = result.credential;

				// This gives you a Google Access Token. You can use it to access the Google API.
				var token = credential.accessToken;
				// The signed-in user info.
				var user = result.user;
				// ...
			}).catch((error) => {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				// The email of the user's account used.
				var email = error.email;
				// The firebase.auth.AuthCredential type that was used.
				var credential = error.credential;
				// ...
				console.log(errorMessage);
			});
	}

	loginWithGoogleEmail = (userData) => {

		const loginPromise = authGoogle.signInWithEmailAndPassword(userData.email, userData.password);
		if (this.state.loggedIn) {
			return this.checkUserLoggedIn();
		} else {
			loginPromise
				.then((result) => {
					// /** @type {firebase.auth.OAuthCredential} */
					// var credential = result.credential;
					// // This gives you a Google Access Token. You can use it to access the Google API.
					// var token = credential.accessToken;
					// // The signed-in user info.
					// var user = result.user;
					// // ...
					// this.setState({
					// 	alert: { msg: 'login google account successfully', type: 'success' }
					// })
					console.log(result)
				})
				.catch((error) => {
					// Handle Errors here.
					var errorCode = error.code;
					var errorMessage = error.message;
					// The email of the user's account used.
					var email = error.email;
					// The firebase.auth.AuthCredential type that was used.
					var credential = error.credential;
					// ...
					console.log(errorMessage);
					this.setState({
						alert: { msg: errorCode + ": " + errorMessage + ": " + credential + ": " + email, type: 'danger' }
					})
				});
		}


	}


	// login State Change Listener
	checkAuthStateChanged = () => {
		return new Promise(function (resolve, reject) {
			authGoogle.onAuthStateChanged(firebaseUser => {
				if (firebaseUser) {
					resolve(firebaseUser);
					// this.setState({
					// 	alert: { msg: 'Login Success', type: 'success' },
					// 	loggedIn: true,
					// 	user: userData,
					// }, () => { this.saveUser(userData) })
				} else {
					reject('not logged in async')
				}
			})
		})
	}

	checkAuthStateChangedNoAsync = () => {
		authGoogle.onAuthStateChanged(firebaseUser => {
			if (firebaseUser) {
				console.log(firebaseUser.email);
				// this.setState({
				// 	alert: { msg: 'Login Success', type: 'success' },
				// 	loggedIn: true,
				// 	user: userData,
				// }, () => { this.saveUser(userData) })
			} else {
				console.log('not logged in');
			}
		})
	}

	// Logout user
	handleLogout = () => {
		if (sessionStorage.getItem('loggedInUser')) {
			this.setState({
				loggedIn: false,
				user: {},
				alert: null
			}, sessionStorage.removeItem('loggedInUser'))
		};
	}

	//Check if user has logged in
	checkLoginStatus = () => {
		if (!sessionStorage.getItem('loggedInUser')) {
			this.setState({
				loggedIn: false,
				user: {}
			}, () => { console.log("not logged In") })
		} else {
			this.setState({
				loggedIn: true,
				user: sessionStorage.getItem('loggedInUser')
			}, () => { console.log("logged In") })
		}
	}

	//Save user in the sessionStorage
	saveUser = (userData) => {
		sessionStorage.setItem('loggedInUser', JSON.stringify(userData));
	}

	componentDidMount() {
		// this.checkLoginStatus();
		/* *** if Promise it will warn:Can't perform a React state update on an unmounted component *** */
		// var user = this.checkAuthStateChanged();
		// user.then((firebaseUser) => {
		// 	console.log(firebaseUser.email)
		// 	this.setState({
		// 		loggedIn: true,
		// 		user: firebaseUser
		// 	});
		// }, (error) => {
		// 	this.setState({ loggedIn: false });
		// 	console.log(error);
		// });

		this.checkAuthStateChangedNoAsync();
	}

	// componentWillUnmount() {
	// 	this.checkAuthStateChanged();
	// }

	render() {
		return (
			<React.Fragment>
				{/* <button onClick={this.testUpdate}>Test Update</button> */}
				<UserContext.Provider value={{
					...this.state,
					loginLocalData: this.loginLocalData,
					handleLogout: this.handleLogout,
					handleGoogleLogin: this.handleGoogleLogin,
					loginWithGoogleEmail: this.loginWithGoogleEmail,
					handleSignup: this.handleSignup,
					handleGoogleSignup: this.handleGoogleSignup
				}}>
					{this.props.children}
				</UserContext.Provider>
			</React.Fragment>
		)
	}
}

UserProvider.propTypes = {
	/*Login State*/
	loggedIn: PropTypes.bool,
	loginLocalData: PropTypes.func,
	handleLogout: PropTypes.func,
	handleGoogleLogin: PropTypes.func,
	loginWithGoogleEmail: PropTypes.func,
	handleSignup: PropTypes.func,
	handleGoogleSignup: PropTypes.func,
	users: PropTypes.shape({
		id: PropTypes.number,
		email: PropTypes.string,
		password: PropTypes.string,
	}),
	user: PropTypes.shape({
		name: PropTypes.string,
		email: PropTypes.string
	})
}



const UserConsumer = UserContext.Consumer;
export { UserProvider, UserConsumer, UserContext };