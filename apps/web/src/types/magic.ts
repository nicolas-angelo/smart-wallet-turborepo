export type EmailOrSMSProps = {
	email: string;
	phoneNumber: string;
};

export type ConnectPropsWithType<T extends "email" | "sms"> = {
	type: T;
} & (T extends "email" ? { email: string } : { phoneNumber: string });

export type ConnectProps =
	| ConnectPropsWithType<"email">
	| ConnectPropsWithType<"sms">;
