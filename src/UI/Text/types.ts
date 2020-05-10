import React from 'react'

export interface TextProps {
	/* Children of Text Element */
	children?: React.ReactNode;
	/* Set size of Heading */
	size?: 'small' | 'medium';
	style?: object;
	color?: 'dark' | 'light' | 'medium';
	className?: string;
	[key: string]: any
}
