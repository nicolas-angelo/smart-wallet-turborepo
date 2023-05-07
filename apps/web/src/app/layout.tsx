import Providers from "./providers";
import "app/app/global.css";

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="dark">
			<Providers>
				<body className="h-screen bg-neutral-200 dark:bg-neutral-800">
					{children}
				</body>
			</Providers>
		</html>
	);
}
