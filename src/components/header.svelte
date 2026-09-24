<header class="relative overflow-hidden">
	<div class="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-24 pt-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-32 lg:pt-24">
		<div class="text-center lg:text-left">
			<p
				class="animate-fade-up font-custom-text mb-5 text-sm font-medium uppercase tracking-[0.2em] text-yellow-400/90"
			>
				Web developer - Investor
			</p>
			<h1
				data-hero-logo
				class="animate-fade-up delay-1 logo mb-6 text-6xl leading-none text-white sm:text-7xl lg:text-8xl"
			>
				Leonardo
			</h1>
			<p
				class="animate-fade-up delay-2 mx-auto mb-10 max-w-md font-custom-text text-lg leading-relaxed text-stone-400 lg:mx-0 lg:text-xl"
			>
				Ex online poker player building on the web today, studying markets for tomorrow — with
				bars and hotels on the horizon.
			</p>
			<div class="animate-fade-up delay-3 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
				<a
					href="#about"
					class="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-3 text-sm font-medium text-black transition hover:bg-yellow-500"
				>
					My path
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-4 w-4"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M12 5v14M19 12l-7 7-7-7" />
					</svg>
				</a>
				<a
					href="#projects"
					class="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/90 transition hover:border-white/30 hover:bg-white/5"
				>
					See what I build
				</a>
			</div>
		</div>

		<div class="animate-fade-in delay-2 flex justify-center lg:justify-end">
			<div class="portrait">
				<div class="portrait__glow" aria-hidden="true"></div>
				<div class="portrait__orbit" aria-hidden="true"></div>
				<div class="portrait__frame" aria-hidden="true">
					<span class="portrait__corner portrait__corner--tl"></span>
					<span class="portrait__corner portrait__corner--tr"></span>
					<span class="portrait__corner portrait__corner--bl"></span>
					<span class="portrait__corner portrait__corner--br"></span>
				</div>
				<img
					src="/leo-image.png"
					alt="Leonardo Tononi"
					class="portrait__img"
					width="320"
					height="320"
				/>
			</div>
		</div>
	</div>
</header>

<style>
	.portrait {
		position: relative;
		width: min(20rem, 72vw);
		aspect-ratio: 1;
	}

	.portrait__glow {
		position: absolute;
		inset: -12%;
		border-radius: 50%;
		background: radial-gradient(circle, rgba(250, 204, 21, 0.14) 0%, transparent 68%);
		filter: blur(18px);
		pointer-events: none;
	}

	.portrait__orbit {
		position: absolute;
		inset: -7%;
		border-radius: 42% 58% 55% 45% / 48% 42% 58% 52%;
		border: 1px dashed rgba(250, 204, 21, 0.35);
		animation: portrait-orbit 18s linear infinite;
		pointer-events: none;
	}

	.portrait__frame {
		position: absolute;
		inset: -3%;
		pointer-events: none;
	}

	.portrait__corner {
		position: absolute;
		width: 1.35rem;
		height: 1.35rem;
		border-color: rgba(250, 204, 21, 0.85);
		border-style: solid;
		border-width: 0;
	}

	.portrait__corner--tl {
		top: 0;
		left: 0;
		border-top-width: 1.5px;
		border-left-width: 1.5px;
	}

	.portrait__corner--tr {
		top: 0;
		right: 0;
		border-top-width: 1.5px;
		border-right-width: 1.5px;
	}

	.portrait__corner--bl {
		bottom: 0;
		left: 0;
		border-bottom-width: 1.5px;
		border-left-width: 1.5px;
	}

	.portrait__corner--br {
		bottom: 0;
		right: 0;
		border-bottom-width: 1.5px;
		border-right-width: 1.5px;
	}

	.portrait__img {
		position: relative;
		z-index: 1;
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 58% 42% 48% 52% / 45% 52% 48% 55%;
		box-shadow:
			0 25px 50px -20px rgba(0, 0, 0, 0.65),
			inset 0 0 0 1px rgba(255, 255, 255, 0.08);
		transition: border-radius 0.8s cubic-bezier(0.22, 1, 0.36, 1);
	}

	.portrait:hover .portrait__img {
		border-radius: 48% 52% 55% 45% / 52% 45% 55% 48%;
	}

	.portrait:hover .portrait__orbit {
		border-color: rgba(250, 204, 21, 0.55);
	}

	@keyframes portrait-orbit {
		to {
			transform: rotate(360deg);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.portrait__orbit {
			animation: none;
		}

		.portrait__img {
			transition: none;
		}
	}
</style>
