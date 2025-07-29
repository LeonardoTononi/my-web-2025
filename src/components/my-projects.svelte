<script>
	const myProjects = [
		{
			url: 'https://vittoriahotel.eu',
			logo: 'https://vittoriahotel.eu/favicon.ico',
			name: 'Hotel Vittoria',
			description:
				'A modern and elegant hotel website for Hotel Vittoria, featuring online room booking, detailed information about amenities and services, and a user-friendly interface for guests to explore and reserve their stay with ease.',
			techStack: ['SvelteKit', 'Booking engine']
		},
		{
			url: 'https://tradevault.app',
			logo: 'https://tradevault.app/logo.png',
			name: 'TradeVault',
			description:
				'A comprehensive trading journal platform that helps traders track and analyze their performance. Record your trades, review your strategies with detailed analytics, and make data-driven decisions. Features an intuitive interface that gets you started in minutes, plus lifetime access with a single payment.',
			techStack: ['SvelteKit', 'Supabase', 'Stripe']
		}
	];
</script>

<section class="relative overflow-hidden pb-32 pt-24">
	<div class="container mx-auto mb-12 px-4">
		<h2
			class="font-heading font-custom-text mx-auto mb-2 max-w-xl text-center text-6xl font-bold text-white sm:text-7xl"
		>
			Current Projects
		</h2>
		<p class="mx-auto mb-16 max-w-lg text-center text-lg text-gray-100">
			Check out what I'm currently working on. These projects showcase my skills in web development.
		</p>
		<div class="flex flex-col place-items-center gap-2 lg:flex-row">
			{#each myProjects as project}
				<div class="grid w-full rounded-2xl bg-gray-600/20 p-8">
					<a class="group" href={project.url}>
						<div class="mb-4 flex items-center gap-2">
							<img
								class="h-6 w-6 transform rounded-md transition duration-500 ease-out hover:scale-110"
								src={project.logo}
								alt={project.name}
								width={24}
								height={24}
							/>
							<h3
								class="font-heading font-custom-text text-xl font-semibold text-white group-hover:underline"
							>
								{project.name}
							</h3>
						</div>

						<p class="mb-5 text-base text-gray-100">
							{project.description}
						</p>
					</a>
					<div class="mb-4 flex flex-wrap gap-2">
						{#each project.techStack as tech}
							<span class="rounded-full bg-gray-700/50 px-3 py-1 text-sm text-gray-200">{tech}</span
							>
						{/each}
					</div>
					<a
						class="btn btn-sm place-self-end border-none bg-yellow-400 text-base font-medium text-black hover:bg-yellow-500"
						href={project.url}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-3 w-3"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
							<polyline points="15 3 21 3 21 9"></polyline>
							<line x1="10" y1="14" x2="21" y2="3"></line>
						</svg>
						Learn more
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>
