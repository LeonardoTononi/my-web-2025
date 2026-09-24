/** @typedef {{ url: string; logo: string; name: string; description: string; techStack: string[] }} Project */

/** @type {Project[]} */
export const projects = [
	{
		url: 'https://hotelvittoriamaderno.it',
		logo: 'https://hotelvittoriamaderno.it/favicon.ico',
		name: 'Hotel Vittoria',
		description:
			'Elegant hotel website with online room booking, amenities, and a clear guest journey from discovery to reservation.',
		techStack: ['SvelteKit', 'Booking engine']
	},
	{
		url: 'https://borgoanticoapartments.com',
		logo: 'https://borgoanticoapartments.com/favicon.ico',
		name: 'Borgo Antico Apartments',
		description:
			'Holiday apartments site on Lake Garda — renovated flats, shared pool and olive garden, with a clear path to book direct.',
		techStack: ['SvelteKit', 'Booking']
	},
	{
		url: 'https://tradevault-test-1.vercel.app',
		logo: 'https://tradevault-test-1.vercel.app/favicon.ico',
		name: 'TradeVault',
		description:
			'Skills showcase web app (vetrina) — a live demo of product UI and full-stack craft, not a shipping trading product.',
		techStack: ['SvelteKit', 'Supabase', 'Stripe']
	},
	{
		url: 'https://www.sitochefunziona.it',
		logo: 'https://www.sitochefunziona.it/favicon.ico',
		name: 'SitoCheFunziona',
		description:
			'Agency site for rebuilding business websites that convert — free mockups, clearer journeys, more direct enquiries and bookings.',
		techStack: ['Next.js']
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
