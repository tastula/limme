import App from './App.svelte';
import appProps from './settings';

document.title = `${appProps.title} | ${document.title}`;

const app = new App({
	target: document.body,
	props: {
		props: appProps,
	},
});

export default app;
