import { Col, FlexboxGrid } from 'rsuite';

import InfoBox from '../components/InfoBox';
import Pie from '../components/Pie';
import { formatNumber } from '../hooks/utils';

const Section4 = ({ data, statistics: { lp, stt, ste } }) => {
	if (!lp || !stt || !ste) return null;

	return (
		<div id="section4" className="show-grid">
			<h2 className="tittle">Distribution per faction</h2>
			<FlexboxGrid justify="space-around" align="middle">
				<FlexboxGrid.Item as={Col} colspan={24} md={7}>
					<h4 className="tittle">LP</h4>
					<div className="pie-container">
						<Pie data={data.lp} mode="lp" />
					</div>
					<InfoBox title="LP Staking">
						<p style={{ fontSize: '10px', color: '#ffee00' }}>Statistics per staker</p>
						<br />
						<ul>
							<li>{`Mean: ${formatNumber(lp.mean, 2)}`}</li>
							<li>{`Median: ${formatNumber(lp.median, 2)}`}</li>
							<li>{`Skewness: ${formatNumber(lp.skewness, 2)}`}</li>
							<li>{`Variance: ${formatNumber(lp.variance, 2)}`}</li>
							<li>{`Standard Deviation: ${formatNumber(lp.standardDeviation, 2)}`}</li>
						</ul>
					</InfoBox>
				</FlexboxGrid.Item>
				<FlexboxGrid.Item as={Col} colspan={24} md={7}>
					<h4 className="tittle">STT</h4>
					<div className="pie-container">
						<Pie data={data.stt} mode="stt" />
					</div>
					<InfoBox title="Single Staking">
						<p style={{ fontSize: '10px', color: '#ffee00' }}>Statistics per staker</p>
						<br />
						<ul>
							<li>{`Mean: ${formatNumber(stt.mean, 2)}`}</li>
							<li>{`Median: ${formatNumber(stt.median, 2)}`}</li>
							<li>{`Skewness: ${formatNumber(stt.skewness, 2)}`}</li>
							<li>{`Variance: ${formatNumber(stt.variance, 2)}`}</li>
							<li>{`Standard Deviation: ${formatNumber(stt.standardDeviation, 2)}`}</li>
						</ul>
					</InfoBox>
				</FlexboxGrid.Item>
				<FlexboxGrid.Item as={Col} colspan={24} md={7}>
					<h4 className="tittle">STE</h4>
					<div className="pie-container">
						<Pie data={data.ste} mode="ste" />
					</div>
					<InfoBox title="StarTerra Energy">
						<p style={{ fontSize: '10px', color: '#ffee00' }}>Statistics per staker</p>
						<br />
						<ul>
							<li>{`Mean: ${formatNumber(ste.mean, 2)}`}</li>
							<li>{`Median: ${formatNumber(ste.median, 2)}`}</li>
							<li>{`Skewness: ${formatNumber(ste.skewness, 2)}`}</li>
							<li>{`Variance: ${formatNumber(ste.variance, 2)}`}</li>
							<li>{`Standard Deviation: ${formatNumber(ste.standardDeviation, 2)}`}</li>
						</ul>
					</InfoBox>
				</FlexboxGrid.Item>
			</FlexboxGrid>
		</div>
	);
};

export default Section4;
