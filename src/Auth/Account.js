import React from 'react';
import Title from 'components/Title';
import Signup from './SignupForm';
// import Login from './LoginForm';
import TestForm from '../sandbox/TestForm';
// import { Pets } from '../sandbox/mountedUnmounted/Pets';
import CounterOne from '../sandbox/reducerTest/CounterOne';
import SelectedOption from '../sandbox/mountedUnmounted/SelectedOption';
import TestState from '../sandbox/mountedUnmounted/TestState';
import TestUseEffect from '../sandbox/mountedUnmounted/TestUseEffect';
import TestUseEffectInterval from '../sandbox/mountedUnmounted/TestUseEffectInterval';
import ClassDidUpdate from '../sandbox/mountedUnmounted/ClassDidUpdate';
// import { UserProvider } from '../UserContext';


const Account = () => {
    return (
        <>
            <Title name="Account" title="Login" />
            <div className="container">
                <div className="row login-forms">
                    {/* 
                    <div className="col-lg-6 col-12">
                        <Login />
                    </div>
                    <div className="col-lg-6 col-12">
                        <Signup />
                    </div> */}
                    {/* This TestForm is for testing php backend purpose  */}
                    <div className="col-lg-6 col-12">
                        <TestForm />
                        <hr />
                        {/* <Pets /> */}
                        {/* <hr />
                        <CounterOne /> */}
                        {/* <SelectedOption /> */}
                        <hr />
                        {/* <TestState /> */}
                        {/* <TestUseEffect /> */}
                        {/* <hr />
                        <ClassDidUpdate /> */}
                        <hr />
                        <TestUseEffectInterval />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Account



