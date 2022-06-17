import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Comingsoon from '../components/Comingsoon';
import Sneakers from '../components/Sneakers';

const routes = () => {
	return (
		<Switch>
			<Route path="/" exact={true} component={Sneakers} />
			<Route path="/collections" component={Comingsoon} />
			<Route path="/men" component={Comingsoon} />
			<Route path="/women" component={Comingsoon} />
			<Route path="/about" component={Comingsoon} />
			<Route path="/contact" component={Comingsoon} />
		</Switch>
	);
};

export default routes;
