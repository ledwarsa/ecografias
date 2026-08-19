import { createApp } from 'vue';
import { useLinks } from './composables/useLinks.js';
import HeaderComponent from './components/HeaderComponent.js?v=11';
import HeroComponent from './components/HeroComponent.js?v=1';
import StepsComponent from './components/StepsComponent.js?v=1';
import ServicesComponent from './components/ServicesComponent.js?v=1';
import FeaturesComponent from './components/FeaturesComponent.js?v=1';
import PremiumComponent from './components/PremiumComponent.js?v=3';
import LocationsComponent from './components/LocationsComponent.js?v=9';
import ArticlesComponent from './components/ArticlesComponent.js?v=3';
import CTAComponent from './components/CTAComponent.js?v=1';
import FooterComponent from './components/FooterComponent.js?v=5';

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
