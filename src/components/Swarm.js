import { ResponsiveSwarmPlot } from '@nivo/swarmplot';
import { isMobile } from 'react-device-detect';

import { formatNumber } from '../hooks/utils';

const SwarmPlot = ({ data }) => {
	return (
		<ResponsiveSwarmPlot
			theme={{
				background: 'transparent',
				textColor: 'rgb(233, 235, 240)',
				fontSize: 14,
				axis: {
					domain: {
						line: {
							stroke: '#777777',
							strokeWidth: 0,
						},
					},
					ticks: {
						line: {
							stroke: '#777777',
							strokeWidth: 0,
						},
					},
				},
				grid: {
					line: {
						stroke: '#ffee00',
						strokeWidth: 1,
					},
				},
			}}
			spacing={6}
			layout={isMobile ? 'vertical' : 'horizontal'}
			enableGridX={false}
			enableGridY={false}
			gap={18}
			data={data}
			groups={['lunatics', 'interstellars', 'degens']}
			groupBy="faction"
			identity="staker"
			value="ste"
			valueScale={{ type: 'linear', min: 4000, max: 360000 }}
			size={{ key: 'ste', values: [4000, 300000], sizes: [5, 60] }}
			simulationIterations={120}
			colors={['#c74dad', '#00e5ff', '#fc8600']}
			borderColor={{ from: 'color', modifiers: [['darker', 0.6]] }}
			margin={{ top: 80, right: 100, bottom: 80, left: 100 }}
			axisTop={{
				orient: 'top',
				tickSize: 10,
				tickPadding: isMobile ? 15 : 5,
				tickRotation: isMobile ? 45 : 0,
				legendPosition: 'middle',
				legendOffset: isMobile ? 0 : -46,
				format: value => (isMobile ? value : formatNumber(value, 0, true)),
			}}
			axisRight={null}
			axisLeft={null}
			axisBottom={{
				orient: 'bottom',
				tickSize: 10,
				tickPadding: isMobile ? 35 : 5,
				tickRotation: isMobile ? 0 : 0,
				legendPosition: 'middle',
				legendOffset: isMobile ? -140 : 46,
				format: value => (isMobile ? value : formatNumber(value, 0, true)),
			}}
			tooltip={({ data: { ste } }) => (
				<div
					style={{
						padding: 8,
						background: '#333333',
					}}
				>
					<div>
						<span>{`${formatNumber(ste, 2)} STE`}</span>
						<br />
					</div>
				</div>
			)}
		/>
	);
};

export default SwarmPlot;
