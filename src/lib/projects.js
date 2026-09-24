/**
 * @typedef {'live'} ProjectStatus
 * @typedef {{
 *   url: string;
 *   logo: string;
 *   screenshot: string;
 *   name: string;
 *   description: string;
 *   techStack: string[];
 *   status: ProjectStatus;
 *   type: string;
 * }} Project
 */

/** @type {Project[]} */
export const projects = [
	{
		url: 'https://hotelvittoriamaderno.it',
		logo: '/projects/hotel-vittoria-logo.png',
		screenshot: '/projects/hotel-vittoria-shot.jpg',
		name: 'Hotel Vittoria',
		description:
			'Elegant hotel website with online room booking, amenities, and a clear guest journey from discovery to reservation.',
		techStack: ['SvelteKit', 'Booking engine'],
		status: 'live',
		type: 'Hospitality'
	},
	{
		url: 'https://borgoanticoapartments.com',
		logo: '/projects/borgo-antico-logo.png',
		screenshot: '/projects/borgo-antico-shot.jpg',
		name: 'Borgo Antico Apartments',
		description:
			'Holiday apartments site on Lake Garda — renovated flats, shared pool and olive garden, with a clear path to book direct.',
		techStack: ['SvelteKit', 'Booking'],
		status: 'live',
		type: 'Hospitality'
	},
	{
		url: 'https://www.sitochefunziona.it',
		logo: '/projects/sitochefunziona-logo.svg',
		screenshot: '/projects/sitochefunziona-shot.jpg',
		name: 'SitoCheFunziona',
		description:
			'Agency site for rebuilding business websites that convert — free mockups, clearer journeys, more direct enquiries and bookings.',
		techStack: ['Next.js'],
		status: 'live',
		type: 'Agency'
	},
	{
		url: 'https://terapiaconbernardita.com',
		logo: '/projects/bernardita-logo.svg',
		screenshot: '/projects/bernardita-shot.jpg',
		name: 'Terapia con Bernardita',
		description:
			'Online therapy site for psychologist Bernardita García Celedón — session booking, bilingual ES/EN, psychoanalysis and couple therapy.',
		techStack: ['SvelteKit', 'Booking'],
		status: 'live',
		type: 'Health'
	},
	{
		url: 'https://joaquinatrainer.com',
		logo: '/projects/joaquina-logo.png',
		screenshot: '/projects/joaquina-shot.jpg',
		name: 'Joaquina Trainer',
		description:
			'Personal trainer & health coach site with custom training packages, clear pricing, and a direct path to start training.',
		techStack: ['SvelteKit'],
		status: 'live',
		type: 'Coaching'
	}
];

/** @type {{ id: ProjectStatus; label: string; blurb: string }[]} */
export const projectGroups = [
	{
		id: 'live',
		label: 'Live',
		blurb: 'Active client sites and products online now.'
	}
];
