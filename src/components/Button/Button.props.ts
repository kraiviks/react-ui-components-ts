import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
export interface ButtonProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	children?: ReactNode;
	radiusType?: "rounded" | "square";
	boxShadow?: true | false;
	color?: string;
	border?: true | false;
}
