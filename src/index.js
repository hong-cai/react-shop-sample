import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Test from './Test';
import { UserProvider } from './UserContext';
import { ProductProvider } from './ProductContext';


// import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
ReactDOM.render(
    <UserProvider>
        <ProductProvider>
            <Router basename={'/react-shop-sample'}>
                <Switch>
                    {/* This test route is for testing separate components */}
                    <Route exact path="/test" component={Test} />
                    <Route component={App} />
                </Switch>
            </Router>
        </ProductProvider>
    </UserProvider>, document.getElementById('root'));
