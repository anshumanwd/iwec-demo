"use client";
import { useEffect, useState } from 'react';

const AnimatedText = ({ children, className, ...props }) => {
	const [isHydrated, setIsHydrated] = useState(false);

	useEffect(() => {
		setIsHydrated(true);
	}, []);

	if (!isHydrated) {
		// During SSR and initial hydration, render without animation class
		const baseClassName = className?.replace(/\s*(text-anim|title-anim|hero-text-anim)\s*/g, ' ').trim();
		return (
			<h2 className={baseClassName} {...props}>
				{children}
			</h2>
		);
	}

	// After hydration, render with animation class
	return (
		<h2 className={className} {...props}>
			{children}
		</h2>
	);
};

export default AnimatedText;