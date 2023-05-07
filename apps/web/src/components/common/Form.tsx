"use client";
import * as React from "react";
import { Button } from "./Button";
import { LabeledInput } from "./LabeledInput";
import { twClsx } from "app/utils";

type FormAttributes = Pick<
	React.FormHTMLAttributes<HTMLFormElement>,
	"children" | "className" | "onSubmit" | "onReset" | "onInvalid" | "noValidate"
>;
interface FormProps extends FormAttributes {}
type ButtonProps = React.ComponentProps<typeof Button>;

const Form = ({ className, children, onSubmit }: FormProps) => (
	<form
		className={twClsx(`${className} flex flex-col space-y-6`)}
		onSubmit={onSubmit}
	>
		{children}
	</form>
);

Form.Fields = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => <div className="mt-6 flex flex-col space-y-3">{children}</div>;

Form.Input = LabeledInput;
Form.Submit = ({ className, ...props }: ButtonProps) => (
	<Button type="submit" className="flex justify-center" {...props} />
);

export { Form };
