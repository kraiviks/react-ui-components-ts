import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
export interface HProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	size?: "s" | "m" | "l";
	children: ReactNode;
}
