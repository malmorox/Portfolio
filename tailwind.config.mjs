import { nextui } from "@nextui-org/react"

export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
	},
	plugins: [
		nextui({
			prefix: "nextui",
			addCommonColors: false,
			defaultTheme: "dark",
			defaultExtendTheme: "dark",
			layout: {},
			themes: {
				light: {
					layout: {},
					colors: {},
				},
				dark: {
					layout: {},
					colors: {},
				},
			},
		}),
	]
}
