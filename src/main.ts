import { createApp } from 'vue'
import App from '@/app/App.vue'
import './index.scss'
import { setupRouter } from './router'
import { setupI18n } from './i18n'
import de from './locales/de.json'

const i18n = setupI18n({
	legacy: false,
	locale: 'de',
	globalInjection: true,
	fallbackLocale: 'de',
	messages: {
		de
	}
})
const router = setupRouter(i18n)

const app = createApp(App)
app.use(i18n)
app.use(router)
app.mount('#app')
