import { useEffect, useRef, useState } from 'react';

export const useScrollTransform = () => {
	const [scrollY, setScrollY] = useState(0);
	const heroRef = useRef<HTMLDivElement>(null);
	const aboutRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const getImageTransform = () => {
		if (!heroRef.current || !aboutRef.current) return 0;

		const heroBottom = heroRef.current.getBoundingClientRect().bottom + scrollY;
		const aboutTop = aboutRef.current.getBoundingClientRect().top + scrollY;
		const distance = aboutTop - heroBottom;

		// Calculate percentage of scroll between hero and about me
		const scrollProgress = Math.max(0, Math.min(1, (scrollY - heroBottom + window.innerHeight) / (distance + window.innerHeight)));

		return scrollProgress;
	};

	return { scrollY, getImageTransform, heroRef, aboutRef };
};
