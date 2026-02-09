import { useEffect, useState } from 'react';

export const useTheme = () => {
	const [isLightMode, setIsLightMode] = useState(false);

	useEffect(() => {
		// Check localStorage for saved preference
		const savedMode = localStorage.getItem('theme-mode');
		if (savedMode === 'light') {
			setIsLightMode(true);
			document.body.classList.add('light-mode');
		} else {
			// Check system preference
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			if (!prefersDark && !savedMode) {
				document.body.classList.remove('light-mode');
			}
		}
	}, []);

	const toggleTheme = () => {
		setIsLightMode(!isLightMode);
		if (!isLightMode) {
			document.body.classList.add('light-mode');
			localStorage.setItem('theme-mode', 'light');
		} else {
			document.body.classList.remove('light-mode');
			localStorage.setItem('theme-mode', 'dark');
		}
	};

	return { isLightMode, toggleTheme };
};
