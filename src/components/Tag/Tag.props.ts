import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TagProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
	bg?: "white" | "black" | "red" | "green" | "gray" | "blue" | "ghost";
	bgHex?: string;
	color?: "white" | "black";
}
