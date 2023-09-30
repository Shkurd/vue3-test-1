import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components/ui/index' // импорт массива компонетов
import directives from '@/directives/index' // импорт массива кастомных директив
import router from '@/router/router'
import store from '@/store/index'


const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
});

directives.forEach(directive => {
    app.directive(directive.name, directive) // подключение кстомной директивы. Первый параметр - название директивы, вторым - сам обьект директивы, который мы импортили ранее. И потом можно эту директиву использовать в любом компоненте.
});

app
    .use(router)
    .use(store)
    .mount('#app')
