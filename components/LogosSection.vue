<script setup lang="ts">
const logos: string[] = ['Visa', 'Mastercard', 'Uzcard', 'HUMO', 'Apple Pay', 'Google Pay']
</script>

<template>
  <section class="border-y border-slate-200 bg-white/70 py-10">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <p class="text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
        Powering payments for the best
      </p>
      <div class="mt-7 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
        <div
          v-for="logo in logos"
          :key="logo"
          class="text-center text-2xl font-semibold tracking-tight text-slate-400 transition hover:text-slate-600"
        >
          {{ logo }}
        </div>
      </div>
    </div>
  </section>
</template>
