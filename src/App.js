import './App.css';
import SwarmPlot from './components/Swarm';
import Particles from './components/Particles';
import ScatterPlot from './components/ScatterPlot';

const App = () => {
	return (
		<div className="App">
			<Particles />
			<header className="App-header">StarTerra Viz</header>
			<main>
				<div style={{ height: '100vh' }}>
					<ScatterPlot />
				</div>
			</main>
		</div>
	);
};

export default App;
