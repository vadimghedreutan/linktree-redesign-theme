/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		appDir: true,
		fontLoaders: [
			{ loader: "@next/font/google", options: { subsets: ["latin"] } },
		],
	},
	images: {
		domains: ["pbs.twimg.com"],
	},
}

module.exports = nextConfig
