import { FaDownload, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';

import { FloatingButton } from '../components/floating-button';
import { GlowLink } from '../components/glow-box-link';
import { TextHover } from '../components/text-hover.component';

export const InfoSection = () => {
	return (
		<div className='hero-section'>


			<FloatingButton
				label='About Me'
				className='first'
				href='/#about-me'
			/>
			<FloatingButton
				label='Projects'
				className='second'
				href='/#projects'
			/>
			<FloatingButton
				label='Experiences'
				className='third'
				href='/#experiences'
			/>
			<FloatingButton
				label='Formations'
				className='fourth'
				href='/#formations'
			/>
			<div className='main-hero'>
				<div>
					<p>Hi, I am</p>
					<TextHover
						text='Ahmed'
						className='name'
					/>
					<TextHover
						text='Chihaoui'
						className='name'
					/>
					<p>Full Stack Developer</p>
				</div>
				<div className='hero-image'>
					<img
						src='/profile-photo.jpg'
						alt='Ahmed Profile'
						className='profile-photo'
					/>
				</div>
			</div>

			<FloatingButton
				label='Tech'
				className='sec'
				href='/#tech-stack'
			/>
			<FloatingButton
				label='Contact'
				className='contact'
				href='/#contact'
			/>

			<div className='blur'></div>
			<div className='bottom-bar'>
				<GlowLink
					href='https://github.com/AhmedChik'
					color='rgba(255, 255, 255, 0.4)'
					icon={<FaGithub color='rgba(255, 255, 255,0.9)' />}
					aria-label='github'
				/>
				<GlowLink
					href='https://www.linkedin.com/in/ahmed-chikhaoui-3351292ab'
					color='rgb(0, 160, 220, 0.6)'
					icon={<FaLinkedinIn color='rgb(0, 160, 220)' />}
					aria-label='linkedin'
				/>
				<GlowLink
					href='mailto:ahmedhps32021@gmail.com'
					icon={<IoMailOutline color='rgb(18, 122, 209)' />}
					color=' rgb(18, 122, 209,0.7)'
					aria-label='mail'
				/>
				<button
					className='resume-btn'
					onClick={() => {
						window.open('/Ahmed_Chihaoui_Resume.pdf', '_blank');
					}}
				>
					<FaDownload />
					<div>Resume</div>
					<span></span>
				</button>
			</div>
		</div>
	);
};
