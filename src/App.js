import './App.css';
import SwarmPlot from "./components/Swarm";
import Particles from "./components/Particles";

function App() {
  return (
    <div className="App">
        <Particles/>
      <header className="App-header">
        StarTerra Viz
      </header>
      <main>
        <div style={{ height: '100vh' }}>
          <SwarmPlot/>
        </div>
      </main>
    </div>
  );
}

export default App;
