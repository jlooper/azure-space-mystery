module.exports = {
	title: 'Azure Space Mystery',
	description: 'Enjoy the Journey',
	postcss: {
		plugins: [require('autoprefixer'), require('tailwindcss')('./tailwind.config.js')],
	},
	dest: 'game/.vuepress/dist/',
	base: '/AzureSpaceMystery/',
	themeConfig: {
		search: false,
	},
	devServer: {
		proxy: {
			'/api': {
				target: 'http://localhost:7071',
				ws: true,
				changeOrigin: true,
			},
		},
	},
};
