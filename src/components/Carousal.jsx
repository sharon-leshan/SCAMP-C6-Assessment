import React from 'react';
import shoe from '../assets/images/shoe.jpg';
import './carousal.css';

const Carousal = () => {
	return (
		<div className="carousal">
			<img src={shoe} alt="Air Max" id="view" />
			<div className="preview">
				<div className="item">
					<img src={shoe} alt="Air Max" id="preview" />
					<input type="radio" name="selector" />
				</div>
				<div className="item">
					<img src={shoe} alt="Air Max" id="preview" />
					<input type="radio" name="selector" />
				</div>
				<div className="item">
					<img src={shoe} alt="Air Max" id="preview" />
					<input type="radio" name="selector" />
				</div>
				<div className="item">
					<img src={shoe} alt="Air Max" id="preview" />
					<input type="radio" name="selector" />
				</div>
			</div>
		</div>
	);
};

export default Carousal;
