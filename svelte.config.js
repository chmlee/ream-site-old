import adapter from '@sveltejs/adapter-auto';

import wasmPack from 'vite-plugin-wasm-pack';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

        ssr: false,

        vite: () => ({
            plugins: [
                wasmPack('./ream')
            ]
        })
	}
};

export default config;
