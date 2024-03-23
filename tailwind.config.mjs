/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	 // Or if using `src` directory:
	 "./src/**/*.{js,ts,jsx,tsx}",

],
	theme: {
		extend: {
			screens:{

				"3xl":"1920px"
			}
		},
	},
	plugins: [],
}

