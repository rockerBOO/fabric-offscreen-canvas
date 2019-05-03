# React Starter

React 16.8 starter with StyledComponents 5, Normalize.css 8
Webpack 4 with React Hot Loader, React Hot Dom, Babel 7, ESLint 5, Stylelint 10, Jest 24

This is what I currently like to use as a starter mix. Has Workbox added but not implemented. Can be implemented like this in your application.

```
if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker.register('/workbox.js')
	})
}
```
