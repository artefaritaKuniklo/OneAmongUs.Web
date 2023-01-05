// import { createApp, h } from 'vue'
import { h } from 'vue'
import App from './App.vue'
import router from './router'
import 'element-plus/dist/index.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import '@primer/octicons/index.scss'
import ElementPlus from 'element-plus'
import Divider from "@/components/divider.vue";
import PhotoScroll from "@/components/PhotoScroll.vue";
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
            .use(ElementPlus)
            .component('Divider', Divider)
            .component('PhotoScroll', PhotoScroll)
            .component('RecaptchaV2', RecaptchaV2)
            .component('Dynamic', {
                props: ['template'],
                render() {
                    return h({ template: this.template })
                }
            })
    },
)