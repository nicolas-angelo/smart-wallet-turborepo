import Image from "next/image";
import { Card } from "app/components";

export const WalletLoading = () => (
	<Card className="flex-1 animate-pulse bg-transparent dark:bg-transparent">
		<div className="flex flex-1 flex-col justify-between space-y-6">
			<Image
				width={100}
				height={100}
				src="/images/fox.png"
				alt="form header logo"
				className="mx-auto my-3 h-14 w-auto"
				priority
			/>
			<Card.Header title="MicroMask" />
		</div>
	</Card>
);
