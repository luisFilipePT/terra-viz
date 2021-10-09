import { Col, FlexboxGrid } from "rsuite";
import SwarmPlot from "../components/Swarm";

const Section3 = () => (
  <div id="section3" className="show-grid">
    <FlexboxGrid align="middle">
      <FlexboxGrid.Item as={Col} colspan={24} md={6} smHidden>
        <div style={{ paddingTop: 30 }}>
          <div style={{ padding: 16, textAlign: "center", height: 250 }}>
            <h4>Degens</h4>
            <img
              alt="degens"
              width="320px"
              src="https://app.starterra.io/static/media/degens-banner.4bf98705.png"
            />
          </div>
          <div style={{ padding: 16, textAlign: "center", height: 250 }}>
            <h4>Lunatics</h4>
            <img
              alt="lunatics"
              width="320px"
              src="https://app.starterra.io/static/media/lunatics-banner.d4b8ebc9.png"
            />
          </div>
          <div style={{ padding: 16, textAlign: "center", height: 250 }}>
            <h4>Interstellars</h4>
            <img
              alt="interstellars"
              width="320px"
              src="https://app.starterra.io/static/media/interstellars-banner.3c689592.png"
            />
          </div>
        </div>
      </FlexboxGrid.Item>
      <FlexboxGrid.Item as={Col} colspan={24} md={18}>
        <div className="swarm-container">
          <SwarmPlot />
        </div>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  </div>
);

export default Section3;
