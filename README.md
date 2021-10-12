# React Ecommerce Application

### Created with

- Bootstrap
- React JS
- ContextAPI
- Styled Component
- * Firebase(currently at user validation stage)
- * GraphQL

### Stage:
- Currently working on: Moving possible class components to functional components and use hooks
- Currently working on: Moving value sharing from ContextAPI to Redux
- Currently working on: Using firebase and store products to firestore
- Currently working on: Using graphQL to request products details

Demo: [https://hong-cai.github.io/react-shop-sample](https://hong-cai.github.io/react-shop-sample)

### Features

     - Products Display
     - Top right menu: Hovered Cart Editing(use useCallback() to stop component re-rendering)
     - Shopping Cart Summary
     - Unlimited products scrolling
     - Products Filter
     - Login/Signup/Logout(local test data and firebase users)
     - Auto Scrolling Carousel
     - Not done yet: Paypal payment Method
     - Not done yet: turn products list into unlimited scrolling effect

### Main functionalities:

- Design with Styled Component/HTML/CSS and Bootstrap
- Login/Registration Form Validation
- Implement React Components For Product List, Filter, Cart
- Managing Component State using Context API
- Add Routes using React-Routers
- Sample users list using github user API
- Publish Project on Github page
- * Google Authentication
- * Infinite list scrolling

### Sitemap (Main Components)

##### \* Happening soon

    ├── Home
    │   └── Automatic Products Carousel
    │
    ├── Shop
    │   ├── Products Filter
    │   └── Infinite Products Scrolling *
    │
    ├── About
    │   └── Simple Textblock
    │
    ├── Products
    │   └── Productslist
    │
    ├── Account
    │   ├── Login
    │   ├── Signup
    │   ├── Google Authentication using Firebase 
    │   ├── Sample users list     *
    │   └── Forget Password       *
    │
    └── Cart / Checkout
        ├── Cart Modification/Overview
        ├── Order Summary
        ├── Billing/Tax Details
        └── Paypal Method

## Table Of Content

1. Introduction

   1. Introduction

      1. Fully-Functional Shopping Cart(Select Multiple/None Items, Calculate Tax,Remove Items...)
      2. Easily Edited Hover Cart(Edit Order Number,Remove Item...)
      3. Automatic Scrolling Carousel (Pause when hovered, React Scroll)
      4. List Products
      5. Filter Products by Search, Price,Categories,Onsale
      6. Open Product Details Page by Click on The Product
      7. Add To Cart and Open Modal By Click on Product
      8. Show Checkout Form

   2. Toolsets and Technologies
      1. JavaScript
      2. React (react-router-dom,hooks)
      3. Context API
      4. Styled Components
      5. PropTypes
      6. VS Code (ES6 Snippets, ESLint Extension,CSS Peek, Code Formatter...)
      7. Git (create repo, commit, remote, create and push branch)
      8. Github (create repo, connect to local repo, pull request and merge)
      9. Deployment (Github Pages)
      10. Firebase and Google authentication

   3. Project Development Workflow
        1. Extra product data from Wordpress website and edit 
        1. Create data.json {products:[{id, title, ...}]
        2. Update App.js to import data.json
        3. Create Components(Modal,NavBar,Products,FeaturedProducts...) folder
        4. Create Pages(Home,Shop,Cart,About...) folder   


