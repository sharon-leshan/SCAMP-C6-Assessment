import React, { useState } from 'react';
import Carousal from './Carousal';
import Description from './Description';
import './sneakers.css';
import { shoes } from '../data/shoes';

const Sneakers = () => {
	const [selectedShoe, setSelectedShoe] = useState(shoes[0]);
	const { title, subtitle, desc, price, discount, prevprice, id, image } =
		selectedShoe;
	const handleSelectedShoe = () => {
		setSelectedShoe(shoes[id]);
	};
	return (
		<div className="sneakers">
			<aside className="left">
				<Carousal displayShoe={image} />
			</aside>
			<aside className="right">
				{selectedShoe && (
					<Description
						title={title}
						subtitle={subtitle}
						desc={desc}
						price={price}
						prevprice={prevprice}
						key={id}
						discount={discount}
					/>
				)}
			</aside>
		</div>
	);
};

export default Sneakers;
