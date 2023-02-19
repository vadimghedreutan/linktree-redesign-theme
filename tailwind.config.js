/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				oswald: "var(--font-oswald)",
				popins: "var(--font-popins)",
			},
		},
	},
	plugins: [],
}
