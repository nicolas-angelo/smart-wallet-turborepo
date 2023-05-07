"use client";
import { ThirdwebProvider, magicLink, smartWallet } from "@thirdweb-dev/react";
import {
	smartWalletBaseConfig,
	activeChain,
	supportedChains,
} from "app/constants/thirdweb";

function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ThirdwebProvider
			activeChain={activeChain}
			supportedChains={supportedChains}
			supportedWallets={[
				smartWallet({
					...smartWalletBaseConfig,
					personalWallets: [
						magicLink({
							apiKey: process.env.NEXT_PUBLIC_MAGIC_KEY || "",
							magicSdkConfiguration: {
								network: {
									rpcUrl: activeChain.rpc[0],
									chainId: activeChain.chainId,
								},
							},
						}),
					],
				}),
			]}
			authConfig={{
				authUrl: "/api/auth",
				domain: "localhost:8000",
			}}
		>
			{children}
		</ThirdwebProvider>
	);
}

export default Providers;
