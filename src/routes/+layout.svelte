<script>
	import '../app.css';
	import { dev } from '$app/environment';
	let { children } = $props();
	import { inject } from '@vercel/analytics';
	inject({ mode: dev ? 'development' : 'production' });
</script>

{@render children()}
