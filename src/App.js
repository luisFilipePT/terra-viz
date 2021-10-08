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
          <div className="swarm-container">
            <div style={{ display: 'flex', flexDirection: 'column', paddingTop: 60, justifyContent: 'space-around'}}>
              <img width="320px" src="https://app.starterra.io/static/media/degens-banner.4bf98705.png"/>
              <img width="320px" src="https://app.starterra.io/static/media/interstellars-banner.3c689592.png"/>
              <img width="320px" src="https://app.starterra.io/static/media/lunatics-banner.d4b8ebc9.png"/>
            </div>
            <SwarmPlot/>
          </div>
      </main>
    </div>
  );
}

export default App;
