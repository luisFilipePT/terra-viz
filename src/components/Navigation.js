import React from 'react';
import { FlexboxGrid, List, Panel } from 'rsuite';
import { Icon } from '@rsuite/icons';
import { FaHeart, FaUsers, FaStar, FaSkull, FaFunnelDollar } from 'react-icons/fa';
import { HashLink as Link } from 'react-router-hash-link';

const data = [
	{
		title: 'Total contributors',
		subtitle: 'The ship is full',
		description: 'Find total contributors and contributors by faction',
		target: '/#section2',
		icon: <Icon as={FaUsers} size="1em" />,
	},
	{
		title: 'Top contributors',
		subtitle: 'Closer to the moon',
		description: 'Top 100 contributors by faction',
		target: '/#section3',
		icon: <Icon as={FaStar} size="1em" />,
	},
	{
		title: 'Factions',
		subtitle: 'It is a though battle',
		description: 'LP and SS by factions',
		target: '/#section4',
		icon: <Icon as={FaSkull} size="1em" />,
	},
	{
		title: 'All data',
		subtitle: 'If you join you can find yourself here',
		description: 'All stakers and their data',
		target: '/#section5',
		icon: <Icon as={FaFunnelDollar} size="1em" />,
	},
	{
		title: 'Creators',
		subtitle: 'Hey, if you like it reach out and buy us a beer',
		description: 'Who in mars did this?',
		target: '/#section6',
		icon: <Icon as={FaHeart} size="1em" />,
	},
];

const styleCenter = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '60px',
};

const slimText = {
	fontSize: '0.7em',
	color: '#ffee00',
	fontWeight: 'lighter',
	paddingBottom: 5,
};

const titleStyle = {
	paddingBottom: 5,
	whiteSpace: 'nowrap',
	fontWeight: 500,
};

const dataStyle = {
	fontSize: '1.2em',
	fontWeight: 500,
};

const Navigation = () => {
	return (
		<div style={{ position: 'relative', zIndex: 2000 }}>
			<Panel>
				<List hover>
					{data.map((item, index) => (
						<List.Item key={item['title']} index={index + 1}>
							<FlexboxGrid>
								{/*icon*/}
								<FlexboxGrid.Item colspan={2} style={styleCenter}>
									{React.cloneElement(item['icon'], {
										style: {
											color: 'darkgrey',
											fontSize: '1.5em',
										},
									})}
								</FlexboxGrid.Item>
								{/*base info*/}
								<FlexboxGrid.Item
									colspan={6}
									style={{
										...styleCenter,
										flexDirection: 'column',
										alignItems: 'flex-start',
										overflow: 'hidden',
									}}
								>
									<div style={titleStyle}>{item['title']}</div>
									<div style={slimText}>
										<div>{' ' + item['subtitle']}</div>
									</div>
								</FlexboxGrid.Item>
								{/*description data*/}
								<FlexboxGrid.Item colspan={9} style={styleCenter}>
									<div style={{ textAlign: 'center' }}>
										<div style={dataStyle}>{item['description']}</div>
									</div>
								</FlexboxGrid.Item>
								{/*uv data*/}
								<FlexboxGrid.Item
									colspan={7}
									style={{
										...styleCenter,
									}}
								>
									<Link smooth to={item['target']}>
										View
									</Link>
								</FlexboxGrid.Item>
							</FlexboxGrid>
						</List.Item>
					))}
				</List>
			</Panel>
		</div>
	);
};

export default Navigation;
