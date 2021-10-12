import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ProductConsumer, ProductContext } from '../../ProductContext';
import { UserConsumer, UserContext } from '../../UserContext';
import { BsFillPersonFill } from 'react-icons/bs';
import { BiShoppingBag } from 'react-icons/bi';
import { NavHoverSingle } from './NavHoverSingle';
import { Scrollbars } from 'react-custom-scrollbars';
import { NotFound } from '../NotFound';
import { useHistory } from 'react-router-dom';
import ButtonStyled3 from '../layouts/ButtonStyled3';
import PropTypes from 'prop-types';


export function NavHoveredBtn() {
	console.log('these two buttons rerendering')
	const [hoverCart, setHoverCart] = useState(false);
	const [hoverUser, setUserState] = useState(false);
	const hoverCartRef = useRef();
	const history = useHistory();



	const handleMouseEnter = (element) => {
		switch (element.target.getAttribute("name")) {
			case "cart":
				hoverUser === true && setUserState(false);
				setHoverCart(true);
				break;
			case "person":
				hoverCart === true && setHoverCart(false);
				setUserState(true);
				break;
		}
	}
	const collapseNavHover = useCallback(
		(e) => {
			if (hoverUser === true) {
				return setUserState(false);
			} else if (hoverCart === true) {
				if (hoverCartRef.current && hoverCartRef.current.contains(e.target)) {
					return;
				} else {
					setHoverCart(false)
				}
			}
		},
		[hoverUser, hoverCart],
	)

	const testCallback = (e) => {
		console.log(e.taret)
	}

	useEffect(() => {
		window.addEventListener('click', collapseNavHover

		)
		return () => {
			window.removeEventListener('click', (e) => { console.log(e.target + ": " + hoverUser) });
		}

	}, [hoverUser, setUserState])

	return (
		<ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
			<li className="nav-item">
				<UserConsumer>
					{
						value => {
							const { loggedIn, handleLogout } = value;
							return (
								<>
									<NavLink to={loggedIn ? '../shop' : '../user/login'} >
										<span className={`ml-2 mr-0 ${hoverUser === false ? null : ' tooltip-tip'}`}>
											<BsFillPersonFill name="person" onMouseEnter={handleMouseEnter} className='  mr-2' onClick={
												() => {
													loggedIn ? (handleLogout()) : (history.push("/user/login"))
												}
											}
											>{loggedIn ? 'Logout' : 'Login'}</BsFillPersonFill>
										</span>
									</NavLink>
									{
										<div className={`hover-cart-wrapper ${hoverUser === false ? 'd-none' : 'd-block adjust-right-user'}`}>
											<ul className="list-group">
												<li className="list-group-item bg-transparent border-0">
													<NavLink to={loggedIn ? '../shop' : '../user/login'}>
														<h6 className="m-0">Login</h6>
													</NavLink>
												</li>
											</ul>
										</div>
									}
								</>
							)
						}
					}
				</UserConsumer>
			</li>
			<li className="nav-item">
				<NavLink to='../cart'>
					<span className={`ml-2 mr-0 ${hoverCart === false ? null : ' tooltip-tip'}`}>
						<BiShoppingBag name="cart" className='  mr-2' onMouseEnter={handleMouseEnter} />

						<ProductConsumer>
							{value => {
								let cartLength = value.cart.length > 0 ? value.cart.length : 0;
								let count = value.cart.map(item => item.count);
								return (
									<div className="cart-items">
										{
											count.reduce((total, num) => { return total += num || 0 }, 0)
										}
									</div>
								)
							}}
						</ProductConsumer>
					</span>
				</NavLink>
				{hoverCart === false ? null : (
					<div className={`hover-cart-wrapper ${hoverCart === false ? 'd-none' : 'd-block adjust-right-cart'}`} ref={hoverCartRef}>
						<div className="hover-cart">
							<ProductConsumer>
								{value => {
									return value.cart.length > 0 ? (
										<React.Fragment>
											<div style={{ height: "310px" }}>
												<Scrollbars autoHide style={{ width: "100%", height: "100%" }}>
													<ul>
														{value.cart.map(
															product => <NavHoverSingle key={product.id} removeItem={value.removeItem} extractProps={product} onChange={value.handleCount} />
														)}
													</ul>
												</Scrollbars>
											</div>
											<NavLink to='../cart' style={{ width: "100%" }} >
												<ButtonStyled3 className="shopping-cart-btn text-center">
													<h4>Checkout</h4>
												</ButtonStyled3>
											</NavLink>
										</React.Fragment>
									) :
										(<div className="overflow-hidden d-flex flex-column justify-content-center"><NotFound message="Nothing In The Cart" />
											<NavLink to='../../Shop'>
												<ButtonStyled3 className="shopping-cart-btn">
													<h5>Go Shopping</h5>
												</ButtonStyled3>
											</NavLink>
										</div>);
								}}
							</ProductConsumer>
						</div>
					</div>
				)

				}
			</li>

		</ul>
	)
}
NavHoveredBtn.propTypes = {
	hoverCart: PropTypes.bool,
	hoverUser: PropTypes.bool
}