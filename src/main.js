// @ts-nocheck
import { createApp } from 'vue'
import App from './App.vue'
import * as apolloProvider from "../apollo.provider.js"

const app = createApp(App)

app.use(apolloProvider.provider)
app.mount('#app')
