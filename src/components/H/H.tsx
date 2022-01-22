import React from 'react';
import styles from './H.module.scss';
import cn from 'classnames';
import { HProps } from './H.props';

export const H = ({ size = 's', children, className, ...props }: HProps) => {
	return <p
		className={cn(styles.h, className, {
			[styles.s]: size === 's',
			[styles.m]: size === 'm',
			[styles.l]: size === 'l',
		})}
		{...props}
	>{children}</p>;
};

