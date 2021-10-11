import { Col, FlexboxGrid } from 'rsuite';
import Pie from '../components/Pie';

const Section2 = ({ data }) => (
	<div className="show-grid" id="section2">
		<h2 className="tittle">STT stakers per faction</h2>
		<br />
		<FlexboxGrid justify="space-around" align="middle">
			<FlexboxGrid.Item as={Col} colspan={24} md={8}>
				<div className="pie-container">
					<Pie mode="stakers" data={data} />
				</div>
			</FlexboxGrid.Item>
		</FlexboxGrid>
	</div>
);

export default Section2;
