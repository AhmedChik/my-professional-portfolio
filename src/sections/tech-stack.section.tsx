import { BiLogoTypescript } from 'react-icons/bi';
import { DiMongodb } from 'react-icons/di';

import {
	FaReact,
	FaNodeJs,
	FaBootstrap,
	FaGithub,
	FaDocker,
	FaPython,
	FaJava,
	FaRobot,
	FaBrain,
} from 'react-icons/fa';

import { TbBrandNextjs } from 'react-icons/tb';

import {
	SiNestjs,
	SiSpringboot,
	SiTailwindcss,
	SiMui,
	SiShadcnui,
	SiMysql,
	SiPostgresql,
	SiPrisma,
	SiGithubactions,
	SiSonarqube,
	SiPandas,
} from 'react-icons/si';

import { GlowBox } from '../components/glow-box';
import { SectionTitle } from '../components/section-title.component';

const techs = [
	{
		heading: 'Core Stack I Work With',
		items: [
			{
				title: 'Next.js',
				icon: <TbBrandNextjs color='rgb(255, 255, 255)' />,
				color: 'rgba(255, 255, 255, 0.4)',
			},
			{
				title: 'React.js',
				icon: <FaReact color='rgb(97, 219, 251)' />,
				color: 'rgba(97, 219, 251, 0.6)',
			},
			{
				title: 'Node.js',
				icon: <FaNodeJs color='rgb(104, 160, 99)' />,
				color: 'rgba(104, 160, 99, 0.7)',
			},
			{
				title: 'NestJS',
				icon: <SiNestjs color='rgb(224, 35, 78)' />,
				color: 'rgba(224, 35, 78, 0.6)',
			},
			{
				title: 'TypeScript',
				icon: <BiLogoTypescript color='rgb(0, 122, 204)' />,
				color: 'rgba(0, 122, 204, 0.6)',
			},
			{
				title: 'Java',
				icon: <FaJava color='rgb(248, 152, 32)' />,
				color: 'rgba(248, 152, 32, 0.6)',
			},
			{
				title: 'Spring Boot',
				icon: <SiSpringboot color='rgb(109, 179, 63)' />,
				color: 'rgba(109, 179, 63, 0.6)',
			},
		],
	},
	{
		heading: 'UI & Styling',
		items: [
			{
				title: 'Tailwind CSS',
				icon: <SiTailwindcss color='rgb(6, 182, 212)' />,
				color: 'rgba(6, 182, 212, 0.7)',
			},
			{
				title: 'Material UI',
				icon: <SiMui color='rgb(0, 127, 255)' />,
				color: 'rgba(0, 127, 255, 0.6)',
			},
			{
				title: 'Bootstrap',
				icon: <FaBootstrap color='rgb(125, 17, 248)' />,
				color: 'rgba(125, 17, 248, 0.7)',
			},
			{
				title: 'ShadCN UI',
				icon: <SiShadcnui color='rgb(255, 255, 255)' />,
				color: 'rgba(255, 255, 255, 0.4)',
			},
		],
	},
	{
		heading: 'Databases & ORM',
		items: [
			{
				title: 'PostgreSQL',
				icon: <SiPostgresql color='rgb(51, 103, 145)' />,
				color: 'rgba(51, 103, 145, 0.7)',
			},
			{
				title: 'MySQL',
				icon: <SiMysql color='rgb(0, 122, 158)' />,
				color: 'rgba(0, 122, 158, 0.7)',
			},
			{
				title: 'MongoDB',
				icon: <DiMongodb color='rgb(0, 237, 100)' />,
				color: 'rgba(0, 237, 100, 0.7)',
			},
			{
				title: 'Prisma',
				icon: <SiPrisma color='rgb(255, 255, 255)' />,
				color: 'rgba(255, 255, 255, 0.4)',
			},
		],
	},
	{
		heading: 'DevOps & Code Quality',
		items: [
			{
				title: 'Git & GitHub',
				icon: <FaGithub color='rgb(255, 255, 255)' />,
				color: 'rgba(255, 255, 255, 0.4)',
			},
			{
				title: 'Docker',
				icon: <FaDocker color='rgb(0, 123, 255)' />,
				color: 'rgba(0, 123, 255, 0.6)',
			},
			{
				title: 'CI/CD',
				icon: <SiGithubactions color='rgb(33, 150, 243)' />,
				color: 'rgba(33, 150, 243, 0.6)',
			},
			{
				title: 'SonarQube',
				icon: <SiSonarqube color='rgb(76, 175, 80)' />,
				color: 'rgba(76, 175, 80, 0.6)',
			},
		],
	},
	{
		heading: 'AI & Data',
		items: [
			{
				title: 'Python',
				icon: <FaPython color='rgb(53, 114, 165)' />,
				color: 'rgba(53, 114, 165, 0.7)',
			},
			{
				title: 'Machine Learning Basics',
				icon: <FaBrain color='rgb(255, 193, 7)' />,
				color: 'rgba(255, 193, 7, 0.6)',
			},
			{
				title: 'Data Processing',
				icon: <SiPandas color='rgb(255, 255, 255)' />,
				color: 'rgba(255, 255, 255, 0.4)',
			},
			{
				title: 'AI-powered APIs',
				icon: <FaRobot color='rgb(156, 39, 176)' />,
				color: 'rgba(156, 39, 176, 0.6)',
			},
		],
	},
];


export const TechStack = () => {
	return (
		<section
			className='tech-stack'
			id='tech-stack'
		>
			<div className='tech-grid'>
				{techs.map((tech, index) => (
					<div key={index}>
						<p>{tech.heading}</p>
						<div className='tech-row'>
							{tech.items.map((item, index) => (
								<GlowBox
									key={index}
									icon={item.icon}
									color={item.color}
									title={item.title}
								/>
							))}
						</div>
					</div>
				))}
			</div>
			<div>
				<SectionTitle
					title='Tech'
					subTitle='SET'
				/>
			</div>
		</section>
	);
};
