# Vue 3 + Typescript + Vite + Router + i18n

This template should help get you started developing with Vue 3, Typescript, lazy loading translation handling and routing in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

-   [VSCode](https://code.visualstudio.com/)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

## i18n suport for vue3
Using [@intlify/vite-plugin-vue-i18n](https://github.com/intlify/vite-plugin-vue-i18n) for handling lazy-loading translations from JSON files.

## i18n routing
Routing width createWebHistory() (no hash) and language param in url.

"THE BEER-WARE LICENSE" (Revision 42):
<dk@neonsw.de> wrote this file. As long as you retain this notice you
can do whatever you want with this stuff. If we meet some day, and you think
this stuff is worth it, you can buy me a beer in return.