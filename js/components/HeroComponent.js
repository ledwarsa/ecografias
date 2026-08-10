import { ref, onMounted, computed, onUnmounted } from 'vue';

export default {
    setup() {
        const banners = ref([]);
        const currentSlide = ref(0);
        const windowWidth = ref(window.innerWidth);
        let intervalId = null;

        const loadBanners = async () => {
            try {
                // Add timestamp to prevent caching issues during admin edits
                const response = await fetch('content/banners.json?t=' + new Date().getTime());
                if (response.ok) {
                    banners.value = await response.json();
                }
            } catch (error) {
                console.error("Error loading banners:", error);
            }
        };

        const handleResize = () => {
            windowWidth.value = window.innerWidth;
            // Reset slide if switching devices to prevent out of bounds index
            currentSlide.value = 0;
        };

        const device = computed(() => windowWidth.value <= 768 ? 'mobile' : 'pc');

        const activeBanners = computed(() => {
            return banners.value.filter(b => b.device === device.value);
        });

        const nextSlide = () => {
            if (activeBanners.value.length <= 1) return;
            currentSlide.value = (currentSlide.value + 1) % activeBanners.value.length;
        };

        const prevSlide = () => {
            if (activeBanners.value.length <= 1) return;
            currentSlide.value = (currentSlide.value - 1 + activeBanners.value.length) % activeBanners.value.length;
        };
        
        const setSlide = (index) => {
            currentSlide.value = index;
        };

        const startAutoplay = () => {
            if (intervalId) clearInterval(intervalId);
            intervalId = setInterval(nextSlide, 5000);
        };

        const pauseAutoplay = () => {
            if (intervalId) clearInterval(intervalId);
        };

        onMounted(() => {
            loadBanners();
            window.addEventListener('resize', handleResize);
            startAutoplay();
        });

        onUnmounted(() => {
            window.removeEventListener('resize', handleResize);
            if (intervalId) clearInterval(intervalId);
        });

        return { banners, activeBanners, currentSlide, nextSlide, prevSlide, setSlide, startAutoplay, pauseAutoplay };
    },
    template: `
        <div>
            <!-- Banner Slider Dynamic -->
            <section v-if="activeBanners.length > 0" class="hero-slider-section" @mouseenter="pauseAutoplay" @mouseleave="startAutoplay">
                <div class="hero-slider-container">
                    <div class="slider-track" :style="{ transform: 'translateX(-' + (currentSlide * 100) + '%)' }">
                        <div v-for="(banner, index) in activeBanners" :key="banner.id" class="slide">
                            <a :href="banner.link" :target="banner.link.includes('http') ? '_blank' : '_self'" class="slide-link">
                                <img :src="banner.image" :alt="banner.title" class="slide-image">
                            </a>
                        </div>
                    </div>
                    
                    <!-- Navigation Arrows -->
                    <button v-if="activeBanners.length > 1" @click="prevSlide" class="slider-nav slider-prev"><i class="fas fa-chevron-left"></i></button>
                    <button v-if="activeBanners.length > 1" @click="nextSlide" class="slider-nav slider-next"><i class="fas fa-chevron-right"></i></button>
                    
                    <!-- Dots -->
                    <div v-if="activeBanners.length > 1" class="slider-dots">
                        <span v-for="(banner, index) in activeBanners" 
                              :key="'dot-'+index" 
                              class="dot" 
                              :class="{ active: currentSlide === index }"
                              @click="setSlide(index)"></span>
                    </div>
                </div>
            </section>

            <!-- Default Static Hero (Fallback if no banners) -->
            <section v-else class="hero">
                <div class="container">
                    <div class="hero-content">
                        <p class="text-secondary font-bold" style="margin-bottom: 15px;">Más de 15 años cuidando tu salud</p>
                        <h1>Ecografías en <span>Bogotá</span><br>Resultados precisos con médicos especialistas</h1>
                        <p>Diagnósticos confiables con equipos de última tecnología y atención humana.</p>
                        
                        <div class="hero-features">
                            <div class="feature-item">
                                <div class="feature-icon"><i class="fas fa-map-marker-alt"></i></div>
                                <span>Dos sedes en Bogotá</span>
                            </div>
                            <div class="feature-item">
                                <div class="feature-icon"><i class="fas fa-clock"></i></div>
                                <span>Atención el mismo día</span>
                            </div>
                            <div class="feature-item">
                                <div class="feature-icon"><i class="fas fa-file-medical-alt"></i></div>
                                <span>Resultados digitales</span>
                            </div>
                            <div class="feature-item">
                                <div class="feature-icon"><i class="fas fa-hand-holding-usd"></i></div>
                                <span>Precios accesibles</span>
                            </div>
                        </div>
                        
                        <div class="hero-actions">
                            <a href="https://wa.link/42dexe" target="_blank" class="btn btn-primary btn-lg" style="display: inline-flex; align-items: center; justify-content: center; text-decoration: none;"><i class="fab fa-whatsapp" style="margin-right:8px;"></i> Agendar cita</a>
                            <a href="tarifas.html" class="btn btn-outline btn-lg">Ver tarifas</a>
                        </div>
                    </div>
                    
                    <div class="hero-image">
                        <img src="assets/hero.png" alt="Ecografía en Bogotá">
                        <div class="experience-badge">
                            <h3>+15 años</h3>
                            <p class="font-bold text-primary">de experiencia</p>
                            <div class="stars">
                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            </div>
                            <div class="experience-list">
                                <div class="exp-item"><i class="fas fa-user-md"></i> Médicos certificados</div>
                                <div class="exp-item"><i class="fas fa-desktop"></i> Equipos de alta resolución</div>
                                <div class="exp-item"><i class="fas fa-clock"></i> Resultados el mismo día</div>
                                <div class="exp-item"><i class="fas fa-heart"></i> Atención personalizada</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    `
}
