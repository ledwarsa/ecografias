import { createApp } from 'vue';
import HeaderComponent from './components/HeaderComponent.js';
import FooterComponent from './components/FooterComponent.js';
import ObstetricasComponent from './components/ObstetricasComponent.js';

const app = createApp({
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
