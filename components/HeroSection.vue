<script setup lang="ts"></script>

<template>
  <section class="relative overflow-hidden bg-hero-grid">
    <div class="mx-auto grid max-w-7xl items-center gap-16 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-8">
      <div>
        <div
          class="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700"
        >
          <span class="h-2 w-2 rounded-full bg-emerald-500" />
          Now supporting HUMO &amp; Uzcard direct
        </div>

        <h1 class="mt-7 text-5xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
          One Checkout for All
          <span class="block text-emerald-500">Payments</span>
          in Uzbekistan
        </h1>

        <p class="mt-6 max-w-xl text-xl leading-relaxed text-slate-600">
          Accept local and international payments with a single integration. The modern payment
          stack for Uzbekistan's fast-moving digital businesses.
        </p>

        <div class="mt-10 flex flex-wrap items-center gap-4">
          <button
            class="rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-4 text-lg font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:-translate-y-0.5"
            type="button"
          >
            Get Early Access
          </button>
          <button
            class="rounded-full border border-slate-200 bg-white px-8 py-4 text-lg font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900"
            type="button"
          >
            View Demo
          </button>
        </div>

        <p class="mt-8 text-base text-slate-500">Trusted by 500+ local businesses</p>
      </div>

      <PaymentCardMockup amount="1,250,000" currency="UZS" />
    </div>
  </section>
</template>
