"use client";
import React from "react";
import { EnvelopeIcon } from "@heroicons/react/20/solid";
import { Card, Form } from "app/components";
import useSmartMagic from "app/hooks/useSmartMagic";

export function ConnectUI() {
	const { connect } = useSmartMagic();
	const inputRef = React.useRef<HTMLInputElement>(null);

	const handleSubmit = async (evt: React.FormEvent) => {
		evt.preventDefault();
		const formData = new FormData(evt.currentTarget as HTMLFormElement);
		const email = String(formData.get("email"));
		await connect({ type: "email", email });
	};

	React.useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, []);

	return (
		<Card className="flex-1 bg-transparent dark:bg-transparent">
			<Card.Header img="/images/fox.png" title="MicroMask" />
			<Form onSubmit={handleSubmit}>
				<Form.Fields>
					<Form.Input
						ref={inputRef}
						className="ring dark:ring-slate-600"
						label="Email"
						name="email"
						placeholder="Enter your email"
						type="text"
						icon={<EnvelopeIcon className="h-5 w-5" aria-hidden="true" />}
					/>
				</Form.Fields>
				<Form.Submit label="Connect Wallet" />
			</Form>
		</Card>
	);
}
