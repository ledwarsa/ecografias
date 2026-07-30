import { createApp } from 'vue';
import HeaderComponent from './components/HeaderComponent.js?v=7';
import NosotrosComponent from './components/NosotrosComponent.js?v=1';
import FooterComponent from './components/FooterComponent.js';

const app = createApp({
    template: `
        <div>
            <HeaderComponent />
            <NosotrosComponent />
            <FooterComponent />
            <a href="https://wa.link/42dexe" target="_blank" class="whatsapp-float">
                <i class="fab fa-whatsapp"></i>
            </a>
        </div>
    `
});

// Register components
app.component('HeaderComponent', HeaderComponent);
app.component('NosotrosComponent', NosotrosComponent);
app.component('FooterComponent', FooterComponent);

// Mount the app
app.mount('#app');
