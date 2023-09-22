/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {}
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#2fd8d3",

					secondary: "#1910cc",

					accent: "#e8a16f",

					neutral: "#1d2a35",

					"base-100": "#3b3842",

					info: "#96d3e4",

					success: "#2ce89c",

					warning: "#f8d330",

					error: "#fd6868"
				}
			}
		]
	},
	plugins: [require("daisyui")]
};
