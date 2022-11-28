import { sveltekit } from '@sveltejs/kit/vite';

const config = {
	plugins: [sveltekit()],
	server: {
		port: 4001,
		strictPort: false
	},
	preview: {
		port: 4001,
		strictPort: false
	}
};
export default config;
