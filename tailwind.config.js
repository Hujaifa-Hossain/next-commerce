/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			white: { 100: '#ffffff', 200: '#f7f7f7', 300: '#ffffffcc' },
			yellow: {
				100: '#ffff99',
				200: '#fbbc34',
				300: '#de961a',
				400: '#f4a51c',
			},
			gray: { 100: '#777777', 200: '#242424' },
			blue: '#092143',
		},
	},
	plugins: [],
};
