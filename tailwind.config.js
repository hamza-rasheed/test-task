/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				text: {
					primary: "#1E293B",
					secondary: "#475569",
					footerLogo: "#50A3B1",
				},
				button: {
					primary: "#49C7AB",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
			},
			fontFamily: {
				cabinetGroteskLight: ["Cabinet Grotesk Light", "sans-serif"],
				cabinetGroteskRegular: ["Cabinet Grotesk Regular", "sans-serif"],
				cabinetGroteskMedium: ["Cabinet Grotesk Medium", "sans-serif"],
				cabinetGroteskSemiBold: ["Cabinet Grotesk Semi-Bold", "sans-serif"],
				cabinetGroteskBold: ["Cabinet Grotesk Bold", "sans-serif"],
				cabinetGroteskBolder: ["Cabinet Grotesk Bolder", "sans-serif"],
				cabinetGroteskBlack: ["Cabinet Grotesk Black", "sans-serif"],
			},
			animation: {
				"infinite-scroll": "scroll 10s linear infinite",
			},
			keyframes: {
				scroll: {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(-50%)" }, // Moves half the width for seamless effect
				},
			},
		},
	},
	plugins: [],
};
