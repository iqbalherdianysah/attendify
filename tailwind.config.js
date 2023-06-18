/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				primary: "#EDF1F7",
				secondary: "#4154F1",
				title: "#012970",
				sekunder: "#5F6EF1",
				username: "#CED4DA",
				akua: "#0DCAF0",
			},
			container: {
				center: true,
				padding: "1rem",
			},
			fontFamily: {
				nunito: ['Nunito', 'sans-serif'],
				roboto: ['Roboto', 'sans-serif'],
			},
		},
	},
	plugins: [require("daisyui")],
};
