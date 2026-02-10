import { ReactNode, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaGithub, FaTimes } from 'react-icons/fa';
import { SectionTitle } from '../components/section-title.component';

interface Project {
	id: number;
	title: string;
	description: string;
	shortDescription: string;
	technologies: string[];
	image: string;
	images?: string[];
	github?: string;
	live?: string;
	details: string;
	icon?: ReactNode;
	color?: string;
}

const projects: Project[] = [
	{
		id: 1,
		title: 'QualiGen Platform',
		shortDescription: 'Web & mobile extranet platform compliant with Qualiopi',
		description:
			'A full-stack web and mobile platform designed to manage pedagogical follow-up and digital documents.',
		technologies: ['Next.js', 'Expo', 'NestJS', 'PostgreSQL', 'Prisma', 'Clerk'],
		image: '/project/QualiogenPlateform.png',
		images: ['/project/QualiogenPlateform.png'],
		github: 'https://github.com',
		live: 'https://qualiogen.fr',
		details:
			'QualiGen is a web and mobile extranet platform developed for educational institutions in compliance with the Qualiopi framework. The platform allows learners to access documents, sign files electronically, and interact with trainers. Built with Next.js and Expo on the frontend, NestJS on the backend, PostgreSQL with Prisma for data management, and secure authentication via Clerk. The project was developed using Agile Scrum methodology.',
	},
	{
		id: 2,
		title: 'TradeSense AI',
		shortDescription: 'AI-powered Prop Trading SaaS platform',
		description:
			'An AI-assisted prop trading platform combining real-time market data, trading challenges, and smart risk management.',
		technologies: [
			'React',
			'Python',
			'Flask',
			'PostgreSQL',
			'TradingView Charts',
			'yfinance',
			'BeautifulSoup',
			'REST API',
		],
		image: '/project/TradeIA 1.png',
		images: [
			'/project/TradeIA 1.png',
			'/project/TradeIA 2.png',
			'/project/TradeIA 3.png',
			'/project/TradeIA 4.png',
		],
		github: 'https://github.com/AhmedChik/tanstradIA',
		live: 'https://tradesenseia-plateforme-manda.onrender.com/',
		details:
			'TradeSense AI is an AI-powered prop trading SaaS platform designed to train and evaluate traders through simulated trading challenges using real-time market data. The platform integrates live international and Moroccan market prices, AI-assisted trading signals, and strict risk management rules. Users pay to access trading challenges and become "Funded" by reaching profit targets without violating loss constraints. The system includes real-time dashboards, automated challenge evaluation, mock and PayPal-based payments, community features, and a learning center. Built with a React frontend and a Flask backend using RESTful APIs, PostgreSQL for persistence, and data feeds from Yahoo Finance and web scraping.',
	},
	{
		id: 3,
		title: 'My Portfolio',
		shortDescription: 'Personal portfolio website showcasing projects and skills',
		description: 'A modern portfolio website built with React and TypeScript, featuring project showcase, technical skills, and interactive components.',
		technologies: ['React', 'TypeScript', 'Vite', 'CSS3', 'Responsive Design'],
		image: '/project/Portfolio 1.png',
		images: ['/project/Portfolio 1.png', '/project/Portfolio 2.png', '/project/Portfolio 3.png'],
		github: 'https://github.com/AhmedChik/my-professional-portfolio',
		live: 'https://my-professional-portfolio-eight-sand.vercel.app/',
		details: 'My personal portfolio website showcasing my professional projects, technical skills, and experience as a full-stack developer. Built with React and TypeScript, featuring modern UI components, smooth animations, and a responsive design. The site includes sections for projects, experience, education, and contact information.',
	},

	{
		id: 4,
		title: 'TaskCOMARKE',
		shortDescription: 'Internal task and project management web application',
		description:
			'A collaborative web application designed to manage tasks and internal projects.',
		technologies: ['React', 'Spring Boot', 'MySQL', 'Agile Scrum'],
		image: '/project/ComarkeTask 1.png',
		images: ['/project/ComarkeTask 1.png', '/project/ComarkeTask 2.png', '/project/ComarkeTask 3.png'],
		github: 'https://github.com/AhmedChik/ComarkePFA',
		live: 'https://comarke-task.com',
		details:
			'TaskCOMARKE is an internal management web application developed for COMARKE. It enables teams to manage client tasks and monitor project progress efficiently. The frontend was built using React.js, while the backend relies on Spring Boot with a relational database. The project involved requirements analysis, functional specification writing, and Agile Scrum-based teamwork.',
	},
	{
		id: 5,
		title: 'P2E Learning Platform',
		shortDescription: 'Academic platform for managing student project calls',
		description:
			'A web platform dedicated to managing calls for student projects and evaluations.',
		technologies: ['React', 'Spring Boot', 'REST API', 'UML', 'Merise'],
		image: '/project/P2E 1.jpeg',
		images: ['/project/P2E 1.jpeg'],
		github: 'https://github.com/AhmedChik/P2E_Frontend_PFA',
		live: 'https://p2e-learning-platform.com',
		details:
			'P2E Learning is a full-stack academic platform developed within Mohammed First University. It manages calls for student projects, application submissions, jury evaluations, and communication between stakeholders. The system was designed using UML and Merise modeling, with a React frontend and Spring Boot backend.',
	},
];


export const Projects = () => {
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const handlePrevImage = () => {
		if (selectedProject?.images) {
			setCurrentImageIndex((prev) => (prev === 0 ? selectedProject.images!.length - 1 : prev - 1));
		}
	};

	const handleNextImage = () => {
		if (selectedProject?.images) {
			setCurrentImageIndex((prev) => (prev === selectedProject.images!.length - 1 ? 0 : prev + 1));
		}
	};

	const handleProjectSelect = (project: Project) => {
		setSelectedProject(project);
		setCurrentImageIndex(0);
	};

	return (
		<>
			<section className='projects container' id='projects'>
				<div>
					<SectionTitle title='PROJECTS' subTitle='My' />
				</div>
				<div>
					<div className='projects-grid'>
						{projects.map((project) => (
							<div
								key={project.id}
								className='project-card'
								onClick={() => handleProjectSelect(project)}
							>
								<div className='project-image'>
									<img src={project.image} alt={project.title} />
									<div className='project-overlay'>
										<span className='view-details'>View Details</span>
									</div>
								</div>

								<div className='project-content'>
									<h3>{project.title}</h3>
									<p>{project.shortDescription}</p>

									<div className='project-tech'>
										{project.technologies.slice(0, 3).map((tech, idx) => (
											<span key={idx} className='tech-badge'>
												{tech}
											</span>
										))}
										{project.technologies.length > 3 && (
											<span className='tech-badge'>
												+{project.technologies.length - 3}
											</span>
										)}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{selectedProject && (
				<div className='project-modal-overlay' onClick={() => setSelectedProject(null)}>
					<div className='project-modal' onClick={(e) => e.stopPropagation()}>
						<button
							className='modal-close'
							onClick={() => {
								setSelectedProject(null);
								setCurrentImageIndex(0);
							}}
							aria-label='Close'
						>
							<FaTimes />
						</button>

						{selectedProject.images && selectedProject.images.length > 0 && (
							<div className='project-carousel'>
								<img src={selectedProject.images[currentImageIndex]} alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`} />
								{selectedProject.images.length > 1 && (
									<>
										<button className='carousel-btn carousel-prev' onClick={handlePrevImage} aria-label='Previous image'>
											<FaChevronLeft />
										</button>
										<button className='carousel-btn carousel-next' onClick={handleNextImage} aria-label='Next image'>
											<FaChevronRight />
										</button>
										<div className='carousel-indicators'>
											{selectedProject.images.map((_, idx) => (
												<button
													key={idx}
													className={`indicator ${idx === currentImageIndex ? 'active' : ''}`}
													onClick={() => setCurrentImageIndex(idx)}
													aria-label={`Go to image ${idx + 1}`}
												/>
											))}
										</div>
									</>
								)}
							</div>
						)}

						<div className='modal-content'>
							<h2>{selectedProject.title}</h2>

							<p className='modal-description'>{selectedProject.details}</p>

							<div className='modal-technologies'>
								<h3>Technologies Used:</h3>
								<div className='tech-tags'>
									{selectedProject.technologies.map((tech, idx) => (
										<span key={idx} className='tech-tag'>
											{tech}
										</span>
									))}
								</div>
							</div>

							<div className='modal-links'>
								{selectedProject.github && (
									<a
										href={selectedProject.github}
										target='_blank'
										rel='noopener noreferrer'
										className='modal-link github-link'
									>
										<FaGithub /> GitHub
									</a>
								)}
								{selectedProject.live && (
									<a
										href={selectedProject.live}
										target='_blank'
										rel='noopener noreferrer'
										className='modal-link live-link'
									>
										<FaExternalLinkAlt /> Live Demo
									</a>
								)}
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
