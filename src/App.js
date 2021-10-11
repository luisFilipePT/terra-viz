import { Container, Content, Footer, Header, Navbar } from 'rsuite';
import GithubCorner from 'react-github-corner';
import { Helmet } from 'react-helmet';
import Fade from 'react-reveal/Fade';

import Particles from './components/Particles';
import StarTerraLogo from './components/StarTerraLogo';
import Section2 from './sections/section2';
import Section3 from './sections/section3';
import Section4 from './sections/section4';
import Navigation from './components/Navigation';
import { useData } from './hooks/useData';
import Section5 from './sections/section5';

function App() {
	const [top100factionsData, stakersPieData, lp, stt, ste, statistics, tableData] = useData();

	return (
		<>
			<Helmet>
				<title>StarTerra - DataViz</title>
				<meta name="description" content="The Best Data Visualization for StarTerra" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@_luisFilipePT " />
				<meta name="twitter:creator" content="@JoaoJesus_94" />
				<meta name="twitter:title" content="StarTerra - DataViz" />
				<meta name="twitter:description" content="The Best Data Visualization for StarTerra" />
				<meta name="twitter:image" content="https://starterra.io/image/terra1.jpg" />
				<meta property="og:title" content="StarTerra - DataViz" />
				<meta property="og:description" content="The Best Data Visualization for StarTerra" />
				<meta property="og:image" content="https://starterra.io/image/terra1.jpg" />
				<meta property="og:url" content="https://starterra-viz.netlify.app/" />
				<meta property="og:site_name" content="StarTerra - DataViz" />
				<meta property="og:locale" content="en_US" />
				<meta property="og:type" content="website" />
			</Helmet>
			<Particles />
			<Container>
				<GithubCorner
					className="githubCornerWithFocus"
					bannerColor="#1A1D24FF"
					octoColor="#ffee00"
					href="https://github.com/luisFilipePT/terra-viz"
				/>
				<Header>
					<Navbar>
						<Navbar.Brand href="https://starterra.io/">
							<StarTerraLogo />
						</Navbar.Brand>
					</Navbar>
				</Header>
				<Content>
					<Fade>
						<Navigation />
					</Fade>
					<Section2 data={stakersPieData} />
					<Section3 data={top100factionsData} />
					<Section4 data={{ lp, stt, ste }} statistics={statistics} />
					<Section5 data={tableData} />
				</Content>
				<Footer>
					<div id="section6" className="footer">
						<span className="footer-text">
							Made with <span className="footer-heart">❤️</span> for StarTerra by{' '}
							<a href="https://twitter.com/_luisFilipePT">@_luisFilipePT</a> &{' '}
							<a href="https://twitter.com/JoaoJesus_94">@JoaoJesus_94</a>
						</span>
					</div>
				</Footer>
			</Container>
		</>
	);
}

export default App;
