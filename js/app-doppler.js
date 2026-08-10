import { createApp } from 'vue';
import { useLinks } from './composables/useLinks.js';
import HeaderComponent from './components/HeaderComponent.js';
import FooterComponent from './components/FooterComponent.js';
import DopplerComponent from './components/DopplerComponent.js';

const app = createApp({
    setup() {
        const { links } = useLinks();
        return { links };
    },
    components: {
        'header-component': HeaderComponent,
        'footer-component': FooterComponent,
        'doppler-component': DopplerComponent
    },
    template: `
        <div>
            <header-component></header-component>
            <main>
                <doppler-component></doppler-component>
            </main>
            <footer-component></footer-component>
        </div>
    `
});

app.mount('#app');
