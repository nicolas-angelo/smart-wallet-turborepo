"use client";
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twClsx } from "app/utils";

type InputAttributes = React.InputHTMLAttributes<HTMLInputElement>;
export interface LabeledInputProps
	extends InputAttributes,
		VariantProps<typeof inputVariants> {
	label: string;
	icon?: JSX.Element;
}

const inputVariants = cva(
	"block w-full appearance-none border-0 px-3 py-1.5 font-sans font-medium tracking-wide shadow-inner dark:shadow-inner focus:outline-none focus:ring-2 focus:ring-offset-2 placeholder:italic sm:text-sm sm:leading-6",
	{
		variants: {
			variant: {
				default: "dark:bg-neutral-800 bg-white",
				primary:
					"text-neutral-600 dark:text-neutral-200 bg-neutral-100 shadow-neutral-300 ring-2 ring-neutral-200 placeholder:text-neutral-400 focus:ring-sky-400 dark:bg-neutral-800 dark:shadow-black dark:ring-slate-600 dark:placeholder:text-neutral-500 dark:focus:ring-sky-400",
			},
			rounded: {
				default: "rounded-md",
				lg: "rounded-lg",
				full: "rounded-full",
			},
		},
		defaultVariants: {
			variant: "primary",
			rounded: "full",
		},
	}
);

const LabeledInput = React.forwardRef<HTMLInputElement, LabeledInputProps>(
	(
		{
			label,
			icon,
			className,
			variant,
			rounded,
			...inputProps
		}: LabeledInputProps,
		ref
	) => {
		return (
			<div>
				<label
					className="pl-2 text-sm font-medium leading-6 text-neutral-500 dark:text-neutral-100"
					htmlFor={inputProps.name}
				>
					{label}
				</label>
				<div
					className={twClsx(`mt-2 ${icon && "relative rounded-md shadow-sm"}`)}
				>
					{icon && (
						<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
							{icon}
						</div>
					)}
					<input
						className={twClsx(
							inputVariants({ variant, rounded, className }),
							`${icon && "pl-10"}`
						)}
						{...inputProps}
						ref={ref}
					/>
				</div>
			</div>
		);
	}
);

LabeledInput.displayName = "LabeledInput";

export { LabeledInput };
