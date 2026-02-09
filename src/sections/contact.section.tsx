import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';
import { GlowLink } from '../components/glow-box-link';
import { SectionTitle } from '../components/section-title.component';

export const Contact = () => {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const email = formData.get('email');
		const message = formData.get('message');
		const name = formData.get('name');

		// Create mailto link
		const subject = encodeURIComponent('New Message from Portfolio');
		const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
		window.location.href = `mailto:ahmedhps32021@gmail.com?subject=${subject}&body=${body}`;
	};

	return (
		<section className='contact-section container' id='contact'>
			<div className='contact-header'>
				<SectionTitle title='Get In' subTitle='TOUCH' />

			</div>

			<div className='contact-content'>
				<div className='contact-form-wrapper'>
					<form className='contact-form' onSubmit={handleSubmit}>
						<div className='form-group'>
							<label htmlFor='name'>Your Name</label>
							<input
								type='text'
								id='name'
								name='name'
								placeholder='Name'
								required
							/>
						</div>

						<div className='form-group'>
							<label htmlFor='email'>Your Email</label>
							<input
								type='email'
								id='email'
								name='email'
								placeholder='Email'
								required
							/>
						</div>

						<div className='form-group'>
							<label htmlFor='message'>Message</label>
							<textarea
								id='message'
								name='message'
								placeholder='Message'
								rows={6}
								required
							></textarea>
						</div>

						<button type='submit' className='submit-btn'>
							<div>Send Message</div>
							<span></span>
						</button>
					</form>
				</div>

				<div className='contact-info-wrapper'>
					<div className='contact-info'>
						<h3>Quick Links</h3>
						<div className='contact-links'>
							<GlowLink
								href='https://github.com/AhmedChik'
								color='rgba(255, 255, 255, 0.4)'
								icon={<FaGithub color='rgba(255, 255, 255,0.9)' size={30} />}
								aria-label='github'
							/>
							<GlowLink
								href='https://www.linkedin.com/in/ahmed-chikhaoui-3351292ab'
								color='rgb(0, 160, 220, 0.6)'
								icon={<FaLinkedinIn color='rgb(0, 160, 220)' size={30} />}
								aria-label='linkedin'
							/>
							<GlowLink
								href='mailto:ahmedhps32021@gmail.com'
								icon={<IoMailOutline color='rgb(18, 122, 209)' size={30} />}
								color='rgb(18, 122, 209,0.7)'
								aria-label='mail'
							/>
						</div>
					</div>

					<div className='contact-details'>
						<h3>Contact Info</h3>
						<div className='detail-item'>
							<p className='detail-label'>Email:</p>
							<a href='mailto:ahmedhps32021@gmail.com'>
								ahmedhps32021@gmail.com
							</a>
						</div>
						<div className='detail-item'>
							<p className='detail-label'>Availability:</p>
							<p>Open to opportunities</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
