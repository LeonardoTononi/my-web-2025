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
						<div class="mb-8 flex flex-wrap items-end justify-between gap-4">
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

						<ul class="space-y-4">
							{#each group.items as project}
								<li>
									<a
										href={project.url}
										target="_blank"
										rel="noopener noreferrer"
										class="group grid gap-5 rounded-3xl border border-white/[0.06] bg-white/[0.02] p-4 transition duration-300 hover:border-yellow-400/25 hover:bg-white/[0.04] sm:p-5 lg:grid-cols-[minmax(0,20rem)_1fr_auto] lg:items-center lg:gap-8"
									>
										<div
											class="relative aspect-[16/10] overflow-hidden rounded-2xl ring-1 ring-white/10 transition duration-500 group-hover:ring-yellow-400/35"
										>
											<img
												src={project.screenshot}
												alt=""
												class="h-full w-full object-cover object-top transition duration-700 ease-out group-hover:scale-[1.04]"
												width={1440}
												height={900}
												loading="lazy"
											/>
											<div
												class="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgb(19,18,18)]/40 via-transparent to-transparent"
												aria-hidden="true"
											></div>
										</div>

										<div class="min-w-0 px-1 lg:px-0">
											<div class="mb-3 flex flex-wrap items-center gap-3">
												<img
													class="h-9 w-9 rounded-full object-cover ring-1 ring-white/15"
													src={project.logo}
													alt=""
													width={36}
													height={36}
												/>
												<div class="min-w-0">
													<h3
														class="text-xl font-medium text-white transition group-hover:text-yellow-400"
													>
														{project.name}
													</h3>
													<p class="text-sm text-stone-500 transition group-hover:text-stone-400">
														{project.url.replace(/^https?:\/\//, '')}
													</p>
												</div>
											</div>

											<p class="max-w-2xl text-base leading-relaxed text-stone-400">
												{project.description}
											</p>

											<div class="mt-4 flex flex-wrap items-center gap-2">
												<span
													class="rounded-full border border-yellow-400/25 bg-yellow-400/5 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-[0.12em] text-yellow-400/90"
												>
													{project.type}
												</span>
												{#each project.techStack as tech}
													<span
														class="rounded-full border border-white/10 px-2.5 py-0.5 text-xs tracking-wide text-stone-400"
													>
														{tech}
													</span>
												{/each}
											</div>
										</div>

										<span
											class="inline-flex items-center gap-1.5 self-start rounded-full border border-white/10 px-3.5 py-2 text-sm font-medium text-stone-400 transition group-hover:border-yellow-400/30 group-hover:text-yellow-400 lg:self-center"
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
