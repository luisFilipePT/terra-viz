import { Col, FlexboxGrid } from 'rsuite';
import InfoBox from '../components/InfoBox';
import Pie from '../components/Pie';

const Section2 = () => (
	<div className="show-grid" id="section2">
		<FlexboxGrid justify="space-around" align="middle">
			<FlexboxGrid.Item as={Col} colspan={24} md={5}>
				<InfoBox title="StarTerra Energy ➡️">
					<ul>
						<li>Total StarTerra Energy</li>
						<li>StarTerra Energy by faction</li>
						<li>Hover to see each faction? what</li>
					</ul>
				</InfoBox>
			</FlexboxGrid.Item>
			<FlexboxGrid.Item as={Col} colspan={24} md={8}>
				<div className="pie-container">
					<Pie mode="stakers" />
				</div>
			</FlexboxGrid.Item>
			<FlexboxGrid.Item as={Col} colspan={24} md={5}>
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

export default Section2;
