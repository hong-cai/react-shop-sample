import React, { Component } from 'react';
import { UserConsumer } from '../UserContext';
import Alert from 'components/Alert';

class TestForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {
                email: '',
                password: ''
            },
            // redirectToReferrer: false
        };
        this.login = this.login.bind(this);
        this.loginTest = this.loginTest.bind(this);
        this.postTest = this.postTest.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.PostData = this.PostData.bind(this);
        this.sendHttpRequest = this.sendHttpRequest.bind(this);
    }

    login() {
        // console.log(this.state);
        // debugger;
        //NEED VALIDATION
        if (this.state.email && this.state.password) {
            console.log(this.state);
            this.PostData('login', this.state).then((result) => {
                let responseJson = result;
                if (responseJson.userData) {
                    sessionStorage.setItem('userData', JSON.stringify(responseJson));
                    this.setState({ redirectToReferrer: true });
                }
                else
                    console.log(result.error);
            });
        }
    }



    loginTest() {
        /*****************Without Wrapping In a Funciton******************/
        // fetch('https://reqres.in/api/users')
        // .then(response => {
        //     console.log(response);
        //     return response.json();
        // })
        //     .then(responseData => {
        //         console.log(responseData);
        //     })

        /*****************Wrapping In a Funciton******************/
        this.sendHttpRequest('GET', 'https://reqres.in/api/users?page=2')
            .then(responseData => {
                console.log(responseData);
            })
    }


    postTest() {
        fetch('http://localhost/reactBegin/store-sample/api/index.php?tp=login',
            {
                method: 'POST',
                body: JSON.stringify({
                    email: '32802446@qq.com',
                    password: '7736'
                }),
                headers:
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            }
        ).then(responseData => {
            // if (response.status >= 400) {
            //     return response.json().then(errResData => {
            //         const error = new Error('something wrong');
            //         error.data = errResData;
            //         throw error;
            //     })
            // }
            console.log('response:: ', responseData);
            return responseData.json();
        }).then(json => console.log(json));
        // debugger;










        // this.sendHttpRequest('POST', 'https://reqres.in/api/login', {
        //     "email": "eve.holt@reqres.in",
        //     "password": "cityslicka"
        // })
        //     .then(responseData => {
        //         console.log("responseData", responseData);
        //         // debugger;
        //     })
        //     .catch(error => {
        //         console.error(error);
        //     })

    }


    postLocal() {

    }

    handleChange(element) {
        this.setState({
            userData: {
                ...this.state.userData,
                [element.target.name]: element.target.value
            }
        }
            // , () => {
            //     console.log("this.state.userData: " + this.state.userData.email + " " + this.state.userData.password);
            // }
        )
    }


    sendHttpRequest(method, url, data) {
        return fetch(url,
            {
                method: method,
                body: JSON.stringify(data),
                header: data ? { 'Content-Type': 'application/json' } : {}
            }
        )
            .then(responseData => {
                // if (response.status >= 400) {
                //     return response.json().then(errResData => {
                //         const error = new Error('something wrong');
                //         error.data = errResData;
                //         throw error;
                //     })
                // }
                console.log('response', responseData);
                // return responseData.json();
            });
    }

    PostData(type, userData) {
        let BaseURL = 'http://localhost/reactBegin/store-sample/api/index.php';
        console.log('type', type, 'userData', userData);
        // debugger;
        // return new Promise((resolve, reject) => {
        // let promise = fetch(BaseURL)
        fetch(BaseURL + '?tp=' + type,
            {
                method: 'POST',
                headers:
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            })
            .then((response) => response.json()
                .then((responseJson) => {
                    // resolve(responseJson);
                    console.log(responseJson);
                }))
            .catch((error) => {
                // reject(error);
                console.error(error);
            });
        // });
    }

    render() {
        return (
            <UserConsumer>
                {value => {
                    const { loggedIn, alert, loginLocalData, handleLogout, handleGoogleLogin, loginWithGoogleEmail, handleSignup, handleGoogleSignup } = value;
                    console.log("value.loggedIn: " + value.loggedIn)
                    return (
                        <article className="card-body" >
                            <h4>Login OR Signup Test</h4>
                            {alert !== '' ? <Alert alert={alert} /> : null}
                            <input type="text" name="email" placeholder="Username" onChange={this.handleChange} />
                            <input type="text" name="password" placeholder="Password" onChange={this.handleChange} />
                            <hr />

                            {/* Sign in with local test data*/}
                            <input type="submit" className="btn btn-block btn-primary" value={loggedIn ? "logged in with local data" : "Login with local data"}
                                onClick={(e) => {
                                    e.preventDefault();
                                    loginLocalData(this.state.userData)
                                }}
                            />

                            {/* Sign in with firebase user data */}
                            <input type="submit" className="btn btn-block btn-primary" value="Login with firestore data"
                            // onClick={(e) => { e.preventDefault(); loginLocalData(this.state.userData) }} 
                            />


                            {/* Sign in with google email and password */}
                            <input type="submit" className="btn btn-block btn-primary" value="Login with google email and password"
                                onClick={(e) => { e.preventDefault(); loginWithGoogleEmail(this.state.userData) }}
                            />

                            <hr />

                            {/* Sign in with Google auth */}
                            <input type="submit" className="btn btn-block btn-primary" value="Login with Google"
                                onClick={(e) => { handleGoogleLogin(this.state.userData) }}
                            />
                            {/* Sign up to local data */}
                            <input type="submit" className="btn btn-block btn-primary" value="sign up to local data"
                                onClick={(e) => { e.preventDefault(); handleSignup(this.state.userData) }}
                            />
                            {/* Sign up to Google auth*/}
                            <input type="submit" className="btn btn-block btn-primary" value="sign up to Google auth"
                                onClick={(e) => { e.preventDefault(); handleGoogleSignup(this.state.userData) }}
                            />
                            {loggedIn === true ? <input type="submit" className="btn btn-block btn-primary" value="log out"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleLogout()
                                }}
                            /> : null}

                        </article>
                    )
                }}

            </UserConsumer >
        )
    }
}

export default TestForm