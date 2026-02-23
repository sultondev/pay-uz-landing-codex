<script setup lang="ts">
useHead({
  title: 'PayUz — One Checkout for All Payments in Uzbekistan',
  meta: [
    {
      name: 'description',
      content:
        'PayUz provides one modern checkout for Uzcard, HUMO, Visa, Mastercard, Apple Pay, and Google Pay with bank-grade security.'
    },
    {
      property: 'og:title',
      content: 'PayUz — Modern payment infrastructure for Uzbekistan'
    },
    {
      property: 'og:description',
      content:
        'Accept local and international payments in minutes with a single API integration and beautiful checkout flows.'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    }
  ]
})
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
