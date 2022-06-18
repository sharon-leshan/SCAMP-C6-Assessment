import React from 'react';
import shoe from '../assets/images/shoe.jpeg';
import shoe2 from '../assets/images/shoe2.jpeg'
import shoe3 from '../assets/images/shoe3.jpeg'
import shoe4 from '../assets/images/shoe4.jpeg'
import shoe5 from '../assets/images/shoe5.jpeg'

import './carousal.css';

const Carousal = () => {
	return (
		<div className="carousal">
			<img src={shoe} alt="Air Max" id="view" />
			<div className="preview">
				<div className="item">
					<img src={shoe2} alt="Authentic Sneakers" id="preview" />
					<input type="radio" name="selector" />
				</div>
				<div className="item">
					<img src={shoe3} alt="High-Top Sneakers" id="preview" />
					<input type="radio" name="selector" />
				</div>
				<div className="item">
					<img src={shoe4} alt="Plimsoll Sneakers" id="preview" />
					<input type="radio" name="selector" />
				</div>
				<div className="item">
					<img src={shoe5} alt="Slip-On Sneakers" id="preview" />
					<input type="radio" name="selector" />
				</div>
			</div>
		</div>
	);
};

export default Carousal;
