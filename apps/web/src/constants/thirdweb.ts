import { BaseGoerli, Mumbai, Polygon, Base } from "@thirdweb-dev/chains";

export const TWFactoryAddress = process.env.NEXT_PUBLIC_TW_FACTORY_ADDRESS;
export const TWApiKey = process.env.NEXT_PUBLIC_TW_API_KEY;
export const activeChain = BaseGoerli;
export const supportedChains = [BaseGoerli, Mumbai, Polygon, Base];

export const smartWalletBaseConfig = {
	factoryAddress: TWFactoryAddress || "",
	thirdwebApiKey: TWApiKey || "",
	gasless: true,
};
