<script setup lang="ts">
interface FooterColumn {
  titleKey: string
  links: string[]
}

const { t, locale, setLocale } = useI18n()

const columns: FooterColumn[] = [
  {
    titleKey: 'footer.product',
    links: ['footer.payments', 'footer.checkout', 'footer.billing', 'footer.pricing']
  },
  {
    titleKey: 'footer.developers',
    links: ['footer.documentation', 'footer.apiReference', 'footer.sdks', 'footer.status']
  },
  {
    titleKey: 'footer.company',
    links: ['footer.about', 'footer.blog', 'footer.careers', 'footer.contact']
  }
]

const year = new Date().getFullYear()

const setLanguage = async (languageCode: 'en' | 'uz' | 'ru') => {
  await setLocale(languageCode)
}
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
            <span class="text-3xl font-bold tracking-tight">{{ t('nav.brand') }}</span>
          </div>
          <p class="mt-5 max-w-xs text-lg text-slate-500">
            {{ t('footer.description') }}
          </p>
        </div>

        <div v-for="column in columns" :key="column.titleKey">
          <h3 class="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">{{ t(column.titleKey) }}</h3>
          <ul class="mt-4 space-y-3">
            <li v-for="link in column.links" :key="link">
              <a href="#" class="text-lg text-slate-600 transition hover:text-slate-900">{{ t(link) }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-8 flex items-center gap-4 text-sm text-slate-500">
        <span>{{ t('language.label') }}:</span>
        <div class="flex items-center gap-3">
          <button
            class="rounded-full border px-3 py-1.5 font-semibold transition"
            :class="locale === 'en' ? 'border-emerald-500 text-emerald-600' : 'border-slate-300 text-slate-500 hover:border-slate-400'"
            type="button"
            @click="setLanguage('en')"
          >
            {{ t('language.en') }}
          </button>
          <button
            class="rounded-full border px-3 py-1.5 font-semibold transition"
            :class="locale === 'uz' ? 'border-emerald-500 text-emerald-600' : 'border-slate-300 text-slate-500 hover:border-slate-400'"
            type="button"
            @click="setLanguage('uz')"
          >
            {{ t('language.uz') }}
          </button>
          <button
            class="rounded-full border px-3 py-1.5 font-semibold transition"
            :class="locale === 'ru' ? 'border-emerald-500 text-emerald-600' : 'border-slate-300 text-slate-500 hover:border-slate-400'"
            type="button"
            @click="setLanguage('ru')"
          >
            {{ t('language.ru') }}
          </button>
        </div>
      </div>

      <div class="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-8 text-sm text-slate-500 sm:flex-row sm:justify-between">
        <p>{{ t('footer.copyright', { year }) }}</p>
        <div class="flex gap-6">
          <a href="#" class="transition hover:text-slate-900">{{ t('footer.privacy') }}</a>
          <a href="#" class="transition hover:text-slate-900">{{ t('footer.terms') }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>
