import styled from 'styled-components';


const NavWrapper = styled.nav`
    background:var(--main-color);
    color:var(--main-bright);
    position: sticky;
    top: 0;
    z-index: 5
    span{
        /* background:green; */
        font-size:1.5rem;
        position:relative;
    }

    .tooltip-tip{
        &:after{
            border-bottom: 11px solid var(--main-background);
            border-left: 11px solid transparent;
            border-right: 11px solid transparent;
            content: "";
            display: inline-block;
            position: absolute;
            left: 0;
            margin-right: auto;
            margin-left: auto;
            width: 1px;
            top: 100%;
        }
    }

    .navbar-list
    {
        font-size:2rem;
        cursor: pointer;
    /* display:none;     */
    }
    
    .cart-items{
        position: absolute;
        top: -8px;
        right: -8px;
        background:var(--main-background);
        padding: 0 6px;
        border-radius: 20%;
        color: var(--main-dark);
        font-size:1rem;
        font-family:'Roboto';
    }

    .logo{
        font-family:var(--logo-font);
        text-transform: capitalize;
    }

    .logo svg{
        color:var(--main-red);
    }

    .logo p{
        margin:0;
    }

.nav-item:nth-child(5){
text-transform:capitalize;
}


    

    /* --------Hover Cart-------- */
    .hover-cart-wrapper{
        position:absolute;
        /* background:pink; */
        background: var(--light-color);
        border-radius: 5px;
        top:100%;
        box-shadow: 0 13px 27px -5px rgba(50,50,93,0.25), 0 8px 16px -8px rgba(0,0,0,0.3), 0 -6px 16px -6px rgba(0,0,0,0.025);
    }
    .adjust-right-user{
        right:4rem;
    }
    .adjust-right-cart{
        right:5px;
    }
    .hover-cart {
        color:var(--main-dark);
      /* visibility:visible; */
    position: relative;
    min-width: 350px;
    width: 30%;
    display: grid;
    grid-column-gap:10px;
    /* flex-direction: column; */
    padding: 20px;
    margin: 5px;
    right:0;
    z-index: 4;
    font-size:1rem;
    text-transform:capitalize;
    border:1px solid var(--light-color)
}



        .hover-cart-details {
    display: grid;
    grid-template-columns: 2.5fr 0.5fr;
    border-bottom:1px dotted var(--main-background);
    :hover{
        background:var(--main-color);
        border-radius:5px;
    }
    a {
        bottom:0;
    }
}


.hover-cart-item {
    display: grid;
    grid-template-columns:1fr 2fr 1fr;
    align-items: center;
    margin: 10px 0;
}

.hover-cart-item input{
    text-align:center;
    width:40px;
}




.img-div {
    width: 60px;
    height: auto;
}

.img-div img {
    max-width: 100%;
    padding: 10px;
}


.hover-cart-item-details {
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    padding:0;
}

.hover-cart-item-details .hover-title{
    /* background:orange; */
    text-transform:capitalize;
    color:var(--main-dark);
    font-size:1rem;
    text-overflow: ellipsis;
    overflow: hidden;
}

.hover-cart-item-details .reg-price{
    padding:0;
    margin:0;
}

.hover-cart-item-details .discount{
    display:none;
}

.remove {
    display:grid;
    place-items:center;
    font-size:1rem;
    cursor: pointer;
}



/* --------End of Hover Cart-------- */

    a {
  text-decoration: none;
//   text-transform:uppercase;
  color:var(--main-dark);
  font-size:1.2rem;
}



`;

export default NavWrapper;