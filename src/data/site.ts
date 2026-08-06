export const profile = {
	email: 'crllect@proton.me',
	discordUsername: 'crllect',
	discordId: '713488984596021291'
} as const;

export type NavLink = {
	label: string;
	href: string;
	external?: boolean;
};

export const nav: NavLink[] = [
	{ label: 'Home', href: '/' },
	{ label: 'Projects', href: '/projects' },
	{ label: 'Contact', href: '/contact' },
	{ label: 'GitHub', href: 'https://github.com/crllect', external: true }
];

export type ProjectLink = {
	label: string;
	href: string;
};

export type ProjectImage = {
	src: string;
	alt: string;
};

export type Project = {
	slug: string;
	name: string;
	role: string;
	period: string;
	summary: string;
	description: string[];
	highlights: string[];
	metric?: { value: string; label: string };
	tags: string[];
	links: ProjectLink[];
	image?: ProjectImage;
	featured: boolean;
};

export const projects: Project[] = [
	{
		slug: 'night-network',
		name: 'Night Network',
		role: 'Co-owner · Developer',
		period: '2023 — Present',
		summary:
			'A privacy- and access-focused web organization partnering with TitaniumNetwork. Developed Space, DaydreamX, and more.',
		description: [
			'Night Network is a web organization I co-own and help run, building and operating a family of privacy- and access-focused web apps including Space and DaydreamX. The org has served over 6.5 million users in the past year.',
			'A lot of the job is organizational rather than technical: coordinating development across a distributed team, running sub-organizations, and maintaining partnerships with TitaniumNetwork, Nebula Services, and TerbiumOS. The rest is product and fullstack engineering, infrastructure, and deployment. Our projects live on GitHub and GitLab.'
		],
		highlights: [
			'Co-own the org and coordinate development across a distributed team',
			'Run Lunar and our other sub-organizations',
			'Maintain partnerships with TitaniumNetwork, Nebula Services, TerbiumOS, and Obsidian Developer Labs',
			'Build and maintain frontends, backends, and deployment at scale'
		],
		metric: { value: '6.5M+', label: 'users in the past year' },
		tags: [
			'Leadership',
			'Team coordination',
			'Astro',
			'TypeScript',
			'Infrastructure'
		],
		links: [
			{ label: 'night-network.org', href: 'https://night-network.org/' }
		],
		image: {
			src: '/assets/projects/night-network.webp',
			alt: 'The Night Network site, showing the org intro and its partners and sub-organizations'
		},
		featured: true
	},
	{
		slug: 'daydreamx',
		name: 'DaydreamX',
		role: 'Co-developer',
		period: '2024 — Present',
		summary:
			'A browser inside a browser with extensions, themes, tab groups, multi-profile support, and cloud sync.',
		description: [
			'DaydreamX is a browser that runs inside a browser, giving people a full, customizable browsing surface with the kind of features you expect from a native browser.',
			'I contributed to the frontend, theming engine, bookmarks, tab groups, vertical tabs and more. The site is built on NightmareJS, our custom framework, with TypeScript on Bun. It runs under Night Network and reaches 500k+ daily users at peak.'
		],
		highlights: [
			'Extension system, themes, bookmarks, tab groups, vertical tabs',
			'Multi-profile support and cloud sync',
			'500k+ daily users at peak'
		],
		metric: { value: '500k+', label: 'daily users at peak' },
		tags: ['NightmareJS', 'TypeScript', 'Bun'],
		links: [
			{ label: 'daydreamx.pro', href: 'https://daydreamx.pro' },
			{
				label: 'gitlab.com/nightnetwork/daydreamx',
				href: 'https://gitlab.com/nightnetwork/daydreamx'
			}
		],
		image: {
			src: '/assets/projects/daydreamx.webp',
			alt: 'The DaydreamX new tab page, with a search bar, site shortcuts, tab strip, and vertical sidebar'
		},
		featured: true
	},
	{
		slug: 'space',
		name: 'Space',
		role: 'Co-developer',
		period: '2023 — Present',
		summary:
			'A privacy-focused web app with steady traffic across the US and internationally.',
		description: [
			'Space is a privacy-focused web app I co-develop and maintain under Night Network. It sees steady traffic across the US and internationally, reaching 200k+ daily users at peak.',
			'The live site is vanilla JavaScript on pnpm; a v2 rewrite in React, TypeScript, and Bun is in development. I work across the frontend and the pieces that keep it fast and reliable for a broad, always-on audience.'
		],
		highlights: [
			'Co-developed and maintained under Night Network',
			'Steady US and international traffic',
			'v2 rewrite (React, TypeScript, Bun) in development'
		],
		metric: { value: '200k+', label: 'daily users at peak' },
		tags: ['JavaScript', 'pnpm'],
		links: [
			{ label: 'gointospace.app', href: 'https://gointospace.app' },
			{
				label: 'gitlab.com/nightnetwork/space',
				href: 'https://gitlab.com/nightnetwork/space'
			}
		],
		image: {
			src: '/assets/projects/space.webp',
			alt: 'The Space landing page, reading "Welcome to modern." over a purple nebula'
		},
		featured: true
	},
	{
		slug: 'proxdocs',
		name: 'ProxDocs',
		role: 'Creator · Developer',
		period: '2026 — Present',
		summary:
			'Documentation for building a web proxy from scratch, plus an interactive builder that generates a working project in your stack.',
		description: [
			'ProxDocs is a full tutorial on running your own web proxy with Scramjet, written to fill the gap between a short setup README and reading every upstream package yourself. It covers how a proxy actually works — the split between fetching bytes and rewriting them, transports, cross-origin isolation, and the internals of Scramjet — across concept, guide, and reference sections.',
			'It also ships an interactive builder at /build that hands you a configured, working project instead of a starting point to adapt. You pick a language, package manager, runtime, server and frontend framework, transport, and features, and it generates the code to match. Written and maintained by me; AGPL-3.0.'
		],
		highlights: [
			'~30 pages of concepts, guides, and reference written from scratch',
			'Interactive builder that generates a working proxy in your chosen stack',
			'Covers TypeScript/JavaScript, Node/Bun, Express/Fastify, React/Astro/Preact, and the libcurl, epoxy, and bare transports',
			'Framework integration guides for Vite, Next.js, SvelteKit, Astro, and more'
		],
		tags: ['TypeScript', 'Scramjet', 'Technical writing', 'Codegen'],
		links: [
			{ label: 'docs.crllect.dev', href: 'https://docs.crllect.dev' },
			{
				label: 'github.com/crllect/ProxDocs',
				href: 'https://github.com/crllect/ProxDocs'
			}
		],
		image: {
			src: '/assets/projects/proxdocs.webp',
			alt: 'The ProxDocs overview page, "Building a web proxy", with the docs sidebar'
		},
		featured: true
	},
	{
		slug: 'oxide',
		name: 'Oxide',
		role: 'Developer',
		period: '2026 — Present',
		summary:
			'The official community site for TitaniumNetwork, one of the largest web proxy communities online.',
		description: [
			'Oxide is the public-facing home for TitaniumNetwork, an organization dedicated to bypassing internet censorship with some of the most widely used proxy technologies online.',
			'I built the full UI and stack for the site: Next.js with React, TypeScript, Tailwind CSS, and Framer Motion. Night Network partners with TitaniumNetwork, and contributing to their community site was a natural extension of that relationship.'
		],
		highlights: [
			'Full UI design and frontend implementation',
			'Next.js with Framer Motion animations and Tailwind',
			'Public-facing site for a community of ~30k members'
		],
		tags: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Framer Motion'],
		links: [
			{
				label: 'titaniumnetwork.org',
				href: 'https://titaniumnetwork.org'
			},
			{
				label: 'github.com/titaniumnetwork-dev/Oxide',
				href: 'https://github.com/titaniumnetwork-dev/Oxide'
			}
		],
		image: {
			src: '/assets/projects/oxide.webp',
			alt: 'The TitaniumNetwork landing page built with Oxide, over a deep purple gradient'
		},
		featured: false
	},
	{
		slug: 'aspine',
		name: 'Aspine v3',
		role: 'Developer · Maintainer',
		period: '2024 — 2025',
		summary:
			"An open-source, modern frontend for my school district's Aspen grade system.",
		description: [
			"Aspine is an open-source, modern frontend for my school district's Aspen student information system — a much nicer way for students to view grades than the stock interface.",
			'I work on the v3 rewrite. The project is currently dormant and being picked back up.'
		],
		highlights: [
			'Modern, open-source grade frontend for a real school system',
			'Built for actual students',
			'v3 rewrite — being revived'
		],
		tags: [
			'Astro',
			'Preact',
			'Bun',
			'JavaScript',
			'TypeScript',
			'Open source'
		],
		links: [
			{
				label: 'github.com/Aspine/aspine3',
				href: 'https://github.com/Aspine/aspine3'
			}
		],
		image: {
			src: '/assets/projects/aspine.webp',
			alt: 'The Aspine v3 landing page, reading "Welcome to Aspine v3 — Aspen, reborn"'
		},
		featured: false
	},
	{
		slug: 'harvard-market',
		name: 'Harvard Market',
		role: 'Designer · Developer',
		period: '2025',
		summary:
			'A polished online-ordering site for a neighborhood Cambridge market — light/dark, cart, and order flow.',
		description: [
			'A from-scratch online-ordering site for Harvard Market, a neighborhood market and kitchen in Cambridge. Browse the menu, build a cart, and place a pickup order. Pay in person.',
			'Built with Next.js and Tailwind: editorial light/dark theming, an accessible cart, and an order flow that emails the kitchen. A compact end-to-end product build.'
		],
		highlights: [
			'Full menu, cart, and pickup-order flow',
			'Editorial light/dark design system',
			'Order submission wired to email'
		],
		tags: ['Next.js', 'React', 'Tailwind'],
		links: [
			{
				label: 'harvardmarket.vercel.app',
				href: 'https://harvardmarket.vercel.app/'
			},
			{
				label: 'github.com/crllect/HarvardMarket',
				href: 'https://github.com/crllect/HarvardMarket'
			}
		],
		image: {
			src: '/assets/projects/harvard-market.webp',
			alt: 'The Harvard Market homepage, with the menu hero and customer favorites'
		},
		featured: false
	}
];

export type SkillItem = {
	label: string;
	href?: string;
};

export type SkillGroup = {
	title: string;
	items: SkillItem[];
};

export const skills: SkillGroup[] = [
	{
		title: 'Languages',
		items: [{ label: 'TypeScript' }, { label: 'JavaScript' }]
	},
	{
		title: 'Frameworks & UI',
		items: [
			{ label: 'Astro', href: 'https://astro.build' },
			{ label: 'React', href: 'https://react.dev' },
			{ label: 'Preact', href: 'https://preactjs.com' },
			{ label: 'Next.js', href: 'https://nextjs.org' },
			{ label: 'Tailwind', href: 'https://tailwindcss.com' },
			{ label: 'SCSS / CSS', href: 'https://sass-lang.com' }
		]
	},
	{
		title: 'Tooling',
		items: [
			{ label: 'Bun', href: 'https://bun.sh' },
			{ label: 'npm', href: 'https://www.npmjs.com' },
			{ label: 'Git', href: 'https://git-scm.com' },
			{ label: 'GitHub', href: 'https://github.com' },
			{ label: 'GitLab', href: 'https://gitlab.com' },
			{ label: 'Figma', href: 'https://figma.com' }
		]
	},
	{
		title: 'Focus',
		items: [
			{ label: 'UI/UX design', href: 'https://figma.com' },
			{ label: 'Full-stack', href: 'https://preactjs.com' },
			{ label: 'Web performance', href: 'https://astro.build' }
		]
	}
];

export type ExperienceItem = {
	org: string;
	role: string;
	period: string;
	summary: string;
	href?: string;
	current?: boolean;
};

export const experience: ExperienceItem[] = [
	{
		org: 'Audible',
		role: 'Intern · Future Leaders',
		period: '2026',
		summary: 'Paid Intern at Audible through the Future Leaders program.',
		href: 'https://audible.com',
		current: true
	},
	{
		org: 'Night Network',
		role: 'Co-owner · Developer',
		period: '2023 — Present',
		summary:
			'Co-own and help run a privacy- and access-focused web organization: coordinating development across a distributed team, running our sub-organizations, and building the products themselves.',
		href: 'https://night-network.org/'
	},
	{
		org: 'School district IT',
		role: 'Security research',
		period: 'Ongoing',
		summary:
			'Responsibly disclosed device and network findings to my school district and helped patch them. Some details kept confidential.'
	}
];

export type Recognition = {
	title: string;
	org: string;
	period: string;
	note?: string;
};

export const recognition: Recognition[] = [
	{
		title: '1st place',
		org: 'HacKnight',
		period: '2024 – 2025',
		note: 'Hack Club–affiliated learnathon & hackathon.'
	},
	{
		title: 'Most technically complex project',
		org: "Hack Club Wonderland '24",
		period: '2024',
		note: '48-hour constrained build hackathon.'
	},
	{
		title: 'Participant',
		org: "MIT Blueprint '25",
		period: '2025',
		note: 'Weekend learnathon & hackathon for high-schoolers.'
	}
];

export const education = {
	school: 'Cambridge Rindge and Latin School',
	location: 'Cambridge, MA',
	detail: 'Expected June 2027'
} as const;

export type ContactLink = {
	label: string;
	value: string;
	href: string;
	kind: 'email' | 'github' | 'gitlab' | 'site' | 'discord' | 'linkedin';
	copy?: string;
};

export const contactLinks: ContactLink[] = [
	{
		label: 'Email',
		value: profile.email,
		href: `mailto:${profile.email}`,
		kind: 'email'
	},
	{
		label: 'Discord',
		value: profile.discordUsername,
		href: `https://discord.com/users/${profile.discordId}`,
		kind: 'discord'
	},
	{
		label: 'Night Network',
		value: 'night-network.org',
		href: 'https://night-network.org/',
		kind: 'site'
	},
	{
		label: 'Night Network GitLab',
		value: 'gitlab.com/nightnetwork',
		href: 'https://gitlab.com/nightnetwork',
		kind: 'gitlab'
	},
	{
		label: 'Night Network GitHub',
		value: 'github.com/Night-N3twork',
		href: 'https://github.com/Night-N3twork',
		kind: 'github'
	},
	{
		label: 'GitHub',
		value: 'github.com/crllect',
		href: 'https://github.com/crllect',
		kind: 'github'
	}
];

export const repo = {
	owner: 'crllect',
	name: 'crllect.dev',
	url: 'https://github.com/crllect/crllect.dev'
} as const;
