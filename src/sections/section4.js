import { Col, FlexboxGrid } from 'rsuite';
import InfoBox from '../components/InfoBox';
import Pie from '../components/Pie';

const Section4 = () => (
	<div id="section4" className="show-grid">
		<FlexboxGrid justify="space-around" align="middle">
			<FlexboxGrid.Item as={Col} colspan={24} md={6}>
				<div className="pie-container">
					<Pie mode="lp" />
				</div>
				<InfoBox title="Top contributors ⬇️">
					<ul>
						<li>Top 100 contributors by faction</li>
						<li>Hover each contributor StarTerra energy</li>
					</ul>
				</InfoBox>
			</FlexboxGrid.Item>
			<FlexboxGrid.Item as={Col} colspan={24} md={6}>
				<div className="pie-container">
					<Pie mode="stt" />
				</div>
				<InfoBox title="Top contributors ⬇️">
					<ul>
						<li>Top 100 contributors by faction</li>
						<li>Hover each contributor StarTerra energy</li>
					</ul>
				</InfoBox>
			</FlexboxGrid.Item>
			<FlexboxGrid.Item as={Col} colspan={24} md={6}>
				<div className="pie-container">
					<Pie mode="ste" />
				</div>
				<InfoBox title="Top contributors ⬇️">
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
