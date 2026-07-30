import { createApp } from 'vue';
import HeaderComponent from './components/HeaderComponent.js?v=9';
import TarifasComponent from './components/TarifasComponent.js?v=1';
import FooterComponent from './components/FooterComponent.js';

const app = createApp({
    template: `
        <div>
            <header-component></header-component>
            <main>
                <tarifas-component></tarifas-component>
            </main>
            <footer-component></footer-component>
            <a href="https://wa.link/42dexe" target="_blank" class="whatsapp-float">
                <i class="fab fa-whatsapp"></i>
            </a>
        </div>
    `
});

// Register components
app.component('HeaderComponent', HeaderComponent);
app.component('TarifasComponent', TarifasComponent);
app.component('FooterComponent', FooterComponent);

// Mount the app
app.mount('#app');
