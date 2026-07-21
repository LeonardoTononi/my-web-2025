<script>
	import { onMount } from 'svelte';
	import SchemaOrg from './seo-schema.svelte';
	export let secondaryTitle = '';
	export let image = '/leo-image.png';
	export let description =
		'Leonardo Tononi — ex online poker player, web developer today, studying markets and building toward hospitality. A personal site about who I am and what I ship.';
	const siteUrl = 'https://leonardotononi.com';
	const author = 'Leonardo Tononi';
	const siteLanguage = 'en';
	const siteTitle = 'Leonardo Tononi — Web Developer';
	const siteTitleAlt = 'Leonardo Tononi';
	const keywords =
		'Leonardo Tononi, web developer, poker player, trader, investor, hospitality, SvelteKit, portfolio';

	const schemaOrgProps = {
		author,
		siteLanguage,
		siteTitle,
		siteTitleAlt,
		siteUrl,
		description
	};

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>{siteTitle}{secondaryTitle ? ` ${secondaryTitle}` : ''}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<meta name="author" content={author} />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
	<link rel="canonical" href={siteUrl} />

	<meta property="og:site_name" content={siteTitle} />
	<meta property="og:title" content={`${siteTitle}${secondaryTitle ? ` ${secondaryTitle}` : ''}`} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:image" content={`${siteUrl}${image}`} />
	<meta property="og:image:alt" content="Leonardo Tononi" />
	<meta property="og:locale" content="en_US" />

	<meta name="twitter:site" content="@leonardotononi" />
	<meta name="twitter:creator" content="@leonardotononi" />
	<meta
		name="twitter:title"
		content={`${siteTitle}${secondaryTitle ? ` ${secondaryTitle}` : ''}`}
	/>
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={`${siteUrl}${image}`} />
	<meta name="twitter:image:alt" content="Leonardo Tononi" />
	<meta name="twitter:card" content="summary_large_image" />

	{#if mounted}
		<SchemaOrg {...schemaOrgProps} />
	{/if}
</svelte:head>
