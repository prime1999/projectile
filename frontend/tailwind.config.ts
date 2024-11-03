import type { Config } from "tailwindcss";

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		fontFamily: {
			inter: ["var(--font-inter)"],
			kanit: ["var(--font-kanit)"],
			nova: ["var(--font-nova)"],
		},
		extend: {
			colors: {
				blue: {
					100: "#B4C6EE",
					400: "#417BFF",
					500: "#3371FF",
				},
				red: {
					400: "#DD4F56",
					500: "#DC4349",
				},
				dark: {
					100: "#09111F",
					200: "#0B1527",
					300: "#0F1C34",
					350: "#12213B",
					400: "#27344D",
					500: "#2E3D5B",
				},
				darkBlue: "#326789",
				black: "#1A1A1A",
				light: "#E9EEF2",
				darkBg: "#09090B",
				darkBorder: "#27272A",
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",

				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			backgroundImage: {
				doc: "url(/png/doc.png)",
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
