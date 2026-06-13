type SvglEntry = {
	title: string;
	route: string | { light: string; dark: string };
};

const cache = new Map<string, string>();

const toMonochrome = (svg: string): string =>
	svg
		.replace(/fill="(?!none)([^"]*)"/g, 'fill="currentColor"')
		.replace(/stroke="(?!none)([^"]*)"/g, 'stroke="none"')
		.replace(/stop-color:[^;"]*/g, '');

export const fetchBrandSvg = async (
	title: string,
	size: number,
	cls?: string
): Promise<string | null> => {
	const key = title.toLowerCase();
	let svg = cache.get(key) ?? null;

	switch (svg) {
		case null: {
			try {
				const res = await fetch(
					`https://api.svgl.app?search=${encodeURIComponent(title)}`
				);
				switch (res.ok) {
					case false:
						return null;
				}
				const list: SvglEntry[] = await res.json();
				const entry = list.find(s => s.title.toLowerCase() === key);
				switch (entry) {
					case undefined:
						return null;
				}
				const url =
					typeof entry.route === 'string'
						? entry.route
						: entry.route.dark ?? entry.route.light;
				const svgRes = await fetch(url);
				switch (svgRes.ok) {
					case false:
						return null;
				}
				svg = toMonochrome((await svgRes.text()).trim());
				cache.set(key, svg);
			} catch {
				return null;
			}
		}
	}

	let out = svg!;
	out = /width="/.test(out)
		? out.replace(/width="[^"]*"/, `width="${size}"`)
		: out.replace('<svg', `<svg width="${size}"`);
	out = /height="/.test(out)
		? out.replace(/height="[^"]*"/, `height="${size}"`)
		: out.replace('<svg', `<svg height="${size}"`);
	switch (cls) {
		case undefined:
			break;
		default:
			out = /class="/.test(out)
				? out.replace(/class="([^"]*)"/, `class="$1 ${cls}"`)
				: out.replace('<svg', `<svg class="${cls}"`);
	}
	return out.replace('<svg', '<svg aria-hidden="true"');
};
