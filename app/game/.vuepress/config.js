module.exports = {
	title: 'AzureSpaceMystery',
	description: 'Enjoy the Journey',
	postcss: {
		plugins: [require('autoprefixer'), require('tailwindcss')('./tailwind.config.js')],
	},
	dest: 'game/.vuepress/dist/',
	base: '/AzureSpaceRace/',
	themeConfig: {
		search: false,
	},
};
