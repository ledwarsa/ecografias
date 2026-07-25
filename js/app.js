import { createApp } from 'vue';
import HeaderComponent from './components/HeaderComponent.js';
import HeroComponent from './components/HeroComponent.js';
import StepsComponent from './components/StepsComponent.js';
import ServicesComponent from './components/ServicesComponent.js';
import FeaturesComponent from './components/FeaturesComponent.js';
import PremiumComponent from './components/PremiumComponent.js';
import LocationsComponent from './components/LocationsComponent.js';
import ArticlesComponent from './components/ArticlesComponent.js';
import CTAComponent from './components/CTAComponent.js';
import FooterComponent from './components/FooterComponent.js';

const app = createApp({
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
            <a href="#" class="whatsapp-float">
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
