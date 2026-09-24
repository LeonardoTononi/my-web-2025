<script>
	import { projects } from '$lib/projects.js';

	const socials = [
		{
			label: 'LinkedIn',
			href: 'https://www.linkedin.com/in/leonardo-tononi/',
			icon: 'linkedin'
		},
		{
			label: 'Instagram',
			href: 'https://www.instagram.com/leonardo.tononi/',
			icon: 'instagram'
		}
	];
</script>

<footer class="border-t border-white/[0.06] pb-10 pt-14">
	<div class="mx-auto max-w-6xl px-5 lg:px-8">
		<div class="flex flex-col gap-12 sm:flex-row sm:items-start sm:justify-between">
			<div>
				<p class="logo mb-4 text-2xl text-white">Leonardo</p>
				<a
					href="mailto:leonardotononi@gmail.com"
					class="text-sm text-stone-400 transition hover:text-yellow-400"
				>
					leonardotononi@gmail.com
				</a>
			</div>

			<div>
				<p class="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-stone-500">
					Projects
				</p>
				<ul class="flex flex-col gap-2.5">
					{#each projects as project}
						<li>
							<a
								class="text-sm text-stone-400 transition hover:text-white"
								target="_blank"
								rel="noopener noreferrer"
								href={project.url}
							>
								{project.url.replace(/^https?:\/\//, '').replace(/^www\./, '')}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<div>
				<p class="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-stone-500">
					Social
				</p>
				<div class="flex items-center gap-2">
					{#each socials as social}
						<a
							class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/80 transition-colors hover:border-white/25 hover:bg-white/5 hover:text-white"
							aria-label={social.label}
							href={social.href}
							target="_blank"
							rel="noopener noreferrer"
						>
							{#if social.icon === 'linkedin'}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-5 w-5"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="1.75"
									stroke-linecap="round"
									stroke-linejoin="round"
									aria-hidden="true"
								>
									<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
									<path d="M8 10v6"></path>
									<path d="M8 7.5v.01"></path>
									<path d="M12 16v-4a2 2 0 0 1 4 0v4"></path>
								</svg>
							{:else}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-5 w-5"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="1.75"
									stroke-linecap="round"
									stroke-linejoin="round"
									aria-hidden="true"
								>
									<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
									<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
									<line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
								</svg>
							{/if}
						</a>
					{/each}
				</div>
			</div>
		</div>

		<div class="mt-14 border-t border-white/[0.06] pt-8">
			<p class="text-center text-sm text-stone-500">
				© {new Date().getFullYear()} Leonardo Tononi. All rights reserved.
			</p>
		</div>
	</div>
</footer>
