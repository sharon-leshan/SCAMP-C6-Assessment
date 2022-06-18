import React from 'react';
import Carousal from './Carousal';
import Description from './Description';
import './sneakers.css';

const Sneakers = () => {
	return (
		<div className="sneakers">
			<aside className="left">
				<Carousal />
			</aside>
			<aside className="right">
				<Description />
			</aside>
		</div>
	);
};

export default Sneakers;
