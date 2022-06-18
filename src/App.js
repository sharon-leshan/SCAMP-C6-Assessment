import './App.css';
import Nav from './components/Nav';
import Profile from './components/Profile';
import routes from './routes/routes';

function App() {
	return (
		<div className="container">
			<header>
				<Nav />
				<Profile />
			</header>
			{routes()}
		</div>
	);
}

export default App;
