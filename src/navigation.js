import { getAsset, getBlogPermalink, getPermalink } from "./utils/permalinks";

export const headerData = {
	links: [
		{
			text: "Blog",
			links: [
				{
					text: "Blog Posts",
					href: getBlogPermalink(),
				},
				{
					text: "Swift",
					href: getPermalink("swift", "tag"),
				},
				{
					text: "Game Development",
					href: getPermalink("game-development", "tag"),
				},
			],
		},
		{
			text: "Apps",
			links: [
				{
					text: "Endless Hurdles Game",
					href: "/eh",
				},
				{
					text: "FX Preset Manager",
					href: "/mobile-project-fx-preset-manager",
				},
				{
					text: "Job Finder Tracker",
					href: "/mobile-project-job-search-tracker",
				},
			],
		},
		{
			text: "Podcasts",
			links: [
				{
					text: "My Podcast and Streaming Set Up",
					href: "/my-podcasting-hardware-and-software-studio",
				},
				{
					text: "App Developer",
					href: "/podcastcs",
				},
				{
					text: "PW Podcast",
					href: "/podcastpw",
				},
				{
					text: "Creating an App Series",
					href: "/creating-an-app-series",
				},
				{
					text: "UIBuzz - App and game development",
					href: "https://uibuzz.transistor.fm",
				},
			],
		},
		{
			text: "Other",
			links: [
				{
					text: "About",
					href: getPermalink("/about"),
				},
				{
					text: "Livestreaming",
					href: "https://twitch.tv/compiledev",
				},
			],
		},
	],
	actions: [{ text: "Contact", href: "/contact", target: "" }],
};

export const footerData = {
	links: [
		{
			title: "Apps",
			links: [
				{ text: "Endless Hurdles (Game)", href: "/eh" },
				{ text: "Project Hack (Game)", href: "https://projecthack.net" },
				{
					text: "FX Preset Manager (iOS)",
					href: "/mobile-project-fx-preset-manager",
				},
				{
					text: "Job Finder Tracker (iOS)",
					href: "/mobile-project-job-search-tracker",
				},
			],
		},
		{
			title: "Podcasts",
			links: [
				{ text: "App Developer", href: "/podcastcs" },
				{ text: "Compile Swift Guest", href: "/csform" },
				{ text: "UIBuzz", href: "https://uibuzz.transistor.fm" },
			],
		},
	],
	secondaryLinks: [{ text: "Privacy Policy", href: getPermalink("/privacy") }],
	socialLinks: [
		{
			ariaLabel: "LinkedIn",
			icon: "tabler:brand-linkedin",
			href: "https://www.linkedin.com/in/peterwitham",
		},
		{
			ariaLabel: "YouTube",
			icon: "tabler:brand-youtube",
			href: "https://www.youtube.com/c/PeterWitham",
		},
		{
			ariaLabel: "Twitch",
			icon: "tabler:brand-twitch",
			href: "https://www.twitch.tv/compiledev",
		},
		{
			ariaLabel: "Instagram",
			icon: "tabler:brand-instagram",
			href: "https://instagram.com/compileswift",
		},
		{
			ariaLabel: "Facebook",
			icon: "tabler:brand-facebook",
			href: "https://facebook.com/compilesw",
		},
		{ ariaLabel: "RSS", icon: "tabler:rss", href: getAsset("/rss.xml") },
		{
			ariaLabel: "Github",
			icon: "tabler:brand-github",
			href: "https://github.com/grfxguru",
		},
		{
			ariaLabel: "X",
			icon: "tabler:brand-x",
			href: "https://x.com/compileswift",
		},
	],
	footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
