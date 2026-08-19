import { createApp } from 'vue';
import { useLinks } from './composables/useLinks.js';
import HeaderComponent from './components/HeaderComponent.js?v=2';
import FooterComponent from './components/FooterComponent.js?v=4';
import EcografiasObstetricasYPelvicasComponent from './components/EcografiasObstetricasYPelvicasComponent.js?v=1';

const app = createApp({
    setup() {
        const { links } = useLinks();
        return { links };
    },
    components: {
        'header-component': HeaderComponent,
        'footer-component': FooterComponent,
        'ecografias-obstetricas-y-pelvicas-component': EcografiasObstetricasYPelvicasComponent
    },
    template: `
        <div>
            <header-component></header-component>
            <main>
                <ecografias-obstetricas-y-pelvicas-component></ecografias-obstetricas-y-pelvicas-component>
            </main>
            <footer-component></footer-component>
        </div>
    `
});

app.mount('#app');
