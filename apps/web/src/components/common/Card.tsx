"use client";
import * as React from "react";
import Image from "next/image";
import { cva, type VariantProps } from "class-variance-authority";
import { Button } from "./Button";
import { twClsx } from "app/utils";

export interface CardProps extends VariantProps<typeof cardVariants> {
	className?: string;
	children: React.ReactNode;
}

export interface CardHeaderProps {
	img?: JSX.Element | string;
	title?: string;
}

export interface CardFormProps
	extends React.FormHTMLAttributes<HTMLFormElement> {
	submitCta?: string;
}

const cardVariants = cva(
	"flex flex-col rounded-lg bg-white px-4 py-8 text-neutral-600 dark:text-neutral-200 sm:px-10",
	{
		variants: {
			bg: {
				default: "dark:bg-neutral-700 bg-white",
				transparent: "bg-transparent dark:bg-transparent",
				primary: "bg-sky-500 dark:bg-primary-500",
			},
		},
		defaultVariants: {
			bg: "default",
		},
	}
);

const Card = ({ className, bg, children }: CardProps) => (
	<div className={twClsx(cardVariants({ bg, className }))}>{children}</div>
);

const Header = ({ img, title }: CardHeaderProps) => (
	<>
		{React.isValidElement(img) && img}
		{typeof img === "string" && (
			<Image
				width={100}
				height={100}
				src={img}
				alt="form header logo"
				className="mx-auto my-3 h-14 w-auto"
				priority
			/>
		)}
		<h2 className="text-center text-3xl font-extrabold">{title}</h2>
	</>
);

const Form = ({ className, submitCta, children, onSubmit }: CardFormProps) => (
	<form className={twClsx(`${className} space-y-6`)} onSubmit={onSubmit}>
		{children}
		<div>
			<button type="submit" className="w-full">
				{submitCta}
			</button>
		</div>
	</form>
);

const Divider = ({ label }: { label?: string }) => (
	<div className="relative">
		<div className="absolute inset-0 flex items-center">
			<div className="w-full border-t-[2.75px] border-neutral-600 dark:border-neutral-400" />
		</div>
		<div className="relative flex justify-center text-sm">
			<span
				className={twClsx(
					label
						? "text-default bg-white dark:bg-slate-700"
						: "bg-transparent py-2 text-transparent",
					"px-2"
				)}
			>
				{label}
			</span>
		</div>
	</div>
);

Card.ActionStack = Button.Group;
Card.Button = Button;
Card.Divider = Divider;
Card.Form = Form;
Card.Header = Header;

export { Card };
