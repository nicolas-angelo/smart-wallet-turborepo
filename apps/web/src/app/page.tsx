"use client";
import { useLogout } from "@thirdweb-dev/react";
import {
	WalletWidget,
	WalletGuard,
	WalletLoading,
	WalletLogin,
	ConnectUI,
} from "app/components";

export default function Home() {
	const { logout } = useLogout();

	return (
		<div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
			<WalletWidget buttonProps={{ imageSrc: "/images/fox.png" }}>
				<WalletGuard
					fallback={<WalletLoading />}
					onNotConnected={<ConnectUI />}
					onNotLoggedIn={<WalletLogin />}
				>
					<>
						<button onClick={() => logout()}>Logout</button>
					</>
				</WalletGuard>
			</WalletWidget>
		</div>
	);
}
