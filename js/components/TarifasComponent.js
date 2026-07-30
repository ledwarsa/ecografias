export default {
    data() {
        return {
            categories: [
                {
                    name: 'Obstétricas y Pélvicas',
                    icon: 'fas fa-baby',
                    items: [
                        { name: 'Obstétrica transabdominal', price: 100000 },
                        { name: 'Obstétrica transvaginal', price: 110000 },
                        { name: 'Pélvica transabdominal', price: 100000 },
                        { name: 'Pélvica transvaginal', price: 110000 },
                        { name: 'Seguimiento ovulación (por sesión)', price: 100000 }
                    ]
                },
                {
                    name: 'Ecografías Especializadas y Doppers',
                    icon: 'fas fa-heartbeat',
                    items: [
                        { name: 'Doppler venoso o arterial miembros inferiores o superiores (bilateral)', price: 220000 },
                        { name: 'Doppler venoso o arterial miembro inferior o superior (unilateral)', price: 130000 },
                        { name: 'Doppler venoso y arterial de miembros superiores e inferiores (bilateral)', price: 400000 },
                        { name: 'Doppler venoso y arterial de miembro superior e inferior (unilateral)', price: 220000 },
                        { name: 'Doppler vasos cuello', price: 200000 },
                        { name: 'Doppler vasos pélvicos o abdominales', price: 200000 },
                        { name: 'Doppler testicular', price: 200000 },
                        { name: 'Doppler arterias renales', price: 200000 }
                    ]
                },
                {
                    name: 'Ecografías Generales',
                    icon: 'fas fa-stethoscope',
                    items: [
                        { name: 'Diagnóstico ecográfico preventivo (DEP)', price: 280000 },
                        { name: 'Abdominal superior', price: 120000 },
                        { name: 'Abdominal total', price: 140000 },
                        { name: 'Masas abdominales y retroperitoneo', price: 140000 },
                        { name: 'Hepatobiliar', price: 110000 },
                        { name: 'Renal y de vías urinarias', price: 120000 },
                        { name: 'Próstata transabdominal', price: 110000 },
                        { name: 'Próstata transrectal', price: 130000 },
                        { name: 'Renal, aorta, bazo', price: 120000 },
                        { name: 'Mamaria (sin implantes)', price: 110000 },
                        { name: 'Mamaria (con implantes)', price: 140000 },
                        { name: 'Articular unilateral', price: 110000 },
                        { name: 'Articular bilateral', price: 160000 },
                        { name: 'Testicular', price: 110000 },
                        { name: 'Tiroides-cuello', price: 110000 },
                        { name: 'Otras zonas del cuerpo', price: 110000 },
                        { name: 'Tejidos blandos con doppler', price: 140000 },
                        { name: 'Tejidos blandos bilateral', price: 160000 },
                        { name: 'Pericardio-pleura', price: 140000 },
                        { name: 'Tórax', price: 140000 }
                    ]
                }
            ]
        };
    },
    methods: {
        formatPrice(price) {
            return new Intl.NumberFormat('es-CO', {
                style: 'currency',
                currency: 'COP',
                minimumFractionDigits: 0
            }).format(price);
        }
    },
    template: `
        <div class="tarifas-section" style="padding-top: 60px; padding-bottom: 80px; background-color: var(--bg-light);">
            <div class="container">
                <div class="section-header text-center" style="margin-bottom: 60px;">
                    <span class="subtitle">Lista de Precios</span>
                    <h2 style="font-size: 2.8rem; color: var(--primary);">Tarifas Vigentes 2026</h2>
                    <p style="margin-top: 20px; color: var(--text-light); max-width: 700px; margin-left: auto; margin-right: auto; font-size: 1.1rem;">
                        Conoce los precios actualizados de nuestros servicios. Contamos con tecnología de punta y profesionales altamente calificados para brindarte el mejor diagnóstico.
                    </p>
                </div>

                <div class="tarifas-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 40px; align-items: start;">
                    <div v-for="(category, index) in categories" :key="index" class="tarifa-category-card" style="background: var(--white); border-radius: 16px; box-shadow: 0 10px 40px rgba(0,0,0,0.05); overflow: hidden; border: 1px solid var(--border);">
                        <div class="tarifa-header" style="background-color: var(--primary); padding: 25px; text-align: center; color: white;">
                            <i :class="category.icon" style="font-size: 2rem; color: var(--secondary); margin-bottom: 15px; display: block;"></i>
                            <h3 style="margin: 0; font-size: 1.4rem;">{{ category.name }}</h3>
                        </div>
                        <ul class="tarifa-list" style="list-style: none; padding: 0; margin: 0;">
                            <li v-for="(item, iIndex) in category.items" :key="iIndex" style="padding: 18px 25px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; transition: background-color 0.2s;">
                                <span style="font-weight: 500; color: var(--text-dark); flex: 1; padding-right: 15px; line-height: 1.4;">{{ item.name }}</span>
                                <span style="font-weight: 800; color: var(--secondary); font-size: 1.1rem; white-space: nowrap;">{{ formatPrice(item.price) }}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="text-center" style="margin-top: 60px;">
                    <a href="https://ecografiasbogota.site.agendapro.com/co" target="_blank" class="btn btn-primary" style="font-size: 1.2rem; padding: 15px 40px; border-radius: 30px; box-shadow: 0 10px 20px rgba(0, 207, 191, 0.3);">
                        <i class="far fa-calendar-check" style="margin-right:10px;"></i> Agendar Cita Ahora
                    </a>
                </div>
            </div>
        </div>
    `
};
