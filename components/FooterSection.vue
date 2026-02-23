<script setup lang="ts">
interface FooterColumn {
  title: string
  links: string[]
}

const columns: FooterColumn[] = [
  {
    title: 'Product',
    links: ['Payments', 'Checkout', 'Billing', 'Pricing']
  },
  {
    title: 'Developers',
    links: ['Documentation', 'API Reference', 'SDKs', 'Status']
  },
  {
    title: 'Company',
    links: ['About', 'Blog', 'Careers', 'Contact']
  }
]
</script>

<template>
  <footer id="company" class="border-t border-slate-200 bg-white py-16">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div class="flex items-center gap-3">
            <span
              class="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-green-400 to-emerald-500 font-black text-slate-950"
              >P</span
            >
            <span class="text-3xl font-bold tracking-tight">PayUz</span>
          </div>
          <p class="mt-5 max-w-xs text-lg text-slate-500">
            Making payments simple, secure, and accessible for every business in Uzbekistan.
          </p>
        </div>

        <div v-for="column in columns" :key="column.title">
          <h3 class="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">{{ column.title }}</h3>
          <ul class="mt-4 space-y-3">
            <li v-for="link in column.links" :key="link">
              <a href="#" class="text-lg text-slate-600 transition hover:text-slate-900">{{ link }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-8 text-sm text-slate-500 sm:flex-row sm:justify-between">
        <p>© {{ new Date().getFullYear() }} PayUz Technologies LLC. All rights reserved.</p>
        <div class="flex gap-6">
          <a href="#" class="transition hover:text-slate-900">Privacy Policy</a>
          <a href="#" class="transition hover:text-slate-900">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>
