import React from 'react';
import styles from './Tag.module.scss';
import cn from 'classnames';
import { TagProps } from './Tag.props';

export const Tag = ({ children, bg, bgHex, color = 'black', className, ...props }: TagProps) => {
	return <div
		className={cn(styles.tag, className, {
			[styles.white]: bg === 'white',
			[styles.black]: bg === 'black',
			[styles.red]: bg === 'red',
			[styles.green]: bg === 'green',
			[styles.gray]: bg === 'gray',
			[styles.blue]: bg === 'blue',
			[styles.ghost]: bg === 'ghost',
			[styles.textWhite]: color === 'white',
			[styles.textBlack]: color === 'black',
		})}
		style={{ backgroundColor: bgHex }}
		{...props}
	> {children}</div >;
};
