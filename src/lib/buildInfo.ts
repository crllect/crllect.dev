import { execFileSync } from 'node:child_process';

const resolveBuildSha = (): string | null => {
	if (process.env.GITHUB_SHA) return process.env.GITHUB_SHA;
	try {
		return execFileSync('git', ['rev-parse', 'HEAD'], {
			stdio: ['ignore', 'pipe', 'ignore']
		})
			.toString()
			.trim();
	} catch {
		return null;
	}
};

export const buildSha = resolveBuildSha();
