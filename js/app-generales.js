import { createApp } from 'vue';
import HeaderComponent from './components/HeaderComponent.js?v=7';
import EcografiasGeneralesComponent from './components/EcografiasGeneralesComponent.js?v=7';
import FooterComponent from './components/FooterComponent.js';

const app = createApp({
    template: `
        <div>
            <HeaderComponent />
            <EcografiasGeneralesComponent />
            <FooterComponent />
            <a href="https://wa.link/42dexe" target="_blank" class="whatsapp-float">
                <i class="fab fa-whatsapp"></i>
            </a>
        </div>
    `
});

// Register components
app.component('HeaderComponent', HeaderComponent);
app.component('EcografiasGeneralesComponent', EcografiasGeneralesComponent);
app.component('FooterComponent', FooterComponent);

// Mount the app
app.mount('#app');
