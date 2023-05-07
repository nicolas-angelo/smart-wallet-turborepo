"use client";
import { useUser } from "@thirdweb-dev/react";
import useSmartMagic from "app/hooks/useSmartMagic";
import {
	isValidElementOrFunction as isValid,
	renderElementOrFunction as renderWithCheck,
} from "app/utils";

export interface GuardProps {
	onNotConnected?: JSX.Element | (() => void);
	onNotLoggedIn?: JSX.Element | (() => void);
	children: JSX.Element;
	fallback?: JSX.Element;
}

export function WalletGuard(props: GuardProps) {
	const { isLoggedIn } = useUser();
	const { connectionStatus } = useSmartMagic();

	// check if onNotConnected and onNotLoggedIn are valid components or functions
	Object.entries(props).forEach(([key, value]) => {
		if (key === "onNotConnected" || key === "onNotLoggedIn") {
			isValid(key, value);
		}
	});

	switch (connectionStatus) {
		case "unknown" || "connecting":
			// return fallback if wallet connection status is unknown or connecting
			return props.fallback || null;

		case "connected":
			// if user is logged in, return children
			if (isLoggedIn) {
				return props.children;
			} else {
				// if user is not logged in, return onNotLoggedIn component or function
				return renderWithCheck(props?.onNotLoggedIn);
			}

		case "disconnected":
			// if wallet is not connected, return onNotConnected component or function
			return renderWithCheck(props?.onNotConnected);

		default:
			return null;
	}
}
