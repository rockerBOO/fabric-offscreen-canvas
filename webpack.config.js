/* eslint-env node */
const HtmlPlugin = require('html-webpack-plugin')
const WebpackModules = require('webpack-modules')
const TerserPlugin = require('terser-webpack-plugin')

const webpackConfig = env => {
	return {
		mode: env === 'production' ? 'production' : 'development',
		devtool: env === 'production' ? 'cheap-source-maps' : 'eval',
		entry: {
			main: './src/index.js',
			workbox: './src/workbox.js'
		},
		module: {
			rules: [
				{ test: /\.m?js$/, exclude: /node_modules/, loader: 'babel-loader' }
			]
		},
		plugins: [
			new WebpackModules(),
			new HtmlPlugin({
				template: './src/index.ejs',
				title: 'Hello',
				chunks: ['main'],
				hash: true,
				meta: {
					viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
				}
			})
		],
		resolve: {
			alias: {
				'react-dom': '@hot-loader/react-dom'
			}
		},
		optimization: {
			minimizer: [
				new TerserPlugin({
					cache: true,
					parallel: true,
					sourceMap: env === 'production',
					terserOptions: {
						// https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
					}
				})
			]
		}
	}
}

module.exports = webpackConfig
