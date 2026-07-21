<script>
	import { projects } from '$lib/projects.js';
</script>

<section id="projects" class="relative scroll-mt-24 pb-28 pt-8">
	<div class="mx-auto max-w-6xl px-5 lg:px-8">
		<div class="mb-14 max-w-xl">
			<p class="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-yellow-400/90">
				What I build
			</p>
			<h2 class="mb-4 text-4xl font-medium text-white sm:text-5xl">Projects</h2>
			<p class="text-lg leading-relaxed text-stone-400">
				Client sites and products I’ve shipped — hospitality, coaching, therapy, and trading tools.
			</p>
		</div>

		<ul class="divide-y divide-white/[0.06] border-y border-white/[0.06]">
			{#each projects as project}
				<li>
					<a
						href={project.url}
						target="_blank"
						rel="noopener noreferrer"
						class="group grid gap-4 py-8 transition-colors sm:grid-cols-[auto_1fr_auto] sm:items-start sm:gap-8 sm:py-10"
					>
						<div class="flex items-center gap-3 sm:pt-1">
							<img
								class="h-9 w-9 rounded-lg object-contain ring-1 ring-white/10 transition duration-300 group-hover:scale-105"
								src={project.logo}
								alt=""
								width={36}
								height={36}
							/>
							<span
								class="text-xl font-medium text-white transition group-hover:text-yellow-400 sm:hidden"
							>
								{project.name}
							</span>
						</div>

						<div class="min-w-0">
							<div class="mb-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
								<h3
									class="hidden text-xl font-medium text-white transition group-hover:text-yellow-400 sm:block"
								>
									{project.name}
								</h3>
								<span class="text-sm text-stone-500 transition group-hover:text-stone-400">
									{project.url.replace(/^https?:\/\//, '')}
								</span>
							</div>
							<p class="max-w-2xl text-base leading-relaxed text-stone-400">
								{project.description}
							</p>
							<div class="mt-4 flex flex-wrap gap-2">
								{#each project.techStack as tech}
									<span
										class="rounded-md border border-white/10 px-2.5 py-0.5 text-xs tracking-wide text-stone-400"
									>
										{tech}
									</span>
								{/each}
							</div>
						</div>

						<span
							class="inline-flex items-center gap-1.5 self-start text-sm font-medium text-stone-500 transition group-hover:text-yellow-400 sm:pt-1"
						>
							Visit
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path d="M7 17L17 7" />
								<path d="M7 7h10v10" />
							</svg>
						</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</section>
