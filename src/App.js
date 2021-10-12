import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar/Navbar';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import AddToCartModal from './components/Modals/AddToCartModal';
import LoginConfirmModal from './components/Modals/LoginConfirmModal';
import Home from './pages/Home';
import About from './pages/About';
import Account from './Auth/Account';
import AccountInfo from './Auth/AccountInfo';
import User from './Auth/User';
import Error from './pages/Error';
import Details from './components/Products/Details';
import Shop from './pages/Shop';
import Contacts from './pages/Contacts';
import Default from './pages/Default';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [
        {
          page_id: 1,
          page_name: "About",
          page_component: About
        },
        {
          page_id: 2,
          page_name: "Shop",
          page_component: Shop
        },
        {
          page_id: 3,
          page_name: "Cart",
          page_component: Cart
        },
        {
          page_id: 4,
          page_name: "",
          page_component: Home
        },
        {
          page_id: 5,
          page_name: "Products",
          page_component: Products
        },
        {
          page_id: 6,
          page_name: "Contact_us",
          page_component: Contacts
        },
        {
          page_id: 7,
          page_name: "Default",
          page_component: Default
        },
        {
          page_id: 8,
          page_name: "user/login",
          page_component: Account
        },
        {
          page_id: 9,
          page_name: "user/:userId",
          page_component: AccountInfo
        },
        {
          page_id: 10,
          page_name: "products/:postName",
          page_component: Details
        }
      ]
    }
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          {
            this.state.pages.map((page) => {
              return (
                <Route exact
                  key={page.page_id} path={'/' + page.page_name.toLowerCase()} component={page.page_component} />
              )
            })
          }
          {/* <Route component={Default} /> */}
        </Switch>
        <AddToCartModal />
        {/* <LoginConfirmModal /> */}
      </React.Fragment>
    )
  }
}

export default App;
