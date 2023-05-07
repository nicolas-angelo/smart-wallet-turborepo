import { MagicLink, SmartWallet } from "@thirdweb-dev/wallets";
import { useConnectionStatus, useDisconnect } from "@thirdweb-dev/react";
import {
	smartWalletBaseConfig,
	activeChain,
	supportedChains,
} from "app/constants/thirdweb";
import { EmailOrSMSProps, ConnectProps } from "app/types/magic";

const smartWallet = new SmartWallet({
	...smartWalletBaseConfig,
	chain: activeChain,
	chains: supportedChains,
});

const magicLink = new MagicLink({
	apiKey: process.env.NEXT_PUBLIC_MAGIC_KEY || "",
});

export default function useSmartMagic() {
	const connectionStatus = useConnectionStatus();
	const disconnect = useDisconnect();

	const connect = async ({ type, ...props }: ConnectProps) => {
		try {
			let magicAddress = await magicLink.connect({
				email: (props as EmailOrSMSProps).email,
			});

			// let magicAddress;

			// type === "email"
			// 	? (magicAddress = await magicLink.connect({
			// 			email: (props as EmailOrSMSProps).email,
			// 	  }))
			// 	: (magicAddress = await magicLink.connect({
			// 			phoneNumber: (props as EmailOrSMSProps).phoneNumber,
			// 	  }));

			console.log("connected to magic wallet", magicAddress);

			// connect smart wallet
			const smartWalletAddress = await smartWallet.connect({
				personalWallet: magicLink,
				chainId: activeChain.chainId,
			});

			console.log("smart wallet address", smartWalletAddress);
			return smartWalletAddress;
		} catch (error) {
			console.log(error);
		}
	};

	return {
		connectionStatus,
		connect,
		disconnect,
	};
}
