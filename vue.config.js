module.exports = {
	publicPath: process.env.NODE_ENV === "production" ? '/ui5-webcomponents-sample-vue' : '/',
	// configureWebpack: {
	// 	module: {
	// 		rules: [
	// 			{
	// 				test: [/cldr\/.*\.json$/, /i18n\/.*\.json$/],
	// 				loader: 'file-loader',
	// 				options: {
	// 					name: 'static/media/[name].[hash:8].[ext]',
	// 				},
	// 				type: 'javascript/auto'
	// 			}
	// 		]
	// 	}
	// }
};
