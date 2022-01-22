import React from 'react';
import styles from './Button.module.scss';
import { ButtonProps } from './Button.props';
import cn from 'classnames';

export const Button = ({ children, className, radiusType = 'rounded', boxShadow = false, color, border = false, ...props }: ButtonProps) => {
	return <button
		className={cn(styles.btn, className, {
			[styles.rounded]: radiusType === 'rounded',
			[styles.square]: radiusType === 'square',
			[styles.boxShadow]: boxShadow,
			[styles.border]: border,
		})}
		style={{ background: color, color: color === "black" ? 'white' : 'black' }}
		{...props}
	>{children}</button>;
};
