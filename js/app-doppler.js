import { createApp } from 'vue';
import { useLinks } from './composables/useLinks.js';
import HeaderComponent from './components/HeaderComponent.js?v=2';
import FooterComponent from './components/FooterComponent.js?v=4';
import DopplerComponent from './components/DopplerComponent.js?v=1';

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
