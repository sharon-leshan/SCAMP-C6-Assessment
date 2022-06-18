import { useState, useEffect } from 'react';

export const useWindowDimensions = () => {
	const [dimension, setDimension] = useState({
		height: 0,
		width: 0,
	});

	const handleResize = () => {
		setDimension({
			height: window.innerHeight,
			width: window.innerWidth,
		});
	};
	useEffect(() => {
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	return dimension;
};
