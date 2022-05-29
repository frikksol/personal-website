import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		files: {
			assets: 'static',
			hooks: 'client/hooks',
			lib: 'client/lib',
			params: 'client/params',
			routes: 'client/routes',
			serviceWorker: 'client/service-worker',
			template: 'client/app.html'
		  },
	},	
};

export default config;
