import { isValidElement } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

type Prop = JSX.Element | (() => void) | null | undefined;

export function twClsx(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function isValidElementOrFunction(name: string, prop: Prop) {
	if (typeof prop !== "function" && !isValidElement(prop)) {
		throw new Error(`${name} must be a valid React component or function`);
	}
}

export function renderElementOrFunction(prop: Prop) {
	if (isValidElement(prop)) {
		return prop as JSX.Element;
	} else if (typeof prop === "function") {
		prop();
	}
	return null;
}
