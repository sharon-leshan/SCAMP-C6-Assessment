import './App.css';
import Nav from './components/nav';
import routes from './routes/routes';
function App() {
	return (
		<>
			<header>
				<Nav />
			</header>
			{routes()}
		</>
	);
}

export default App;
