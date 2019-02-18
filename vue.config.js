module.exports = {
	publicPath: './',
	configureWebpack: {
		module: {
			rules: [
				{
					test: [/cldr\/.*\.json$/, /.*\.properties$/],
					loader: 'file-loader',
					options: {
						name: 'static/media/[name].[hash:8].[ext]',
					},
					type: 'javascript/auto'
				}
			]
		}
	}
};
