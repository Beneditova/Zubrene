import { businessTheory } from "./businessTheory";
import { reactRepo } from "./react";

export type RepoFile = {
	path: string;
	code: string;
}

export type Repo = {
	label: string;
	url: string;
	files: RepoFile[];
}

export const repoOptions: Repo[] = [
	businessTheory,
	reactRepo,
]