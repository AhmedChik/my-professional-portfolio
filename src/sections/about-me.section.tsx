import { SectionTitle } from '../components/section-title.component';

export const AboutMe = () => {
	return (
		<section
			className='about-me container'
			id='about-me'
		>
			<div>
				<SectionTitle
					title='About'
					subTitle='ME'
				/>
			</div>

			<div>
				<div className='intro'>
					<p>
						👋 Hi, I’m <strong>Ahmed Chikhaoui</strong>, a <strong>Software Engineer</strong>
						with a strong interest in both <strong>Full Stack development</strong> and{' '}
						<strong>DevOps practices</strong>.
					</p>

					<p>
						I design, build, and deploy modern web and mobile applications, focusing on
						scalability, performance, and reliability across the entire software lifecycle.
					</p>

					<p>
						I enjoy working across different layers of a system from user interfaces
						and backend services to deployment, automation, and infrastructure.
					</p>

				</div>
			</div>
		</section>
	);
};
