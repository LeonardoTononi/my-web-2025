<script>
	import { onMount } from 'svelte';
	import SchemaOrg from './seo-schema.svelte';
	export let secondaryTitle = '';
	export let image = '/leo-image.png';
	export let description =
		"From poker tables to software development, and now to trading charts. I've embraced the art of strategic thinking across different fields, always seeking new challenges and opportunities.";
	const siteUrl = 'https://leonardotononi.com';
	const author = 'Leonardo Tononi';
	const siteLanguage = 'en';
	const siteTitle = 'Leonardo Tononi - Web Developer & Trader';
	const siteTitleAlt = 'Leonardo Tononi Portfolio';
	const keywords =
		'web developer, trader, software engineer, full stack developer, javascript developer, react developer';

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
