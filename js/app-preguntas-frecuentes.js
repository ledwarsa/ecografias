import { createApp } from 'vue';
import { useLinks } from './composables/useLinks.js';
import HeaderComponent from './components/HeaderComponent.js?v=7';
import PreguntasFrecuentesComponent from './components/PreguntasFrecuentesComponent.js?v=2';
import FooterComponent from './components/FooterComponent.js';

const app = createApp({
    setup() {
        const { links } = useLinks();
        return { links };
    },
    template: `
        <div>
            <HeaderComponent />
            <PreguntasFrecuentesComponent />
            <FooterComponent />
            <a :href="links.whatsapp" target="_blank" class="whatsapp-float">
                <i class="fab fa-whatsapp"></i>
            </a>
        </div>
    `
});

// Register components
app.component('HeaderComponent', HeaderComponent);
app.component('PreguntasFrecuentesComponent', PreguntasFrecuentesComponent);
app.component('FooterComponent', FooterComponent);

// Mount the app
app.mount('#app');
