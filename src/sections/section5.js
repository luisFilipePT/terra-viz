import { Col, FlexboxGrid } from 'rsuite';

import DataTable from '../components/DataTable';

const Section5 = ({ data }) => {
	return (
		<div className="table-wrapper">
			<div id="section5" className="show-grid">
				<h2 className="tittle">Table representation of CSV data</h2>
				<FlexboxGrid justify="space-around" align="middle">
					<FlexboxGrid.Item as={Col} colspan={24} md={20}>
						<DataTable data={data} />
					</FlexboxGrid.Item>
				</FlexboxGrid>
			</div>
		</div>
	);
};

export default Section5;
