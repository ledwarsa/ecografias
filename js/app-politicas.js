import { createApp } from 'vue';
import { useLinks } from './composables/useLinks.js';
import HeaderComponent from './components/HeaderComponent.js?v=9';
import PoliticasComponent from './components/PoliticasComponent.js?v=1';
import FooterComponent from './components/FooterComponent.js?v=4';

const app = createApp({
    setup() {
        const { links } = useLinks();
        return { links };
    }
});

app.component('header-component', HeaderComponent);
app.component('politicas-component', PoliticasComponent);
app.component('footer-component', FooterComponent);

app.mount('#app');
