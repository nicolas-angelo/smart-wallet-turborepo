"use client";
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twClsx } from "app/utils";

type ButtonAttributes = Pick<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	"children" | "className" | "onClick" | "type" | "disabled"
>;

export interface ButtonProps
	extends ButtonAttributes,
		VariantProps<typeof buttonVariants> {
	label?: string;
	fullWidth?: boolean;
}

export interface ButtonGroupProps {
	containerClasses?: string;
	items: ButtonProps[];
}

const buttonVariants = cva(
	"text-sm font-semibold shadow focus:outline-none focus:ring-2 focus:ring-offset-2 dark:shadow-black px-4 py-2",
	{
		variants: {
			color: {
				default: "dark:bg-neutral-700 bg-white",
				primary:
					"border border-transparent bg-neutral-900 text-white hover:bg-sky-500 focus:ring-sky-500",
			},
			rounded: {
				default: "rounded-md",
				lg: "rounded-lg",
				full: "rounded-full",
			},
		},
		defaultVariants: {
			color: "primary",
			rounded: "full",
		},
	}
);

const Button = ({
	className,
	label,
	onClick,
	type,
	color,
	rounded,
	fullWidth = true,
	...props
}: ButtonProps) => (
	<button
		className={twClsx(
			buttonVariants({ color, rounded, className }),
			fullWidth && "w-full"
		)}
		onClick={onClick}
		type={type || "button"}
		{...props}
	>
		{label}
	</button>
);

Button.Group = ({ containerClasses, items }: ButtonGroupProps) => (
	<div className={twClsx(`${containerClasses} grid grid-cols-3 gap-3`)}>
		{items.map(({ label, onClick, ...props }, i) => (
			<Button key={i} {...{ label, onClick, ...props }} />
		))}
	</div>
);

Button.displayName = "Button";

export { Button };
