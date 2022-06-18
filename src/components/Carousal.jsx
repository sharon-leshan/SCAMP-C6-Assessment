import React from 'react';
import './carousal.css';
import CarousalItem from './CarousalItem';
import { shoes } from '../data/shoes';

const Carousal = ({ displayShoe }) => {
	return (
		<div className="carousal">
			<div className="container">
				<div className="view">
					<img src={displayShoe} alt="shoe" />
				</div>
				<div className="carousal-items">
					{shoes.map(({ id, image }) => (
						<CarousalItem image={image} key={id} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Carousal;
