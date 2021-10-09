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
              paddingTop: 62,
              paddingBottom: 65,
              justifyContent: "space-around",
            }}
          >
            <img
              width="320px"
              src="https://app.starterra.io/static/media/degens-banner.4bf98705.png"
            />
            <img
              width="320px"
              src="https://app.starterra.io/static/media/lunatics-banner.d4b8ebc9.png"
            />
            <img
              width="320px"
              src="https://app.starterra.io/static/media/interstellars-banner.3c689592.png"
            />
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
