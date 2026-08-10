import { ref, onMounted } from 'vue';

export default {
    setup() {
        const reviews = ref([]);

        onMounted(async () => {
            try {
                const response = await fetch('content/testimonials.json');
                if (response.ok) {
                    reviews.value = await response.json();
                }
            } catch (error) {
                console.error("Error loading testimonials:", error);
            }
        });

        return { reviews };
    },
    template: `
        <div class="testimonios-section" style="padding-top: 60px; padding-bottom: 60px; background-color: #f9fbfd;">
            <div class="container">
                <div class="section-header text-center" style="margin-bottom: 50px;">
                    <span class="subtitle" style="display: block; color: var(--secondary); font-weight: 600; margin-bottom: 10px;">Google My Business</span>
                    <h2 style="font-size: 2.5rem; color: var(--primary);">Lo que dicen nuestros pacientes</h2>
                    <p style="color: var(--text-light); margin-top: 15px; max-width: 600px; margin-left: auto; margin-right: auto;">Nos esforzamos por brindar el mejor servicio y atención. Conoce las experiencias de quienes han confiado en nosotros.</p>
                </div>
                
                <div class="reviews-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; max-width: 1200px; margin: 0 auto;">
                    <div v-for="(review, index) in reviews" :key="index" class="review-card" style="background: #fff; padding: 30px; border-radius: 12px; box-shadow: 0 5px 20px rgba(0,0,0,0.04); display: flex; flex-direction: column;">
                        
                        <div class="review-header" style="display: flex; align-items: center; margin-bottom: 20px;">
                            <img :src="review.image" :alt="review.name" style="width: 50px; height: 50px; border-radius: 50%; object-fit: cover; margin-right: 15px;">
                            <div>
                                <h4 style="margin: 0; font-size: 1.1rem; color: var(--text-dark); font-weight: 600;">{{ review.name }}</h4>
                                <div class="stars" style="color: #FFB400; margin-top: 5px; font-size: 0.9rem;">
                                    <i v-for="n in review.stars" :key="n" class="fas fa-star"></i>
                                </div>
                            </div>
                            <div style="margin-left: auto; color: #4285F4; font-size: 1.2rem;" title="Verificado en Google">
                                <i class="fab fa-google"></i>
                            </div>
                        </div>

                        <div class="review-content" style="flex-grow: 1;">
                            <p style="color: var(--text-light); font-style: italic; line-height: 1.6; margin: 0;">"{{ review.text }}"</p>
                        </div>
                    </div>
                </div>

                <div class="text-center" style="margin-top: 50px;">
                    <a href="https://g.page/r/CUy1Y-DqsyPHEAE/review" target="_blank" class="btn btn-outline" style="padding: 12px 25px; margin-right: 15px;"><i class="fab fa-google" style="margin-right: 8px;"></i> Dejar una reseña</a>
                    <a href="https://ecografiasbogota.site.agendapro.com/co" target="_blank" class="btn btn-primary" style="padding: 12px 25px;"><i class="far fa-calendar-check" style="margin-right: 8px;"></i> Programar cita</a>
                </div>
            </div>
        </div>
    `
}
