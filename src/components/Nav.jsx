import { IconButton, Menu } from '@material-ui/core';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useWindowDimensions } from '../hooks/useWindowDimensions';

const Nav = () => {
	const onClickToggle = e => {
		setShowMenu(!showMenu);
	};
	const [showMenu, setShowMenu] = useState(false);
	const { width } = useWindowDimensions();
	const getMobileMenu = () => {
		if (width <= 768) {
			return (
				<IconButton>
					<Menu onClick={onClickToggle} className="nav-mobile-menu" />
				</IconButton>
			);
		}
		return null;
	};
	return (
		<React.Fragment>
			{getMobileMenu()}
			<nav className="nav">
				<ul>
					<li>
						<NavLink to="/" exact={true} activeClassName="active">
							sneakers
						</NavLink>
					</li>
					<li>
						<NavLink to="/collections" activeClassName="active">
							collections
						</NavLink>
					</li>
					<li>
						<NavLink to="/men" activeClassName="active">
							men
						</NavLink>
					</li>
					<li>
						<NavLink to="/women" activeClassName="active">
							women
						</NavLink>
					</li>
					<li>
						<NavLink to="/about" activeClassName="active">
							about
						</NavLink>
					</li>
					<li>
						<NavLink to="/contact" activeClassName="active">
							contact
						</NavLink>
					</li>
				</ul>
			</nav>
		</React.Fragment>
	);
};

export default Nav;
