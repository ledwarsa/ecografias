import { createApp } from 'vue';
import { useLinks } from './composables/useLinks.js';
import HeaderComponent from './components/HeaderComponent.js?v=8';
import HeroComponent from './components/HeroComponent.js';
import StepsComponent from './components/StepsComponent.js';
import ServicesComponent from './components/ServicesComponent.js';
import FeaturesComponent from './components/FeaturesComponent.js';
import PremiumComponent from './components/PremiumComponent.js?v=2';
import LocationsComponent from './components/LocationsComponent.js?v=8';
import ArticlesComponent from './components/ArticlesComponent.js?v=2';
import CTAComponent from './components/CTAComponent.js';
import FooterComponent from './components/FooterComponent.js';

const app = createApp({
    setup() {
        const { links } = useLinks();
        return { links };
    },
    template: `
        <div>
            <HeaderComponent />
            <HeroComponent />
            <StepsComponent />
            <ServicesComponent />
            <FeaturesComponent />
            <PremiumComponent />
            <LocationsComponent />
            <ArticlesComponent />
            <CTAComponent />
            <FooterComponent />
            <a :href="links.whatsapp" target="_blank" class="whatsapp-float">
                <i class="fab fa-whatsapp"></i>
            </a>
        </div>
    `
});

// Register components
app.component('HeaderComponent', HeaderComponent);
app.component('HeroComponent', HeroComponent);
app.component('StepsComponent', StepsComponent);
app.component('ServicesComponent', ServicesComponent);
app.component('FeaturesComponent', FeaturesComponent);
app.component('PremiumComponent', PremiumComponent);
app.component('LocationsComponent', LocationsComponent);
app.component('ArticlesComponent', ArticlesComponent);
app.component('CTAComponent', CTAComponent);
app.component('FooterComponent', FooterComponent);

// Mount the app
app.mount('#app');
