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
        <Footer>
          <div className="footer">
            <span className="footer-text">
              Made with ❤️ for StarTerra by <a href="https://twitter.com/_luisFilipePT">@_luisFilipePT</a> & <a
              href="https://twitter.com/JoaoJesus_94">@JoaoJesus_94</a>
            </span>
          </div>
        </Footer>
      </Container>
    </>
  );
}

export default App;
