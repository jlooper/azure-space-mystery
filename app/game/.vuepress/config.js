module.exports = {
	title: 'SpaceQuest',
	description: 'Enjoy the Journey',
	postcss: {
		plugins: [require('autoprefixer'), require('tailwindcss')('./tailwind.config.js')],
	},
	themeConfig: {
		search: false,
	},
};
