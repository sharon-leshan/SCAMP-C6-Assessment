import { IconButton } from '@material-ui/core';
import { ShoppingCartOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import './description.css';

const Description = ({ title, subtitle, desc, price, discount, prevprice }) => {
	const [count, setCount] = useState(0);
	const onAddClick = () => {
		setCount(count + 1);
	};
	const onSubClick = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};
	return (
		<div className="description">
			<h6 className="title">{title}</h6>
			<h1 className="sub-title">{subtitle}</h1>
			<p className="desc">{desc}</p>
			<div className="price">
				<p>{price}</p>
				<p>{discount}</p>
			</div>
			<p>
				<strike>{prevprice}</strike>
			</p>
			<div className="buttons">
				<div className="counter">
					<button onClick={onSubClick} disabled={count === 0}>
						-
					</button>
					<span>{count}</span> <button onClick={onAddClick}>+</button>
				</div>
				<div className="add-to-cart">
					<IconButton>
						<ShoppingCartOutlined />
					</IconButton>
					<span>Add to cart</span>
				</div>
			</div>
		</div>
	);
};

export default Description;
