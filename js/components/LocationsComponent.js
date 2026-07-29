export default {
    data() {
        return {
            currentIndex: 0,
            reviews: [
                {
                    name: 'Laura Aponte',
                    text: 'Excelente servicio. La Doc super diligente y atenta. La cita fue muy puntual y los precios son muy adsequibles. La recomiendo por completo.',
                    stars: 5,
                    image: 'https://ui-avatars.com/api/?name=Laura+Aponte&background=random'
                },
                {
                    name: 'Victoria Ortega',
                    text: 'La atención fue muy buena, la dra se toma el tiempo y hace que el momento sea ameno, los resultados y el informe los entregan de inmediato. El consultorio es privado y discreto.',
                    stars: 5,
                    image: 'https://ui-avatars.com/api/?name=Victoria+Ortega&background=random'
                },
                {
                    name: 'Wendy V. Domínguez',
                    text: 'Excelente servicio, rápido, respetuoso y con amor.',
                    stars: 5,
                    image: 'https://ui-avatars.com/api/?name=Wendy+V+Dominguez&background=random'
                },
                {
                    name: 'Diana Cortés',
                    text: 'Excelente servicio me encanta lo profesional el Dr. José A Rodríguez',
                    stars: 5,
                    image: 'https://ui-avatars.com/api/?name=Diana+Cortes&background=random'
                },
                {
                    name: 'Milena',
                    text: 'Servicio amable , buenos precios y atencion profesional',
                    stars: 5,
                    image: 'https://ui-avatars.com/api/?name=Milena&background=random'
                }
            ]
        }
    },
    methods: {
        nextReview() {
            this.currentIndex = (this.currentIndex + 1) % this.reviews.length;
        },
        prevReview() {
            this.currentIndex = (this.currentIndex - 1 + this.reviews.length) % this.reviews.length;
        },
        setReview(index) {
            this.currentIndex = index;
        }
    },
    template: `
        <section class="locations-reviews container">
            <div class="locations-col">
                <div class="subtitle text-secondary font-bold" style="letter-spacing:1px; margin-bottom:10px; font-size:0.85rem;">NUESTRAS SEDES</div>
                
                <div class="locations-grid">
                    <div class="location-card">
                        <div class="location-info">
                            <h4>Sede Norte</h4>
                            <p>ILARCO Av. Suba #115-58, Centro Ilarco.<br>Torre C, Consultorio 208.<br>Frente a estación de Transmilenio "Av. Suba Calle 116"</p>
                            <div class="phone"><i class="fas fa-phone-alt"></i> 300 509 35 68</div>
                            <a href="https://www.google.com/maps/place/Ecograf%C3%ADas+Bogot%C3%A1/@4.6991789,-74.0694352,3a,100.9y/data=!3m8!1e2!3m6!1sCIABIhAA3ilWYAGlLGgKvO8ABURR!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAHRPTWmqU-dLLIgy-naytBkGfhqtToLfY8oJEz1vNFEsOVNm5mIojcKAC7lAKOBoR21ECVGFkiIj6W_eH2ODVH_q05uUzy8bIjOPx8cEZERWGhUeyKbEZd096nyaFL5N8g0-zcf5xcE-Uyp_H2E%3Dw114-h86-k-no!7i512!8i384!4m7!3m6!1s0x8e3f9b30311359f5:0xecb2e062ee644594!8m2!3d4.6991074!4d-74.0694081!10e5!16s%2Fg%2F11n1x9930v?hl=es-419&entry=ttu" target="_blank" class="btn btn-outline btn-sm" style="display: inline-block;">Cómo llegar <i class="fas fa-external-link-alt" style="margin-left:5px;"></i></a>
                        </div>
                        <img src="assets/sede_norte.jpg" class="location-image" alt="Sede Norte" style="object-fit: cover;">
                    </div>
                    
                    <div class="location-card">
                        <div class="location-info">
                            <h4>Sede Sur</h4>
                            <p>Sede Mandalay, Carrera 78 # 3A-40<br>Barrio Mandalay<br>Bogotá, Colombia</p>
                            <div class="phone"><i class="fas fa-phone-alt"></i> 300 509 35 68</div>
                            <a href="https://www.google.com/maps/place/Cra.+78+%233a-40,+Kennedy,+Bogot%C3%A1/@4.6252819,-74.1490823,15z/data=!4m6!3m5!1s0x8e3f9f5926d07815:0x6d51969686894a13!8m2!3d4.6276135!4d-74.1449898!16s%2Fg%2F11nxn__j3x?entry=ttu" target="_blank" class="btn btn-outline btn-sm" style="display: inline-block;">Cómo llegar <i class="fas fa-external-link-alt" style="margin-left:5px;"></i></a>
                        </div>
                        <img src="https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=lbdfm5ieDINQTNLIHRR7ZA&cb_client=search.gws-prod.gps&w=408&h=240&yaw=95.124565&pitch=0&thumbfov=100" class="location-image" alt="Sede Sur" style="object-fit: cover;">
                    </div>
                </div>
            </div>
            
            <div class="reviews-col">
                <div class="subtitle text-secondary font-bold" style="letter-spacing:1px; margin-bottom:10px; font-size:0.85rem;">LO QUE DICEN NUESTROS PACIENTES</div>
                
                <div class="review-card" style="min-height: 250px; display: flex; flex-direction: column; justify-content: space-between; background: #fff; padding: 30px; border-radius: 12px; box-shadow: 0 5px 20px rgba(0,0,0,0.04);">
                    <div style="flex-grow: 1;">
                        <div class="review-header" style="display: flex; align-items: center; margin-bottom: 20px;">
                            <img :src="reviews[currentIndex].image" :alt="reviews[currentIndex].name" style="width: 50px; height: 50px; border-radius: 50%; object-fit: cover; margin-right: 15px;">
                            <div>
                                <h4 style="margin: 0; font-size: 1.1rem; color: var(--text-dark); font-weight: 600;">{{ reviews[currentIndex].name }}</h4>
                                <div class="stars" style="color: #FFB400; margin-top: 5px; font-size: 0.9rem;">
                                    <i v-for="n in reviews[currentIndex].stars" :key="n" class="fas fa-star"></i>
                                </div>
                            </div>
                            <div style="margin-left: auto; color: #4285F4; font-size: 1.2rem;" title="Verificado en Google">
                                <i class="fab fa-google"></i>
                            </div>
                        </div>

                        <div class="review-content" style="flex-grow: 1;">
                            <p style="color: var(--text-light); font-style: italic; line-height: 1.6; margin: 0;">"{{ reviews[currentIndex].text }}"</p>
                        </div>
                    </div>
                    
                    <div class="review-nav" style="display: flex; justify-content: space-between; align-items: center; margin-top: 30px;">
                        <i class="fas fa-chevron-left" @click="prevReview" style="cursor:pointer; color:var(--text-light); padding: 5px;"></i>
                        <div class="review-dots" style="display: flex; gap: 8px;">
                            <div v-for="(review, index) in reviews" :key="index" class="dot" :class="{ 'active': index === currentIndex }" @click="setReview(index)" style="width: 8px; height: 8px; border-radius: 50%; cursor: pointer; transition: all 0.3s ease;" :style="index === currentIndex ? 'background: #FFB400; transform: scale(1.2);' : 'background: #ccc;'"></div>
                        </div>
                        <i class="fas fa-chevron-right" @click="nextReview" style="cursor:pointer; color:var(--text-light); padding: 5px;"></i>
                    </div>
                </div>
            </div>
        </section>
    `
}
