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
          <div className="info-box-wrapper">
            <InfoBox title="StarTerra Energy ➡️">
              <ul>
                <li>Total StarTerra Energy</li>
                <li>StarTerra Energy by faction</li>
                <li>Hover to see each faction? what</li>
              </ul>
            </InfoBox>
          </div>
          <div className="pie-container" style={{ flex: 1 }}>
            <Pie />
          </div>
          <div className="info-box-wrapper">
            <InfoBox title="Top contributors ⬇️">
              <ul>
                <li>Top 100 contributors by faction</li>
                <li>Hover each contributor StarTerra energy</li>
              </ul>
            </InfoBox>
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
