module.exports = {
	env: {
		browser: true,
		es2021: true,
		amd: true,
		node: true,
	},
	extends: ['eslint:recommended', 'prettier'],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {},
};
 1 change: 1 addition & 0 deletions1  
.gitignore
@@ -0,0 +1 @@
node_modules
 6 changes: 6 additions & 0 deletions6  
.prettierrc
@@ -0,0 +1,6 @@
{
	"tabWidth": 4,
	"useTabs": true,
	"semi": true,
	"singleQuote": true
}
