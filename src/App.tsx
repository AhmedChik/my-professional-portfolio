import { MouseTrail } from './components/mouse-trail';
import { Navbar } from './components/navbar';
import { ScrollBar } from './components/scroll-bar';
import { useTheme } from './hooks/useTheme';
import { AboutMe } from './sections/about-me.section';
import { Contact } from './sections/contact.section';
import { Experiences } from './sections/experiences.section';
import { Formations } from './sections/formations.section';
import { InfoSection } from './sections/info.section';
import { Projects } from './sections/projects.section';
import { TechStack } from './sections/tech-stack.section';
import './styles/about-me.css';
import './styles/contact.css';
import './styles/experiences.css';
import './styles/floating-button.css';
import './styles/formations.css';
import './styles/glow-box.css';
import './styles/info-section.css';
import './styles/mouse-trail.css';
import './styles/navbar.css';
import './styles/projects.css';
import './styles/tech-stack.css';
import './styles/text-hover.css';
import './styles/title.css';

function App() {
	useTheme(); // Initialize theme hook

	return (
		<>
			<Navbar />
			<ScrollBar />
			<MouseTrail />
			<InfoSection />
			<AboutMe />
			<Experiences />
			<Projects />

			<TechStack />
			<Formations />
			<Contact />
		</>
	);
}

export default App;
