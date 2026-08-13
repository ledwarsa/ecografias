import { createApp } from 'vue';
import { useLinks } from './composables/useLinks.js';
import HeaderComponent from './components/HeaderComponent.js?v=9';
import BlogComponent from './components/BlogComponent.js?v=3';
import CTAComponent from './components/CTAComponent.js?v=1';
import FooterComponent from './components/FooterComponent.js?v=4';

const app = createApp({
    setup() {
        const { links } = useLinks();
        return { links };
    },
    template: `
        <div>
            <HeaderComponent />
            <BlogComponent />
            <CTAComponent />
            <FooterComponent />
            <a :href="links.whatsapp" target="_blank" class="whatsapp-float">
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
