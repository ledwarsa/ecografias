import { createApp } from 'vue';
import HeaderComponent from './components/HeaderComponent.js?v=4';
import PreguntasFrecuentesComponent from './components/PreguntasFrecuentesComponent.js?v=2';
import FooterComponent from './components/FooterComponent.js';

const app = createApp({
    template: `
        <div>
            <HeaderComponent />
            <PreguntasFrecuentesComponent />
            <FooterComponent />
            <a href="https://wa.link/42dexe" target="_blank" class="whatsapp-float">
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
