import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import NavWrapper from '../layouts/NavWrapper';
import { NavHoveredBtn } from '../NavBar/NavHoveredBtn';
import { MdFilterList } from 'react-icons/md';
import { GiHeartPlus } from 'react-icons/gi';

const Navbar = () => {
    return (
        <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>

            <div className="d-flex">
                <Link to='../'>
                    <div className="logo">
                        <span><GiHeartPlus />Hygiene Care</span>
                    </div>
                </Link>
                <ul className='navbar-nav align-items-center'>
                    <li className='nav-item ml-4'>
                        <NavLink to='../'>Home</NavLink>
                    </li>
                    <li className='nav-item ml-4'>
                        <NavLink to='../about'>About</NavLink>
                    </li>
                    <li className='nav-item ml-4'>
                        <NavLink to='../products'>Products</NavLink>
                    </li>
                    <li className='nav-item ml-4'>
                        <NavLink to='../shop'>Shop</NavLink>
                    </li>
                    <li className='nav-item ml-4'>
                        <NavLink to='../contact_us'>Contacts</NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-list d-md-none">
                <MdFilterList />
            </div>
            <NavHoveredBtn />
        </NavWrapper >

    );
}



export default Navbar;