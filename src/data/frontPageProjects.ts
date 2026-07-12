export type ProjectStatusTone = "live" | "pilot" | "planned";

export interface FrontPageBuildLogEntry {
	slug: string;
	date: string;
	title: string;
	summary: string;
	sourceHref?: string;
}

export interface FrontPageProject {
	slug: string;
	name: string;
	domain: string;
	description: string;
	detailHref: string;
	productionHref?: string;
	repositoryHref?: string;
	status: string;
	statusDetail: string;
	statusTone: ProjectStatusTone;
	support: string;
	supportDetail: string;
	log: FrontPageBuildLogEntry[];
}

export const frontPageProjects: FrontPageProject[] = [
	{
		slug: "armorer",
		name: "Armorer",
		domain: "armorer.io",
		description:
			"A beautiful, minimal web reader for the King James Version of the Bible—without ads, commentaries, notes, or distractions.",
		detailHref: "/projects/armorer",
		productionHref: "https://armorer.io/",
		repositoryHref: "https://github.com/glitchassassin/armorer",
		status: "Live",
		statusDetail: "Public web release",
		statusTone: "live",
		support: "Open source",
		supportDetail: "Source and issue tracker on GitHub",
		log: [
			{
				slug: "cross-chapter-reference-copying",
				date: "May 27, 2026",
				title: "Cross-chapter reference copying",
				summary: "Selections that cross chapter boundaries now produce clean, useful Bible references.",
				sourceHref: "https://github.com/glitchassassin/armorer/commit/3791548b3dfcb5f65ccecdc09540fe00a52a47b2",
			},
			{
				slug: "verse-fragment-focus",
				date: "May 27, 2026",
				title: "Verse fragment focus",
				summary: "Direct links can focus the referenced verse while preserving the reading flow.",
				sourceHref: "https://github.com/glitchassassin/armorer/commit/50f8f5375b0b19a3356bece7ecd4740c2365bd22",
			},
			{
				slug: "book-filtered-search",
				date: "Sep 12, 2025",
				title: "Book-filtered search",
				summary: "Keyword search gained a book filter for faster, more focused study.",
				sourceHref: "https://github.com/glitchassassin/armorer/commit/363bc6abb13b1343b45c1377cedd8ed8dfe7db43",
			},
		],
	},
	{
		slug: "everysheep",
		name: "EverySheep",
		domain: "everysheep.com",
		description:
			"Pastoral care tools that help church teams know every sheep: assign care groups, record useful notes, and see who needs a personal follow-up.",
		detailHref: "/projects/everysheep",
		productionHref: "https://everysheep.com/",
		status: "Pilot / waitlist",
		statusDetail: "In use with early churches",
		statusTone: "pilot",
		support: "Donation supported",
		supportDetail: "Sustained by people who value the mission",
		log: [
			{
				slug: "church-management-integrations",
				date: "In progress",
				title: "Church-management integrations",
				summary: "Fluro and Subsplash connections are being developed to keep pastoral-care data in sync.",
			},
			{
				slug: "shared-care-notes",
				date: "Pilot",
				title: "Shared care notes",
				summary: "Pastors and deacons can record visits, prayer requests, and follow-ups for the whole care team.",
			},
			{
				slug: "waitlist-onboarding",
				date: "Now",
				title: "Waitlist onboarding",
				summary: "Interested churches can join the waitlist while the pilot workflow continues to mature.",
			},
		],
	},
	{
		slug: "project-three",
		name: "Project III",
		domain: "Name reserved",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo at sapien fermentum tincidunt.",
		detailHref: "/projects/project-three",
		status: "Pre-launch",
		statusDetail: "Go-live date TBD",
		statusTone: "planned",
		support: "Paid",
		supportDetail: "Commercial product placeholder",
		log: [
			{
				slug: "problem-framing",
				date: "Discovery",
				title: "Problem framing",
				summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
			},
			{
				slug: "prototype-core-workflow",
				date: "Next",
				title: "Prototype the core workflow",
				summary: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
			},
			{
				slug: "go-live-date",
				date: "Go live",
				title: "Date to be determined",
				summary: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
			},
		],
	},
];
