<script>
	import { projects, projectGroups } from '$lib/projects.js';

	const grouped = projectGroups.map((group) => ({
		...group,
		items: projects.filter((project) => project.status === group.id)
	}));
</script>

<section id="projects" class="relative scroll-mt-24 pb-28 pt-8">
	<div class="mx-auto max-w-6xl px-5 lg:px-8">
		<div class="mb-16 max-w-xl">
			<p class="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-yellow-400/90">
				What I build
			</p>
			<h2 class="mb-4 text-4xl font-medium text-white sm:text-5xl">Projects</h2>
			<p class="text-lg leading-relaxed text-stone-400">
				Client sites and products I’ve shipped — hospitality, coaching, therapy, and agency work.
			</p>
		</div>

		<div class="space-y-20">
			{#each grouped as group}
				{#if group.items.length}
					<section aria-labelledby={`projects-${group.id}`}>
						<div class="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-white/[0.06] pb-5">
							<div>
								<p
									id={`projects-${group.id}`}
									class="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-yellow-400/90"
								>
									{group.label}
								</p>
								<p class="max-w-md text-sm leading-relaxed text-stone-500">{group.blurb}</p>
							</div>
							<span class="text-xs tracking-[0.16em] text-stone-600">
								{String(group.items.length).padStart(2, '0')}
							</span>
						</div>

						<ul class="divide-y divide-white/[0.06]">
							{#each group.items as project}
								<li>
									<a
										href={project.url}
										target="_blank"
										rel="noopener noreferrer"
										class="group grid gap-6 py-10 transition-colors lg:grid-cols-[minmax(0,18rem)_1fr_auto] lg:items-start lg:gap-10"
									>
										<div
											class="relative aspect-[16/10] overflow-hidden ring-1 ring-white/10 transition duration-500 group-hover:ring-yellow-400/30"
										>
											<img
												src={project.screenshot}
												alt=""
												class="h-full w-full object-cover object-top transition duration-700 ease-out group-hover:scale-[1.03]"
												width={1440}
												height={900}
												loading="lazy"
											/>
											<div
												class="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgb(19,18,18)]/35 via-transparent to-transparent"
												aria-hidden="true"
											></div>
										</div>

										<div class="min-w-0">
											<div class="mb-3 flex flex-wrap items-center gap-2.5">
												<img
													class="h-8 w-8 rounded-md object-contain ring-1 ring-white/10"
													src={project.logo}
													alt=""
													width={32}
													height={32}
												/>
												<h3
													class="text-xl font-medium text-white transition group-hover:text-yellow-400"
												>
													{project.name}
												</h3>
												<span
													class="rounded-md border border-yellow-400/30 px-2 py-0.5 text-[11px] font-medium uppercase tracking-[0.14em] text-yellow-400/90"
												>
													{group.label}
												</span>
												<span
													class="rounded-md border border-white/10 px-2 py-0.5 text-[11px] tracking-[0.12em] text-stone-500"
												>
													{project.type}
												</span>
											</div>

											<p class="mb-3 text-sm text-stone-500 transition group-hover:text-stone-400">
												{project.url.replace(/^https?:\/\//, '')}
											</p>
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
											class="inline-flex items-center gap-1.5 self-start text-sm font-medium text-stone-500 transition group-hover:text-yellow-400 lg:pt-1"
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
					</section>
				{/if}
			{/each}
		</div>
	</div>
</section>
