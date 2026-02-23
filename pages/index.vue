<script setup lang="ts">
const { t } = useI18n()

useHead(() => ({
  title: t('meta.title'),
  meta: [
    {
      name: 'description',
      content: t('meta.description')
    },
    {
      property: 'og:title',
      content: t('meta.ogTitle')
    },
    {
      property: 'og:description',
      content: t('meta.ogDescription')
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    }
  ]
}))
</script>

<template>
  <div class="min-h-screen bg-slate-50">
    <Navbar />
    <main>
      <HeroSection />
      <LogosSection />
      <FeaturesSection />
      <IntegrationSection />
      <CtaSection />
    </main>
    <FooterSection />
  </div>
</template>
