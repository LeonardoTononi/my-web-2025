<script>
	import { onMount } from 'svelte';
	export let author;
	export let siteLanguage;
	export let siteTitle;
	export let siteTitleAlt;
	export let siteUrl;
	export let description;

	let entityHash;

	async function generateHash(str) {
		const encoder = new TextEncoder();
		const data = encoder.encode(str);
		const hashBuffer = await crypto.subtle.digest('SHA-256', data);
		const hashArray = Array.from(new Uint8Array(hashBuffer));
		return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
	}

	onMount(async () => {
		entityHash = await generateHash(author);
	});

	const personSchema = {
		'@type': 'Person',
		'@id': `${siteUrl}/#/schema/person/${entityHash}`,
		name: author,
		url: siteUrl
	};

	const organizationSchema = {
		'@type': 'Organization',
		'@id': `${siteUrl}/#organization`,
		name: siteTitle,
		url: siteUrl,
		logo: {
			'@type': 'ImageObject',
			url: `${siteUrl}/logo.png`,
			width: 512,
			height: 512
		}
	};

	const schemaOrgWebsite = {
		'@type': 'WebSite',
		'@id': `${siteUrl}/#website`,
		url: siteUrl,
		name: siteTitle,
		description: description,
		publisher: {
			'@id': `${siteUrl}/#organization`
		},
		potentialAction: [
			{
				'@type': 'SearchAction',
				target: `${siteUrl}/?s={query}`,
				'query-input': 'required name=query'
			}
		],
		inLanguage: siteLanguage
	};

	const schemaOrgArray = [personSchema, organizationSchema, schemaOrgWebsite];
	const schemaOrgObject = {
		'@context': 'https://schema.org',
		'@graph': schemaOrgArray
	};

	$: jsonLdScript = `<script type="application/ld+json">\${jsonLdString}<\/script>`;
</script>

<svelte:head>
	{@html jsonLdScript}
</svelte:head>
