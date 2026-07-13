import { getCollection, type CollectionEntry } from "astro:content";

export type ProjectEntry = CollectionEntry<"projects">;
export type DevlogEntry = CollectionEntry<"devlogs">;
export type ProjectStatusTone = ProjectEntry["data"]["status"]["tone"];

export interface DevlogPreview {
	href: string;
	date: string;
	datetime: string;
	title: string;
	summary: string;
}

export interface ProjectDossier {
	slug: string;
	name: string;
	domain: string;
	description: string;
	detailHref: string;
	productionHref?: string;
	status: string;
	statusDetail: string;
	statusTone: ProjectStatusTone;
	support: string;
	supportDetail: string;
	supportHref?: string;
	devlogCount: number;
	log: DevlogPreview[];
}

const dateFormatter = new Intl.DateTimeFormat("en-US", {
	year: "numeric",
	month: "short",
	day: "numeric",
	timeZone: "UTC",
});

export function isPublished(entry: ProjectEntry | DevlogEntry) {
	return import.meta.env.DEV || !entry.data.draft;
}

export function formatDate(date: Date) {
	return dateFormatter.format(date);
}

export function toDateTime(date: Date) {
	return date.toISOString().slice(0, 10);
}

export function projectHref(project: ProjectEntry | string) {
	const id = typeof project === "string" ? project : project.id;
	return `/projects/${id}`;
}

export function devlogSlug(entry: DevlogEntry) {
	return entry.id.split("/").at(-1) ?? entry.id;
}

export function devlogHref(entry: DevlogEntry) {
	return `${projectHref(entry.data.project.id)}/devlog/${devlogSlug(entry)}`;
}

export function sortProjects(entries: ProjectEntry[]) {
	return entries.sort(
		(left, right) =>
			left.data.sortOrder - right.data.sortOrder || left.data.name.localeCompare(right.data.name),
	);
}

export function sortDevlogs(entries: DevlogEntry[]) {
	return entries.sort(
		(left, right) =>
			right.data.publishedAt.valueOf() - left.data.publishedAt.valueOf() ||
			left.id.localeCompare(right.id),
	);
}

export async function getPublishedProjects() {
	return sortProjects(await getCollection("projects", isPublished));
}

export async function getPublishedDevlogs() {
	const [entries, projects] = await Promise.all([
		getCollection("devlogs", isPublished),
		getCollection("projects", isPublished),
	]);
	const publishedProjectIds = new Set(projects.map((project) => project.id));

	for (const entry of entries) {
		const directory = entry.id.split("/")[0];

		if (directory !== entry.data.project.id) {
			throw new Error(
				`Dev log entry "${entry.id}" must be stored under the "${entry.data.project.id}" directory.`,
			);
		}
	}

	return sortDevlogs(
		entries.filter((entry) => publishedProjectIds.has(entry.data.project.id)),
	);
}

export function getProjectDevlogs(project: ProjectEntry | string, entries: DevlogEntry[]) {
	const projectId = typeof project === "string" ? project : project.id;
	return sortDevlogs(entries.filter((entry) => entry.data.project.id === projectId));
}

export function projectDomain(project: ProjectEntry) {
	return project.data.website
		? new URL(project.data.website).hostname.replace(/^www\./, "")
		: "In development";
}

export function createProjectDossier(
	project: ProjectEntry,
	devlogs: DevlogEntry[],
	logLimit = 3,
): ProjectDossier {
	const projectDevlogs = getProjectDevlogs(project, devlogs);

	return {
		slug: project.id,
		name: project.data.name,
		domain: projectDomain(project),
		description: project.data.description,
		detailHref: projectHref(project),
		productionHref: project.data.website,
		status: project.data.status.label,
		statusDetail: project.data.status.detail,
		statusTone: project.data.status.tone,
		support: project.data.support.label,
		supportDetail: project.data.support.detail,
		supportHref: project.data.support.href,
		devlogCount: projectDevlogs.length,
		log: projectDevlogs.slice(0, logLimit).map((entry) => ({
			href: devlogHref(entry),
			date: formatDate(entry.data.publishedAt),
			datetime: toDateTime(entry.data.publishedAt),
			title: entry.data.title,
			summary: entry.data.summary,
		})),
	};
}

export function createProjectDossiers(
	projects: ProjectEntry[],
	devlogs: DevlogEntry[],
	logLimit = 3,
): ProjectDossier[] {
	return projects
		.filter((project) => project.data.featured)
		.map((project) => createProjectDossier(project, devlogs, logLimit));
}
