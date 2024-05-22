export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Manoranjith Shankar",
	description: "potato",
	navItems: [
		{
			label: "About",
			href: "#about",
		},
    {
      label: "Projects",
      href: "#projects",
    },
    // {
    //   label: "Contact",
    //   href: "#contact",
    // },
	],
	navMenuItems: [
		{
			label: "GitHub",
			href: "https://github.com/manoranjith-shankar",
		},
		{
			label: "LinkedIn",
			href: "https://www.linkedin.com/in/manoranjith-shankar/",
		},
		{
			label: "Twitter",
			href: "https://x.com/retrxx_eth",
		},
	],
	links: {
		github: "https://github.com/manoranjith-shankar",
		twitter: "https://x.com/retrxx_eth",
		linkedin: "https://www.linkedin.com/in/manoranjith-shankar/",
	},
};
