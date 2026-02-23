<script setup lang="ts">
interface NavLink {
  label: string
  href: string
}

const links: NavLink[] = [
  { label: 'Products', href: '#products' },
  { label: 'Developers', href: '#developers' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Company', href: '#company' }
]
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
    <nav class="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <a href="#" class="flex items-center gap-3">
        <span
          class="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 font-black text-slate-900"
          >P</span
        >
        <span class="text-2xl font-bold tracking-tight text-slate-900">PayUz</span>
      </a>

      <ul class="hidden items-center gap-8 md:flex">
        <li v-for="link in links" :key="link.label">
          <a
            :href="link.href"
            class="text-base font-medium text-slate-600 transition hover:text-slate-900"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <div class="flex items-center gap-3">
        <button
          class="hidden rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 sm:block"
          type="button"
        >
          Log in
        </button>
        <button
          class="rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-500/35"
          type="button"
        >
          Sign Up
        </button>
      </div>
    </nav>
  </header>
</template>
