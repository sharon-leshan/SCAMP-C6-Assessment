import React from 'react';
import { NavLink } from 'react-router-dom';

const nav = () => {
	return (
		<nav>
			<ul>
				<li>
					<NavLink to="/" activeClassName="active">
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
	);
};

export default nav;
