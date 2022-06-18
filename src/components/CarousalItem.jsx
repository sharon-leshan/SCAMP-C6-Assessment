import React, { useState } from 'react';

const CarousalItem = ({ image }) => {
	const [selected, setSelected] = useState(image);

	const handleSelect = e => {
		e.preventDefault();
		setSelected(e.target.src);
	};
	return (
		<div>
			<img
				src={image}
				alt={image}
				onClick={handleSelect}
				className={`carousal-item ${selected ? 'selected' : ''}`}
			/>
		</div>
	);
};

export default CarousalItem;
