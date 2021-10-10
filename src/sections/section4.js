import { Col, FlexboxGrid } from 'rsuite';

import InfoBox from '../components/InfoBox';
import Pie from '../components/Pie';

const Section4 = ({ data }) => (
	<div id="section4" className="show-grid">
		<FlexboxGrid justify="space-around" align="middle">
			<FlexboxGrid.Item as={Col} colspan={24} md={7}>
				<div className="pie-container">
					<Pie data={data.lp} mode="lp" />
				</div>
				<InfoBox title="LP Staking">
					<ul>
						<li>Top 100 contributors by faction</li>
						<li>Hover each contributor StarTerra energy</li>
					</ul>
				</InfoBox>
			</FlexboxGrid.Item>
			<FlexboxGrid.Item as={Col} colspan={24} md={7}>
				<div className="pie-container">
					<Pie data={data.stt} mode="stt" />
				</div>
				<InfoBox title="Single Staking">
					<ul>
						<li>Top 100 contributors by faction</li>
						<li>Hover each contributor StarTerra energy</li>
					</ul>
				</InfoBox>
			</FlexboxGrid.Item>
			<FlexboxGrid.Item as={Col} colspan={24} md={7}>
				<div className="pie-container">
					<Pie data={data.ste} mode="ste" />
				</div>
				<InfoBox title="StarTerra Energy">
					<ul>
						<li>Top 100 contributors by faction</li>
						<li>Hover each contributor StarTerra energy</li>
					</ul>
				</InfoBox>
			</FlexboxGrid.Item>
		</FlexboxGrid>
	</div>
);

export default Section4;
