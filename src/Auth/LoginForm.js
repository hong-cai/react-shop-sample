import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
// import { SendHttpRequest } from '../services/SendHttpRequest';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { ProductConsumer } from '../ProductContext';
import { UserConsumer } from '../UserContext';
import Alert from 'components/Alert';
import signInWithGoogle from '../firebase/firebase.utils';
class Login extends Component {
    constructor(props) {
        super(props);
        // this.handleSignInWithGoogle = this.handleSignInWithGoogle.bind(this)
        this.state = {
            userData: {
                email: '',
                password: ''
            },
            emailError: '',
            passwordError: '',
            loginErrors: '',
            // redirectToReferrer: false
        };
    }


    handleSignInWithGoogle = () => {
        console.log('clicked the google sign in')
    }

    loginState = () => {

    }

    //CODE EXAMPLE,details in:https://github.com/hong-cai/php-MVC-panel-adminLTE-bootstrap-javascript
    loginTest = (e) => {
        e.preventDefault();
        fetch('http://localhost/store-sample/api/index.php?tp=login',
            {
                method: 'POST',
                body: JSON.stringify(this.state),
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
    }

    // loginLocal = (e) => {
    //     e.preventDefault();
    //     console.log('clicked');

    // }

    loginRemote = (e) => {
        e.preventDefault();
        if (this.state.email && this.state.password) {
            this.SendHttpRequest('login', 'POST', this.state)
                .then((responseJson) => {
                    console.log('result', responseJson);
                    if (responseJson.userData) {
                        sessionStorage.setItem('userData', JSON.stringify(responseJson));
                        this.setState({ redirectToReferrer: true });
                        console.log('right');
                    }
                    else {
                        console.log(responseJson.error);
                    }
                })
                .catch(error => {
                    console.error(error);
                });
            // .then((result) => {
            //     let responseJson = result;
            //     console.log('responseJson', responseJson);
            //     if (responseJson.userData) {
            //         sessionStorage.setItem('userData', JSON.stringify(responseJson));
            //         this.setState({ redirectToReferrer: true });
            //         console.log('right');
            //     }
            //     else {
            //         alert(result.error);
            //     }
            // });
        }
    }




    onChange = (e) => {
        let userData = this.state.userData;
        userData[e.target.name] = e.target.value;
        this.setState({
            userData
        });
    };


    validateLogin = (e) => {
        let target = e.target;
        const emailCheck = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.([a-zA-Z]{2,4})$/i;
        let errorMessage = '';
        if (target.name === "email") {
            if (!emailCheck.test(target.value)) {
                errorMessage += 'Please input a valid email';
            }
            this.setState({
                emailError: errorMessage
            });
        };
    };


    render() {
        // if (this.state.redirectToReferrer) {
        //     return (<Redirect to={'/cart'} />)
        // }
        // if (sessionStorage.getItem('userData')) {
        //     return (<Redirect to={'/cart'} />)
        // }
        const { emailError, passwordError } = this.state;
        return (
            <div className="card col-12">
                <UserConsumer>
                    {value => {
                        // const { loginLocalData, alert, loggedIn } = value;
                        console.log(value);
                        // return (
                        //     <article className="card-body">
                        //         <h4 className="card-title mt-3 text-center">Login</h4>
                        //         {alert !== '' && loggedIn === false ? <Alert alert={alert} /> : null}
                        //         {/* REMIND:ADD GOOGLE AUTHENTICATION */}
                        //         <p>
                        //             <a href="#" onClick={this.handleSignInWithGoogle} className="btn btn-block btn-google"> <i className="fab fa-google-f"></i> &nbsp; Login via google</a>
                        //         </p>
                        //         <p className="divider-text">
                        //             <span className="bg-light">OR</span>
                        //         </p>
                        //         <form method="post">
                        //             <div className="form-group input-group">
                        //                 <div className="input-group-prepend">
                        //                     <span className="input-group-text">
                        //                         <FaEnvelope />
                        //                     </span>
                        //                 </div>
                        //                 <input type="text" name="email" className="form-control" placeholder="Email" onChange={this.onChange} onBlur={this.validateLogin} autoFocus={false} required />
                        //             </div>
                        //             <div className="error-message"><p>{emailError}</p></div>
                        //             <div className="form-group input-group">
                        //                 <div className="input-group-prepend">
                        //                     <span className="input-group-text">
                        //                         <FaLock />
                        //                     </span>
                        //                 </div>
                        //                 <input type="password" className="form-control" name="password" placeholder="Password" onChange={this.onChange} onBlur={this.validateLogin} autoFocus={false} required />
                        //             </div>
                        //             <div className="error-message"><p>{passwordError}</p></div>

                        //             <div className="form-group input-group">
                        //                 <input type="submit" className="btn btn-block btn-primary" value="Login" onClick={(e) => { e.preventDefault(); loginLocalData(this.state.userData) }} /> </div>
                        //             {/* REMIND:ADD FORGET PASSWORD PAGE */}
                        //             {/* <div className="form-group input-group">
                        //     <input type="submit" className="btn m-auto" value="Forget Password?" onClick={this.resetPass} /> </div> */}
                        //         </form>
                        //     </article>
                        // )
                    }}

                </UserConsumer>
            </div>
        );
    }
}
export default Login;