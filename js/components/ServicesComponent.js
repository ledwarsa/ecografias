import { ref, onMounted } from 'vue';

export default {
    setup() {
        const services = ref([]);

        onMounted(async () => {
            try {
                const response = await fetch('content/services.json');
                if (response.ok) {
                    services.value = await response.json();
                }
            } catch (error) {
                console.error("Error loading services:", error);
            }
        });

        return { services };
    },
    template: `
        <section class="services-section">
            <div class="container">
                <div class="section-header">
                    <div class="subtitle">NUESTROS SERVICIOS</div>
                    <h2>Tecnología y experiencia para tu <span class="text-secondary">bienestar</span></h2>
                </div>
                
                <div class="services-grid" v-if="services.length > 0">
                    <div class="service-card" v-for="service in services" :key="service.id" :class="{ highlight: service.highlight }">
                        <div class="highlight-badge" v-if="service.highlight">Examen destacado</div>
                        <div class="service-image">
                            <img :src="service.image" :alt="service.title">
                            <div class="service-icon"><i class="fas" :class="service.icon"></i></div>
                        </div>
                        <div class="service-content">
                            <h3>{{ service.title }}</h3>
                            <p>{{ service.description }}</p>
                            <a :href="service.link" class="service-link">{{ service.highlight ? 'Conocer más' : 'Ver examen' }} <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <p>Cargando servicios...</p>
                </div>
            </div>
        </section>
    `
}
