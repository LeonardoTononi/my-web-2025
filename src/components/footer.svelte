<script>
	import { projects } from '$lib/projects.js';
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
		</div>

		<div class="mt-14 border-t border-white/[0.06] pt-8">
			<p class="text-center text-sm text-stone-500">
				© {new Date().getFullYear()} Leonardo Tononi. All rights reserved.
			</p>
		</div>
	</div>
</footer>
