module.exports = {
	extends: [
		"eslint:recommended",
		// "plugin:vue/vue3-recommended",
		"plugin:vue/recommended" // Use this if you are using Vue.js 2.x.
	],
	env: {
		"node": true,
	},
	parser: "@babel/eslint-parser",
};