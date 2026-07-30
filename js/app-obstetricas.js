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
                <div class="page-header" style="background: url('https://ecografiasbogota.com/wp-content/uploads/2021/04/bg-page-header.jpg') center center/cover no-repeat; padding: 60px 0; text-align: center; position: relative;">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5);"></div>
                    <div class="container" style="position: relative; z-index: 1;">
                        <h1 style="color: white; font-size: 2.5rem; margin: 0;">Ecografías Obstétricas Avanzadas</h1>
                    </div>
                </div>
                <obstetricas-component></obstetricas-component>
            </main>
            <footer-component></footer-component>
        </div>
    `
});

app.mount('#app');
