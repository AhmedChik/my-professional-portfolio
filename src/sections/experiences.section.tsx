import { SectionTitle } from '../components/section-title.component';

const experiences = [
	{
		title: 'Junior Full Stack Engineer',
		place: '@ByteSphere',
		timePeriod: 'Aug 2025 – Present | Oujda, Morocco',
		description: (
			<ul>
				<li>
					Working on <strong>SaaS web and mobile-first applications</strong> using
					<strong> Next.js, Expo, NestJS, and Node.js</strong>.
				</li>
				<li>
					Integrated REST APIs and optimized application performance and scalability.
				</li>
				<li>
					Participated in <strong>Agile Scrum</strong> ceremonies and product planning.
				</li>
			</ul>
		),
	},
	{
		title: 'Assistant Full Stack Developer',
		place: '@COURÂGE',
		timePeriod: 'Feb 2025 – Jul 2025 | Montpellier, France',
		description: (
			<ul>
				<li>
					Developed a <strong>web & mobile extranet platform</strong> compliant with
					the <strong>Qualiopi</strong> framework.
				</li>
				<li>
					Built the platform using <strong>Next.js, Expo, Prisma, PostgreSQL</strong>
					with secure authentication via <strong>Clerk</strong>.
				</li>
				<li>
					Worked in an <strong>Agile Scrum</strong> environment with GitHub, Trello,
					Coolify, and automated code quality tools.
				</li>
			</ul>
		),
	},
	{
		title: 'Full Stack Web Developer',
		place: '@COMARKE',
		timePeriod: 'Jul 2024 – Sep 2024 | Berkane, Morocco',
		description: (
			<ul>
				<li>
					Designed and developed a <strong>web application</strong> for internal project
					and client task management.
				</li>
				<li>
					Implemented the frontend using <strong>React.js</strong> and a robust backend
					with <strong>Spring Boot</strong>.
				</li>
				<li>
					Translated business needs into functional and technical specifications.
				</li>
			</ul>
		),
	},
	{
		title: 'Full Stack Developer',
		place: '@Mohammed First University – P2E Program',
		timePeriod: 'Jan 2024 – Jun 2024 | Oujda, Morocco',
		description: (
			<ul>
				<li>
					Developed a <strong>web platform</strong> for managing student project calls
					and application workflows.
				</li>
				<li>
					Implemented features for submissions, evaluations, and communication between
					students, juries, and administrators.
				</li>
				<li>
					Built the solution using <strong>React.js</strong> and <strong>Spring Boot</strong>.
				</li>
			</ul>
		),
	},
];

export const Experiences = () => {
	return (
		<section className='experiences container' id='experiences'>
			<div>
				
				<div className='timeline'>
					<h1>Work Experience</h1>
					{experiences.map(({ title, place, timePeriod, description }, idx) => (
						<div className='timeline-list' key={idx}>
							<div className='timeline-item'>
								<p className='designation'>{title}</p>
								<p className='place'>
									{place} | {timePeriod}
								</p>
								<div className='timeline-description'>{description}</div>
							</div>
						</div>
					))}
				</div>
			</div>

			<div>
				<SectionTitle title='EXPERIENCE' subTitle='MY' />
			</div>
		</section>
	);
};
