<script setup lang="ts">
interface Step {
  number: number
  titleKey: string
  descriptionKey: string
}

const { t } = useI18n()

const steps: Step[] = [
  {
    number: 1,
    titleKey: 'integration.step1.title',
    descriptionKey: 'integration.step1.description'
  },
  {
    number: 2,
    titleKey: 'integration.step2.title',
    descriptionKey: 'integration.step2.description'
  },
  {
    number: 3,
    titleKey: 'integration.step3.title',
    descriptionKey: 'integration.step3.description'
  }
]
</script>

<template>
  <section id="developers" class="py-24">
    <div class="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
      <div>
        <h2 class="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          {{ t('integration.title') }}
        </h2>

        <div class="mt-10 space-y-8 border-l-2 border-slate-200 pl-6">
          <div v-for="step in steps" :key="step.number" class="relative">
            <div
              class="absolute -left-[2.2rem] grid h-10 w-10 place-items-center rounded-full border-2 bg-white text-lg font-bold"
              :class="step.number === 1 ? 'border-emerald-400 text-emerald-600' : 'border-slate-300 text-slate-500'"
            >
              {{ step.number }}
            </div>
            <h3 class="text-3xl font-semibold tracking-tight text-slate-900">{{ t(step.titleKey) }}</h3>
            <p class="mt-2 text-lg text-slate-600">{{ t(step.descriptionKey) }}</p>
          </div>
        </div>
      </div>

      <div class="rounded-3xl border border-slate-800 bg-[#0b1020] p-0.5 shadow-soft">
        <div class="rounded-[1.4rem] bg-[#0a0e1b] p-6">
          <div class="mb-6 flex items-center gap-2 border-b border-slate-800 pb-4">
            <span class="h-3 w-3 rounded-full bg-red-400" />
            <span class="h-3 w-3 rounded-full bg-amber-300" />
            <span class="h-3 w-3 rounded-full bg-emerald-400" />
            <span class="ml-2 text-sm text-slate-500">{{ t('integration.file') }}</span>
          </div>

          <pre class="overflow-x-auto text-sm leading-7 text-slate-300"><code>{{ t('integration.code') }}</code></pre>

          <div class="mt-6 rounded-2xl border border-emerald-800/60 bg-emerald-950/50 p-4">
            <p class="text-lg font-semibold text-emerald-300">{{ t('integration.successTitle') }}</p>
            <p class="mt-1 text-emerald-200/70">{{ t('integration.successDescription') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
