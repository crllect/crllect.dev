import { useEffect, useState } from 'preact/hooks';

type CommitBadgeProps = {
	owner: string;
	name: string;
	url: string;
	buildSha: string | null;
};

const short = (sha: string) => sha.slice(0, 7);

const CommitBadge = ({ owner, name, url, buildSha }: CommitBadgeProps) => {
	const [isStale, setIsStale] = useState(false);

	useEffect(() => {
		if (!buildSha) return;
		let alive = true;
		fetch(`https://api.github.com/repos/${owner}/${name}/commits/main`, {
			headers: { Accept: 'application/vnd.github+json' }
		})
			.then(r => (r.ok ? r.json() : null))
			.then(d => {
				if (alive && d?.sha)
					setIsStale(short(String(d.sha)) !== short(buildSha));
			})
			.catch(() => {});
		return () => {
			alive = false;
		};
	}, [owner, name, buildSha]);

	return (
		<a
			class="commit-badge mono"
			href={url}
			target="_blank"
			rel="noreferrer"
		>
			<span
				class={`commit-dot${isStale ? ' is-stale' : ''}`}
				aria-hidden="true"
			/>
			{buildSha ? `#${short(buildSha)}` : '#·······'}
		</a>
	);
};

export default CommitBadge;
