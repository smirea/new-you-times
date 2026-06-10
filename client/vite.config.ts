import { defineConfig } from 'vite';
import { env } from 'node:process';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';

const clientPort = readPort('CLIENT_PORT', 6060);
const apiPort = readPort('API_PORT', 6061);
const allowedHosts = env.CLIENT_HOST ? [env.CLIENT_HOST] : undefined;

function readPort(name: 'CLIENT_PORT' | 'API_PORT', fallback: number) {
	const port = Number(env[name] ?? fallback);
	if (Number.isNaN(port)) throw new Error(`${name} must be a valid number`);
	return port;
}

// https://vite.dev/config/
export default defineConfig({
	resolve: {
		tsconfigPaths: true,
	},
	server: {
		host: '0.0.0.0',
		allowedHosts,
		port: clientPort,
		strictPort: true,
		proxy: {
			'/api': {
				target: `http://localhost:${apiPort}`,
				changeOrigin: true,
				secure: false,
				rewrite: (path: string) => path.replace(/^\/api/, ''),
			},
		},
	},
	plugins: [svelte(), tailwindcss() as any],
});
