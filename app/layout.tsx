import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { fontCaniculeDisplay, fontMonaco, fontMono } from "@/config/fonts";
import { Providers } from "./providers";
import clsx from "clsx";
import { Navbar } from "@/components/navbar";
import Script from "next/script";
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
			<Script async src="https://www.googletagmanager.com/gtag/js?id=G-5FRKS00PF2"></Script>
			<Script id="google-analytics"> 
				{
					`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', 'G-5FRKS00PF2');
					`
				}
			</Script>
			</head>
			<body
				className={clsx(
					"min-h-screen bg-background antialiased",
					fontMonaco.className
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
					<div className="relative flex flex-col dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]">
						<Navbar />
						<main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
							{children}
							<Analytics />
						</main>
						<footer>
							<div className="container mx-auto max-w-7xl py-10 px-6 flex-grow">
								<p className="text-center text-neutral-500 dark:text-neutral-400">
									© No Copyrights reserved • <a href="https://github.com/manoranjith-shankar/portfolio-blog" target='_blank'>Source code</a>
								</p>
							</div>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
