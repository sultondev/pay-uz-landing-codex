<script setup lang="ts">
interface Feature {
  icon: string
  titleKey: string
  descriptionKey: string
}

const { t } = useI18n()

const features: Feature[] = [
  {
    icon: '</>',
    titleKey: 'features.unifiedApi.title',
    descriptionKey: 'features.unifiedApi.description'
  },
  {
    icon: '📱',
    titleKey: 'features.mobileFirst.title',
    descriptionKey: 'features.mobileFirst.description'
  },
  {
    icon: '🛡️',
    titleKey: 'features.security.title',
    descriptionKey: 'features.security.description'
  }
]
</script>

<template>
  <section id="products" class="py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-500">{{ t('features.eyebrow') }}</p>
        <h2 class="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          {{ t('features.title') }}
        </h2>
        <p class="mt-5 text-xl text-slate-600">
          {{ t('features.description') }}
        </p>
      </div>

      <div class="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="feature in features"
          :key="feature.titleKey"
          class="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
        >
          <div class="inline-flex rounded-2xl bg-emerald-100 px-4 py-3 text-xl font-bold text-emerald-600">
            {{ feature.icon }}
          </div>
          <h3 class="mt-6 text-3xl font-semibold tracking-tight text-slate-900">{{ t(feature.titleKey) }}</h3>
          <p class="mt-4 text-lg leading-relaxed text-slate-600">{{ t(feature.descriptionKey) }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
