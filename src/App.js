import './App.css';
import Nav from './components/Nav';
import Profile from './components/Profile';
import routes from './routes/routes';
function App() {
	return (
		<>
			<header>
				<Nav />
				<Profile/>
			</header>
			{routes()}
		</>
	);
}

export default App;
