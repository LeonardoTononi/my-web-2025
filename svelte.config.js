import static_adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// Using static adapter for static site generation
		adapter: static_adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html', // Set fallback for SPA behavior
			precompress: false,
			strict: true,
			generateRobotsTxt: true
		}),
		prerender: {
			entries: ['*'] // Prerender all routes
		}
	}
};

export default config;