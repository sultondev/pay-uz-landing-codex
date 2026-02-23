# PayUz SaaS Landing (Nuxt 3 + TailwindCSS + i18n)

A production-ready, component-based Nuxt 3 landing page inspired by modern fintech websites.

## Stack

- Nuxt 3 (latest stable)
- Vue 3 with `<script setup lang="ts">`
- TailwindCSS
- Nuxt i18n (`en`, `uz`, `ru`)
- ESLint (Nuxt flat config)
- Prettier (+ Tailwind plugin)
- Strict TypeScript

## Folder structure

```text
.
├── app.vue
├── assets
│   └── css
│       └── main.css
├── components
│   ├── CtaSection.vue
│   ├── FeaturesSection.vue
│   ├── FooterSection.vue
│   ├── HeroSection.vue
│   ├── IntegrationSection.vue
│   ├── LogosSection.vue
│   ├── Navbar.vue
│   └── PaymentCardMockup.vue
├── locales
│   ├── en.json
│   ├── ru.json
│   └── uz.json
├── pages
│   └── index.vue
├── eslint.config.mjs
├── nuxt.config.ts
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start local development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
4. Preview production build:
   ```bash
   npm run preview
   ```

## Quality scripts

- `npm run lint`
- `npm run lint:fix`
- `npm run format`
- `npm run format:check`
