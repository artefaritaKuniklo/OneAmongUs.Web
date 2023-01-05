// import { createApp, h } from 'vue'
import { h } from 'vue'
import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/solid.min.css'
import '@fortawesome/fontawesome-free/css/brands.min.css'
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import 'element-plus/dist/index.css'
import Divider from "@/components/divider.vue";
import RecaptchaV2 from "@/components/RecaptchaV2.vue"
import { ViteSSG } from 'vite-ssg'
import { createHead } from "@vueuse/head"


const routes = router.routes
const head = createHead()

export const createApp = ViteSSG(
    App,
    { routes },
    ({ app, router }) => {
        app
            .use(router)
            .use(head)
            .component('Divider', Divider)
            .component('RecaptchaV2', RecaptchaV2)
            .component('Dynamic', {
                props: ['template'],
                render() {
                    return h({ template: this.template })
                }
            })
    },
)
