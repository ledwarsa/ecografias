import { createApp } from 'vue';
import HeaderComponent from './components/HeaderComponent.js?v=7';
import BlogComponent from './components/BlogComponent.js?v=2';
import CTAComponent from './components/CTAComponent.js';
import FooterComponent from './components/FooterComponent.js';

const app = createApp({
    template: `
        <div>
            <HeaderComponent />
            <BlogComponent />
            <CTAComponent />
            <FooterComponent />
            <a href="https://wa.link/42dexe" target="_blank" class="whatsapp-float">
                <i class="fab fa-whatsapp"></i>
            </a>
        </div>
    `
});

app.component('HeaderComponent', HeaderComponent);
app.component('BlogComponent', BlogComponent);
app.component('CTAComponent', CTAComponent);
app.component('FooterComponent', FooterComponent);

app.mount('#app');
