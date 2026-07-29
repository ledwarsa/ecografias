import { createApp } from 'vue';
import HeaderComponent from './components/HeaderComponent.js?v=4';
import TestimoniosComponent from './components/TestimoniosComponent.js?v=1';
import FooterComponent from './components/FooterComponent.js';

const app = createApp({
    template: `
        <div>
            <HeaderComponent />
            <TestimoniosComponent />
            <FooterComponent />
            <a href="https://wa.link/42dexe" target="_blank" class="whatsapp-float">
                <i class="fab fa-whatsapp"></i>
            </a>
        </div>
    `
});

// Register components
app.component('HeaderComponent', HeaderComponent);
app.component('TestimoniosComponent', TestimoniosComponent);
app.component('FooterComponent', FooterComponent);

// Mount the app
app.mount('#app');
