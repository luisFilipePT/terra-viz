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
            {/*<div style={{ display: 'flex', flexDirection: 'column', paddingTop: 60, justifyContent: 'space-around'}}>*/}
            {/*  <img width="320px" src="https://starterra.io/image/Tier__03.png"/>*/}
            {/*  <img width="320px" src="https://starterra.io/image/Tier__02.png"/>*/}
            {/*  <img width="320px" src="https://starterra.io/image/Tier__04.png"/>*/}
            {/*</div>*/}
            <SwarmPlot/>
          </div>
      </main>
    </div>
  );
}

export default App;
