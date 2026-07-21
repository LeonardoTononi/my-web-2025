<section id="about" class="relative scroll-mt-24 pb-20 pt-4">
	<div class="mx-auto max-w-6xl px-5 lg:px-8">
		<div class="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
			<div>
				<p class="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-yellow-400/90">
					Who I am
				</p>
				<h2 class="mb-4 text-4xl font-medium text-white sm:text-5xl">
					One through-line:<br class="hidden sm:block" />
					<span class="text-stone-400"> decisions under pressure.</span>
				</h2>
			</div>

			<div class="space-y-6 text-lg leading-relaxed text-stone-400">
				<p>
					I spent years as an online poker player — reading odds, managing risk, staying calm when
					the variance got loud. That mindset never left.
				</p>
				<p>
					Today I build websites and digital products as a web developer. On the side I’m studying
					markets to become a trader and investor. Further out, I want to run places people gather —
					bars, hotels, experiences with real atmosphere.
				</p>
				<p class="text-stone-300">
					This site isn’t a pitch deck. It’s a snapshot of where I am, what I ship, and where I’m
					headed.
				</p>
			</div>
		</div>

		<ol class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each steps as step, i}
				<li class="border-t border-white/[0.08] pt-5">
					<span class="mb-3 block text-xs font-medium tracking-[0.18em] text-yellow-400/80">
						{String(i + 1).padStart(2, '0')}
					</span>
					<p class="mb-1.5 text-base font-medium text-white">{step.label}</p>
					<p class="text-sm leading-relaxed text-stone-500">{step.detail}</p>
				</li>
			{/each}
		</ol>
	</div>
</section>

<script>
	const steps = [
		{ label: 'Poker', detail: 'Where I learned edge, discipline, and probability.' },
		{ label: 'Code', detail: 'What I do now — sites and products that ship.' },
		{ label: 'Markets', detail: 'What I’m studying — trading and investing.' },
		{ label: 'Hospitality', detail: 'What’s ahead — bars, hotels, real-world venues.' }
	];
</script>
