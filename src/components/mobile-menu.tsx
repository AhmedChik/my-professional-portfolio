import { useState } from 'react';
import { FaBars, FaGithub, FaLinkedinIn, FaTimes } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';
import '../styles/mobile-menu.css';

interface MenuItem {
	label: string;
	href: string;
}

const menuItems: MenuItem[] = [
	{ label: 'About Me', href: '/#about-me' },
	{ label: 'Projects', href: '/#projects' },
	{ label: 'Experiences', href: '/#experiences' },
	{ label: 'Formations', href: '/#formations' },
	{ label: 'Tech Stack', href: '/#tech-stack' },
	{ label: 'Contact', href: '/#contact' },
];

export const MobileMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleMenuClick = (href: string) => {
		setIsOpen(false);
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<>
			<button
				className='mobile-menu-toggle'
				onClick={() => setIsOpen(!isOpen)}
				aria-label='Toggle menu'
				aria-expanded={isOpen}
			>
				{isOpen ? <FaTimes /> : <FaBars />}
			</button>

			{isOpen && (
				<div className='mobile-menu-overlay' onClick={() => setIsOpen(false)}>
					<nav
						className='mobile-menu-container'
						onClick={(e) => e.stopPropagation()}
					>
						<div className='mobile-menu-header'>
							<h3>Navigation</h3>
							<button
								className='mobile-menu-close'
								onClick={() => setIsOpen(false)}
								aria-label='Close menu'
							>
								<FaTimes />
							</button>
						</div>

						<ul className='mobile-menu-list'>
							{menuItems.map((item) => (
								<li key={item.label}>
									<a
										href={item.href}
										onClick={(e) => {
											e.preventDefault();
											handleMenuClick(item.href);
										}}
									>
										{item.label}
									</a>
								</li>
							))}
						</ul>

						<div className='mobile-menu-divider'></div>

						<div className='mobile-menu-socials'>
							<h3>Connect</h3>
							<div className='mobile-socials-grid'>
								<a
									href='https://github.com/AhmedChik'
									target='_blank'
									rel='noopener noreferrer'
									className='mobile-social-link github'
									aria-label='GitHub'
								>
									<FaGithub />
									<span>GitHub</span>
								</a>
								<a
									href='https://www.linkedin.com/in/ahmed-chikhaoui-3351292ab'
									target='_blank'
									rel='noopener noreferrer'
									className='mobile-social-link linkedin'
									aria-label='LinkedIn'
								>
									<FaLinkedinIn />
									<span>LinkedIn</span>
								</a>
								<a
									href='mailto:ahmedhps32021@gmail.com'
									className='mobile-social-link email'
									aria-label='Email'
								>
									<IoMailOutline />
									<span>Email</span>
								</a>
								<button
									className='mobile-social-link resume'
									onClick={() => {
										window.open('/Ahmed_Chihaoui_Resume.pdf', '_blank');
										setIsOpen(false);
									}}
									aria-label='Download Resume'
								>
									<span>📄</span>
									<span>Resume</span>
								</button>
							</div>
						</div>
					</nav>
				</div>
			)}
		</>
	);
};
