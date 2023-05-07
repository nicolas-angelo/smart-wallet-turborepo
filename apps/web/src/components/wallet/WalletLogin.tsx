import { useAddress, useLogin } from "@thirdweb-dev/react";
import { Card } from "app/components";
import useSmartMagic from "app/hooks/useSmartMagic";

export const WalletLogin = () => {
	const address = useAddress();
	const { login } = useLogin();
	const { disconnect } = useSmartMagic();

	return (
		<Card className="flex-1 bg-transparent dark:bg-transparent">
			<pre>Connected Wallet: {address}</pre>
			<Card.ActionStack
				items={[
					{ label: "Login", onClick: async () => await login() },
					{
						label: "Disconnect",
						onClick: async () => await disconnect(),
					},
				]}
			/>
		</Card>
	);
};
