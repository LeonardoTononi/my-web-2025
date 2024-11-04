<script>
    import hash from 'object-hash';
    export let author;
    export let siteLanguage;
    export let siteTitle; 
    export let siteTitleAlt;
    export let siteUrl;
    export let description;

    const entityHash = hash({ author }, { algorithm: 'md5' });

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

    const softwareAppSchema = {
        '@type': 'SoftwareApplication',
        name: siteTitle,
        description: description,
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web',
        offers: {
            '@type': 'Offer',
            price: '50',
            priceCurrency: 'EUR',
            priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0]
        }
    };

    const schemaOrgArray = [personSchema, organizationSchema, schemaOrgWebsite, softwareAppSchema];
    const schemaOrgObject = {
        '@context': 'https://schema.org',
        '@graph': schemaOrgArray
    };

    let jsonLdString = JSON.stringify(schemaOrgObject);
    let jsonLdScript = `
      <script type="application/ld+json">
        ${jsonLdString}
      ${'<'}/script>
    `;
</script>

<svelte:head>
    {@html jsonLdScript}
</svelte:head>