<script setup lang="ts">
interface PaymentCardMockupProps {
  amount: string
  currency: string
}

const props = withDefaults(defineProps<PaymentCardMockupProps>(), {
  amount: '1,250,000',
  currency: 'UZS'
})
</script>

<template>
  <div class="relative mx-auto w-full max-w-xl">
    <div
      class="absolute -right-6 top-10 h-72 w-[90%] rotate-6 rounded-3xl bg-slate-950 p-8 shadow-soft md:right-0"
    >
      <p class="text-sm text-slate-500">checkout.ts</p>
      <code class="mt-5 block text-sm text-emerald-300">
        payment.create({ amount: 1250000, currency: 'UZS' })
      </code>
    </div>

    <div class="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
      <div class="mb-6 flex items-start justify-between">
        <div>
          <p class="text-slate-500">Total to pay</p>
          <p class="text-4xl font-bold tracking-tight text-slate-900">{{ props.amount }} {{ props.currency }}</p>
        </div>
        <span class="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-100 text-xl">🔒</span>
      </div>

      <div class="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <p class="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Card information</p>
        <div class="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-600">
          8600 •••• •••• 4242
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div class="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-600">12 / 25</div>
          <div class="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-600">•••</div>
        </div>
      </div>

      <button
        class="mt-5 w-full rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-4 text-lg font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:-translate-y-0.5"
        type="button"
      >
        Pay {{ props.amount }} {{ props.currency }}
      </button>

      <p class="mt-4 text-center text-sm text-slate-400">Secured by PayUz</p>
    </div>
  </div>
</template>
