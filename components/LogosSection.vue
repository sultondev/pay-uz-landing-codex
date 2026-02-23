<script setup lang="ts">
const { t } = useI18n()

const logoKeys: string[] = [
  'logos.visa',
  'logos.mastercard',
  'logos.uzcard',
  'logos.humo',
  'logos.applePay',
  'logos.googlePay'
]
</script>

<template>
  <section class="border-y border-slate-200 bg-white/70 py-10">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <p class="text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
        {{ t('logos.title') }}
      </p>
      <div class="mt-7 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
        <div
          v-for="logoKey in logoKeys"
          :key="logoKey"
          class="text-center text-2xl font-semibold tracking-tight text-slate-400 transition hover:text-slate-600"
        >
          {{ t(logoKey) }}
        </div>
      </div>
    </div>
  </section>
</template>
