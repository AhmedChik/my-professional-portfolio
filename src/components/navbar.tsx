import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../hooks/useTheme';


export const Navbar = () => {
	const [isVisible, setIsVisible] = useState(false);
	const { isLightMode, toggleTheme } = useTheme();

	useEffect(() => {
		const handleScroll = () => {
			// Show navbar when scrolled down more than 300px
			const scrolled = window.scrollY > 300;
			setIsVisible(scrolled);
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Check on mount
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav className={`navbar ${isVisible ? 'navbar-visible' : 'navbar-hidden'}`}>
			<div className='navbar-content'>
				<a href='/#' className='navbar-logo'>AC</a>
				<ul className='navbar-menu'>
					<li>
						<a href='/#about-me'>About</a>
					</li>
					<li>
						<a href='/#projects'>Projects</a>
					</li>
					<li>
						<a href='/#experiences'>Experiences</a>
					</li>
					<li>
						<a href='/#formations'>Formations</a>
					</li>
					<li>
						<a href='/#tech-stack'>Tech Stack</a>
					</li>
					<li>
						<button
							className='theme-toggle-btn'
							onClick={toggleTheme}
							aria-label={isLightMode ? 'Switch to dark mode' : 'Switch to light mode'}
							title={isLightMode ? 'Dark Mode' : 'Light Mode'}
						>
							{isLightMode ? <FaMoon /> : <FaSun />}
						</button>
					</li>
					<li>
						<button

							onClick={() => {
								window.location.href = '/#contact';
							}}
						>
							Contact me
						</button>
					</li>
				</ul>
			</div>
		</nav>
	);
};
