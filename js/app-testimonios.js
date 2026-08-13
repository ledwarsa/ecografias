import { createApp } from 'vue';
import { useLinks } from './composables/useLinks.js';
import HeaderComponent from './components/HeaderComponent.js?v=9';
import TestimoniosComponent from './components/TestimoniosComponent.js?v=2';
import FooterComponent from './components/FooterComponent.js?v=4';

const app = createApp({
    setup() {
        const { links } = useLinks();
        return { links };
    },
    template: `
        <div>
            <HeaderComponent />
            <TestimoniosComponent />
            <FooterComponent />
            <a :href="links.whatsapp" target="_blank" class="whatsapp-float">
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
