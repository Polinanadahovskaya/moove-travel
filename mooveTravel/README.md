# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Автоимпорт компонентов

В проекте настроен автоимпорт компонентов из папки `components/`. Это означает, что вы можете использовать компоненты без явного импорта.

### Как это работает

1. **Автоматический импорт**: Все компоненты из папки `components/` автоматически доступны во всех Vue файлах
2. **Именование**: Компоненты доступны по имени файла (например, `Header.vue` → `<Header />`)
3. **Глобальная доступность**: Компоненты доступны во всех страницах и компонентах

### Примеры использования

```vue
<template>
  <!-- Компонент Header автоматически импортирован -->
  <Header />
  
  <!-- Компонент Footer автоматически импортирован -->
  <Footer />
  
  <!-- Компонент tubArticle автоматически импортирован -->
  <tubArticle />
</template>

<script setup>
// Никаких импортов не требуется!
</script>
```

### Структура компонентов

```
components/
├── Header.vue          → <Header />
├── Footer.vue          → <Footer />
├── tubArticle.vue      → <tubArticle />
├── tubCountry.vue      → <tubCountry />
└── popupApplication.vue → <popupApplication />
```

### Настройка в nuxt.config.ts

```typescript
components: [
  {
    path: '~/components',
    pathPrefix: false,
    global: true,
  }
]
```

### Дополнительные возможности

Вы можете организовать компоненты в подпапки для лучшей структуры:

```
components/
├── ui/
│   ├── Button.vue      → <UiButton />
│   └── Modal.vue       → <UiModal />
├── forms/
│   ├── Input.vue       → <FormInput />
│   └── Select.vue      → <FormSelect />
└── layout/
    ├── Header.vue      → <Header />
    └── Footer.vue      → <Footer />
```

Для этого добавьте в `nuxt.config.ts`:

```typescript
components: [
  {
    path: '~/components',
    pathPrefix: false,
    global: true,
  },
  {
    path: '~/components/ui',
    prefix: 'Ui'
  },
  {
    path: '~/components/forms',
    prefix: 'Form'
  }
]
```
