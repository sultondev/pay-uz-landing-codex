<script setup lang="ts">
interface Feature {
  icon: string
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: '</>',
    title: 'Unified API',
    description:
      'One integration unlocks Uzcard, HUMO, Visa, and Mastercard. Build once and scale with confidence.'
  },
  {
    icon: '📱',
    title: 'Mobile First',
    description:
      'Optimized checkout experiences for mobile conversion with Apple Pay and Google Pay baked in.'
  },
  {
    icon: '🛡️',
    title: 'Bank-Grade Security',
    description:
      'PCI-ready architecture, tokenization, and continuous fraud monitoring to keep your business secure.'
  }
]
</script>

<template>
  <section id="products" class="py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-500">Features</p>
        <h2 class="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Everything you need to grow revenue
        </h2>
        <p class="mt-5 text-xl text-slate-600">
          From startup MVPs to enterprise scale, PayUz adapts to your payments stack and local
          market needs.
        </p>
      </div>

      <div class="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="feature in features"
          :key="feature.title"
          class="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
        >
          <div class="inline-flex rounded-2xl bg-emerald-100 px-4 py-3 text-xl font-bold text-emerald-600">
            {{ feature.icon }}
          </div>
          <h3 class="mt-6 text-3xl font-semibold tracking-tight text-slate-900">{{ feature.title }}</h3>
          <p class="mt-4 text-lg leading-relaxed text-slate-600">{{ feature.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
