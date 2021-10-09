import "./App.css";
import SwarmPlot from "./components/Swarm";
import Particles from "./components/Particles";
import DataTable from "./components/DataTable";
import Pie from "./components/Pie";
import StarTerraLogo from "./components/StarTerraLogo";
import InfoBox from "./components/InfoBox";

function App() {
  return (
    <div className="App">
      <Particles />
      <header className="App-header">
        <StarTerraLogo/>
      </header>
      <main>
        <div className="header">
          <div className="pie-container" style={{ flex: 1 }}>
            <Pie />
          </div>
          <div style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', zIndex: 1000}}>
            <InfoBox/>
          </div>
        </div>
        <div className="swarm-container">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: 52,
              paddingBottom: 85,
              justifyContent: "space-around",
            }}
          >
            <div style={{ padding: 16, textAlign: 'center'}}>
              <h4>Degens</h4>
              <img
                width="320px"
                src="https://app.starterra.io/static/media/degens-banner.4bf98705.png"
              />
            </div>
            <div style={{ padding: 16, textAlign: 'center'}}>
            <h4>Lunatics</h4>
            <img
              width="320px"
              src="https://app.starterra.io/static/media/lunatics-banner.d4b8ebc9.png"
              />
            </div>
            <div style={{ padding: 16, textAlign: 'center'}}>
              <h4>Interstellars</h4>
              <img
                width="320px"
                src="https://app.starterra.io/static/media/interstellars-banner.3c689592.png"
              />
            </div>
          </div>
          <SwarmPlot />
        </div>
        <div className="table-wrapper">
          <DataTable />
        </div>
      </main>
    </div>
  );
}

export default App;
