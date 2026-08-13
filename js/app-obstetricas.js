import { createApp } from 'vue';
import { useLinks } from './composables/useLinks.js';
import HeaderComponent from './components/HeaderComponent.js?v=2';
import FooterComponent from './components/FooterComponent.js?v=4';
import ObstetricasComponent from './components/ObstetricasComponent.js?v=1';

const app = createApp({
    setup() {
        const { links } = useLinks();
        return { links };
    },
    components: {
        'header-component': HeaderComponent,
        'footer-component': FooterComponent,
        'obstetricas-component': ObstetricasComponent
    },
    template: `
        <div>
            <header-component></header-component>
            <main>
                <obstetricas-component></obstetricas-component>
            </main>
            <footer-component></footer-component>
        </div>
    `
});

app.mount('#app');
