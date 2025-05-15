import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';


/** @type {import('@sveltejs/kit').Config} */
const config = {

	extensions: ['.svelte', '.md'],
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
		
		})
	],
	kit: {

		adapter: adapter()
	},
	vitePlugin:{

    dynamicCompileOptions({filename }){
      if(filename.includes('node_modules')) {
        return {
					customElement: true,
					runes: false
				}
      }
    }
  }

};

export default config;