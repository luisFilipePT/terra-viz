import { Container, Content, Footer, Header, Navbar } from 'rsuite';
import GithubCorner from 'react-github-corner';
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
