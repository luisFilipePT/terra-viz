import React from 'react';
import { FlexboxGrid, List, Panel } from 'rsuite';
import { isMobile } from 'react-device-detect';
import { Icon } from '@rsuite/icons';
import { FaHeart, FaUsers, FaStar, FaSkull, FaFunnelDollar } from 'react-icons/fa';
import { HashLink as Link } from 'react-router-hash-link';

const data = [
	{
		title: 'Total contributors',
		subtitle: 'The ship is full',
		description: 'Find total contributors and contributors by faction',
		target: '/#section2',
		icon: <Icon as={FaUsers} size="1em" fill="#ffFFFF" />,
	},
	{
		title: 'Top contributors',
		subtitle: 'Closer to the moon',
		description: 'Top 100 contributors by faction',
		target: '/#section3',
		icon: <Icon as={FaStar} size="1em" fill="#ffee00" />,
	},
	{
		title: 'Factions',
		subtitle: 'It is a though battle',
		description: 'LP and SS by factions',
		target: '/#section4',
		icon: <Icon as={FaSkull} size="1em" fill="#f80" />,
	},
	{
		title: 'All data',
		subtitle: 'If you join you can find yourself here',
		description: 'All stakers and their data',
		target: '/#section5',
		icon: <Icon as={FaFunnelDollar} size="1em" fill="#00ffb1" />,
	},
	{
		title: 'Creators',
		subtitle: 'Hey, if you like it reach out and buy us a beer',
		description: 'Who in mars did this?',
		target: '/#section6',
		icon: <Icon as={FaHeart} size="1em" fill="#c74dad" />,
	},
];

const styleCenter = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '60px',
};

const styleCenterMobile = {
	display: isMobile ? 'none' : 'flex',
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
	fontSize: isMobile ? '1em' : '1.2em',
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
								<FlexboxGrid.Item colspan={isMobile ? 0 : 2} style={styleCenterMobile}>
									{React.cloneElement(item['icon'], {
										style: {
											color: 'darkgrey',
											fontSize: '1.5em',
										},
									})}
								</FlexboxGrid.Item>
								{/*base info*/}
								<FlexboxGrid.Item
									colspan={isMobile ? 0 : 6}
									style={{
										...styleCenterMobile,
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
								<FlexboxGrid.Item colspan={isMobile ? 17 : 9} style={styleCenter}>
									<div style={{ textAlign: 'center' }}>
										<div style={dataStyle}>{item['description']}</div>
									</div>
								</FlexboxGrid.Item>
								{/*uv data*/}
								<FlexboxGrid.Item
									colspan={7}
									style={{
										...styleCenter,
										fontFamily: 'orbitron,sans-serif',
										letterSpacing: 2,
									}}
								>
									<Link smooth to={item['target']}>
										VIEW
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
