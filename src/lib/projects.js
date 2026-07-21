/** @typedef {{ url: string; logo: string; name: string; description: string; techStack: string[] }} Project */

/** @type {Project[]} */
export const projects = [
	{
		url: 'https://vittoriahotel.eu',
		logo: 'https://vittoriahotel.eu/favicon.ico',
		name: 'Hotel Vittoria',
		description:
			'Elegant hotel website with online room booking, amenities, and a clear guest journey from discovery to reservation.',
		techStack: ['SvelteKit', 'Booking engine']
	},
	{
		url: 'https://tradevault.app',
		logo: 'https://tradevault.app/logo.png',
		name: 'TradeVault',
		description:
			'Trading journal platform to log trades, review strategies with analytics, and make clearer decisions — lifetime access, one payment.',
		techStack: ['SvelteKit', 'Supabase', 'Stripe']
	},
	{
		url: 'https://terapiaconbernardita.com',
		logo: 'https://www.terapiaconbernardita.com/favicon.svg',
		name: 'Terapia con Bernardita',
		description:
			'Online therapy site for psychologist Bernardita García Celedón — session booking, bilingual ES/EN, psychoanalysis and couple therapy.',
		techStack: ['SvelteKit', 'Booking']
	},
	{
		url: 'https://joaquinatrainer.com',
		logo: 'https://www.joaquinatrainer.com/favicon.ico',
		name: 'Joaquina Trainer',
		description:
			'Personal trainer & health coach site with custom training packages, clear pricing, and a direct path to start training.',
		techStack: ['SvelteKit']
	}
];
