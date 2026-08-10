import { useLinks } from '../composables/useLinks.js';

export default {
    setup() {
        const { links } = useLinks();
        return { links };
    },
    template: `
        <section class="cta-banner">
            <div class="container">
                <h2><i class="far fa-calendar-alt"></i> Agenda tu cita hoy mismo <br><span style="font-size: 1rem; font-weight: normal; margin-left: 35px;">Atención el mismo día en nuestras dos sedes.</span></h2>
                <a :href="links.whatsapp" target="_blank" class="btn btn-white-outline btn-lg" style="background: white; color: var(--secondary); display: inline-flex; align-items: center; justify-content: center; text-decoration: none;"><i class="fab fa-whatsapp" style="margin-right:8px;"></i> Agendar cita por WhatsApp</a>
            </div>
        </section>
    `
}
