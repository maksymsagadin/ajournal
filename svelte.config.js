import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),

		vite: {
			server: {
				hmr: {
					clientPort: process.env.HMR_HOST ? 5173 : 3000,
					host: process.env.HMR_HOST ? process.env.HMR_HOST.substring('httpsL//'.length) : 'localhost'
				}
			}
		}
	}
};

export default config;
