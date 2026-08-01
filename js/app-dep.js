import { createApp } from 'vue';
import { useLinks } from './composables/useLinks.js';
import HeaderComponent from './components/HeaderComponent.js';
import FooterComponent from './components/FooterComponent.js';
import DEPComponent from './components/DEPComponent.js';

const app = createApp({
    setup() {
        const { links } = useLinks();
        return { links };
    },
    components: {
        'header-component': HeaderComponent,
        'footer-component': FooterComponent,
        'dep-component': DEPComponent
    },
    template: `
        <div>
            <header-component></header-component>
            <main>
                <dep-component></dep-component>
            </main>
            <footer-component></footer-component>
        </div>
    `
});

app.mount('#app');
