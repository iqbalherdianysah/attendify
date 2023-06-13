/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				primary: "#EDF1F7",
				secondary: "#4154F1",
				title: "#012970",
			},
			container: {
				center: true,
				padding: "1rem",
			},
		},
	},
	plugins: [require("daisyui")],
};
