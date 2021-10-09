import "./App.css";
import Particles from "./components/Particles";
import DataTable from "./components/DataTable";
import StarTerraLogo from "./components/StarTerraLogo";
import Section2 from "./sections/section2";
import Section3 from "./sections/section3";
import Section4 from "./sections/section4";

function App() {
  return (
    <div className="App">
      <Particles />
      <header className="App-header">
        <StarTerraLogo />
      </header>
      <main>
        <Section2/>
        <Section3/>
        <Section4/>
        <div className="table-wrapper">
          <DataTable />
        </div>
      </main>
    </div>
  );
}

export default App;
