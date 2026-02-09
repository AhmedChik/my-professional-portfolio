import { SectionTitle } from '../components/section-title.component';

const formations = [
	{
		title: 'Engineering Degree in Computer Science',
		place: 'National School of Applied Sciences of Oujda (ENSAO)',
		timePeriod: '2022 – 2025 | Oujda, Morocco',
		description: (
			<ul>
				<li>
					Engineering program focused on <strong>software engineering</strong>,
					web and mobile development, and system design.
				</li>
				<li>
					Strong foundation in <strong>algorithms, databases, UML, and software architecture</strong>.
				</li>
			</ul>
		),
	},
	{
		title: 'DEUG in Mathematics and Computer Science',
		place: 'Faculty of Sciences of Oujda – Mohammed First University',
		timePeriod: '2020 – 2022 | Oujda, Morocco',
		description: (
			<ul>
				<li>
					Fundamental studies in <strong>mathematics, programming, and computer science</strong>.
				</li>
				<li>
					Developed strong analytical and problem-solving skills.
				</li>
			</ul>
		),
	},
	{
		title: 'Baccalaureate in Mathematical Sciences (B)',
		place: 'Lycée Jaber Ibn Hayyan',
		timePeriod: '2019-2020 | Berkane, Morocco',
		description: (
			<ul>
				<li>
					Specialized in <strong>mathematics and scientific reasoning</strong>.
				</li>
			</ul>
		),
	},
];

export const Formations = () => {
	return (
		<section className='formations container' id='formations'>
			<div>
				<SectionTitle title='Education' subTitle='MY' />
			</div>

			<div>
				<div className='timeline'>
					<h1>Education</h1>
					{formations.map(({ title, place, timePeriod, description }, idx) => (
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
		</section>
	);
};
