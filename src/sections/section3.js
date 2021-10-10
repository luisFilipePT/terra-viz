import { Col, FlexboxGrid } from 'rsuite';
import Zoom from 'react-reveal/Zoom';

import SwarmPlot from '../components/Swarm';

const Section3 = () => (
	<div id="section3" className="show-grid">
		<FlexboxGrid align="middle">
			<FlexboxGrid.Item as={Col} colspan={24} md={6}>
				<div style={{ padding: 16, textAlign: 'center', height: 200, fontFamily: 'orbitron,sans-serif' }}>
					<Zoom>
						<h4>Degens</h4>
						<img
							alt="degens"
							width="320px"
							height="123px"
							src="https://app.starterra.io/static/media/degens-banner.4bf98705.png"
						/>
					</Zoom>
				</div>
				<div style={{ padding: 16, textAlign: 'center', height: 200, fontFamily: 'orbitron,sans-serif' }}>
					<Zoom>
						<h4>Lunatics</h4>
						<img
							alt="lunatics"
							width="320px"
							height="123px"
							src="https://app.starterra.io/static/media/lunatics-banner.d4b8ebc9.png"
						/>
					</Zoom>
				</div>
				<div style={{ padding: 16, textAlign: 'center', height: 220, fontFamily: 'orbitron,sans-serif' }}>
					<Zoom>
						<h4>Interstellars</h4>
						<img
							alt="interstellars"
							width="320px"
							height="123px"
							src="https://app.starterra.io/static/media/interstellars-banner.3c689592.png"
						/>
					</Zoom>
				</div>
			</FlexboxGrid.Item>
			<FlexboxGrid.Item as={Col} colspan={24} md={18} sm={24}>
				<div className="swarm-container">
					<SwarmPlot />
				</div>
			</FlexboxGrid.Item>
		</FlexboxGrid>
	</div>
);

export default Section3;
