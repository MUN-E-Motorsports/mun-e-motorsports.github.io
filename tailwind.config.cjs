/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'mun-burgundy': '#923343',
				'mun-grey': '#737577',
				'munemotorsports-navy': '#20364d',
				'munemotorsports-yellow': '#eabc2a',
				'munemotorsports-red': '#6d2636',
				'munemotorsports-grey': '#20364d',
			}
		},
	},
	plugins: [],
}
