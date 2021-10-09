import "./App.css";
import Particles from "./components/Particles";
import DataTable from "./components/DataTable";
import StarTerraLogo from "./components/StarTerraLogo";
import Section2 from "./sections/section2";
import Section3 from "./sections/section3";
import Section4 from "./sections/section4";
import {Container, Content, FlexboxGrid, Footer, Header, Navbar} from "rsuite";

function App() {
  return (
    <>
      <Particles />
      <Container>
        <Header>
          <Navbar>
            <Navbar.Header>
              <div className="App-header">
                <StarTerraLogo />
              </div>
            </Navbar.Header>
          </Navbar>
        </Header>
        <Content>
          <Section2/>
          <Section3/>
          <Section4/>
          <div className="table-wrapper">
            <DataTable />
          </div>
        </Content>
        <Footer>Footer</Footer>
      </Container>
    </>
  );
}

export default App;
