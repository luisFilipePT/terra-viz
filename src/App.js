import { Container, Content, Footer, Header, Navbar } from 'rsuite';
import { Helmet } from 'react-helmet';

import "./App.css";

import Particles from "./components/Particles";
import DataTable from "./components/DataTable";
import StarTerraLogo from "./components/StarTerraLogo";
import Section2 from "./sections/section2";
import Section3 from "./sections/section3";
import Section4 from "./sections/section4";
import Navigation from './components/Navigation';

function App() {
  return (
    <>
        <Helmet>
          <title>StarTerra - DataViz</title>
          <meta name="description" content="The Best Data Visualization for StarTerra" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@_luisFilipePT " />
          <meta name="twitter:creator" content="@JoaoJesus_94" />
          <meta name="twitter:title" content="StarTerra - DataViz" />
          <meta name="twitter:description" content="The Best Data Visualization for StarTerra" />
          <meta name="twitter:image" content="https://starterra.io/image/terra1.jpg"/>
          <meta property="og:title" content="StarTerra - DataViz" />
          <meta property="og:description" content="The Best Data Visualization for StarTerra" />
          <meta property="og:image" content="https://starterra.io/image/terra1.jpg" />
          <meta property="og:url" content="https://starterra-viz.netlify.app/" />
          <meta property="og:site_name" content="StarTerra - DataViz" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
      </Helmet>
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
          <Navigation/>
          <Section2/>
          <Section3/>
          <Section4/>
          <div id="section5" className="table-wrapper">
            <DataTable />
          </div>
        </Content>
        <Footer>
          <div id="section6" className="footer">
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
