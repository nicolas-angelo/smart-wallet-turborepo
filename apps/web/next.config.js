/** @type {import('next').NextConfig} */
const nextConfig = {
	swcMinify: true,
	experimental: {
		appDir: true,
		serverActions: true,
	},
	async rewrites() {
		return [
			{
				source: "/api/:path*",
				destination: "http://localhost:8000/:path*", // Proxy to Backend
			},
		];
	},
};

module.exports = nextConfig;
