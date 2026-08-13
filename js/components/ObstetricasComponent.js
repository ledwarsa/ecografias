export default {
    template: `
        <div class="services-section" style="padding-top: 40px; padding-bottom: 60px;">
            <div class="container">
                <div class="section-header text-center" style="margin-bottom: 40px;">
                    <span class="subtitle">Nuestros Servicios</span>
                    <h2 style="font-size: 2.5rem; color: var(--primary);">Ecografías Obstétricas Avanzadas</h2>
                    <p style="margin-top: 20px; color: var(--text-light); max-width: 800px; margin-left: auto; margin-right: auto; font-size: 1.1rem;">
                        Contamos con los equipos de última tecnología para realizar ecografías obstétricas de alta complejidad que te darán tranquilidad a ti y a tu médico.
                    </p>
                </div>

                <div class="accordion-layout two-columns">
                    <div class="accordion-list">
                        <div class="accordion-item" v-for="(item, index) in group1" :key="'g1-'+index" :class="{ 'active': item.isOpen }">
                            <div class="accordion-header" @click="toggleAccordion(group1, index)">
                                <h3>
                                    <i class="fas fa-stethoscope" style="color: var(--secondary); margin-right: 10px; font-size: 1.1rem;"></i>
                                    {{ item.title }}
                                </h3>
                                <i :class="item.isOpen ? 'fas fa-minus' : 'fas fa-plus'" style="color: var(--secondary); font-size: 1.2rem;"></i>
                            </div>
                            <div class="accordion-content" v-show="item.isOpen">
                                <div class="accordion-inner">
                                    <p v-if="item.description" style="color: var(--text-dark); margin-bottom: 15px; font-size: 1.05rem; line-height: 1.5;">
                                        {{ item.description }}
                                    </p>
                                    <p style="font-weight: 600; color: var(--primary); margin-bottom: 5px;">Preparación:</p>
                                    <p style="color: var(--text-light); margin: 0; font-size: 0.95rem; line-height: 1.5;">
                                        {{ item.preparation }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-list">
                        <div class="accordion-item" v-for="(item, index) in group2" :key="'g2-'+index" :class="{ 'active': item.isOpen }">
                            <div class="accordion-header" @click="toggleAccordion(group2, index)">
                                <h3>
                                    <i class="fas fa-stethoscope" style="color: var(--secondary); margin-right: 10px; font-size: 1.1rem;"></i>
                                    {{ item.title }}
                                </h3>
                                <i :class="item.isOpen ? 'fas fa-minus' : 'fas fa-plus'" style="color: var(--secondary); font-size: 1.2rem;"></i>
                            </div>
                            <div class="accordion-content" v-show="item.isOpen">
                                <div class="accordion-inner">
                                    <p v-if="item.description" style="color: var(--text-dark); margin-bottom: 15px; font-size: 1.05rem; line-height: 1.5;">
                                        {{ item.description }}
                                    </p>
                                    <p style="font-weight: 600; color: var(--primary); margin-bottom: 5px;">Preparación:</p>
                                    <p style="color: var(--text-light); margin: 0; font-size: 0.95rem; line-height: 1.5;">
                                        {{ item.preparation }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tarifa-category-card" style="max-width: 800px; margin: 60px auto 0 auto; background: var(--white); border-radius: 16px; box-shadow: 0 10px 40px rgba(0,0,0,0.05); overflow: hidden; border: 1px solid var(--border);">
                    <div class="tarifa-header" style="background-color: var(--primary); padding: 25px; text-align: center; color: white;">
                        <i class="fas fa-baby" style="font-size: 2rem; color: var(--secondary); margin-bottom: 15px; display: block;"></i>
                        <h3 style="margin: 0; font-size: 1.4rem;">Tarifas de Ecografías Obstétricas y Pélvicas</h3>
                    </div>
                    <ul class="tarifa-list" style="list-style: none; padding: 0; margin: 0;">
                        <li style="padding: 18px 25px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; transition: background-color 0.2s;">
                            <span style="font-weight: 500; color: var(--text-dark); flex: 1; padding-right: 15px; line-height: 1.4;">Obstétrica transabdominal</span>
                            <span style="font-weight: 800; color: var(--secondary); font-size: 1.1rem; white-space: nowrap;">$ 100.000</span>
                        </li>
                        <li style="padding: 18px 25px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; transition: background-color 0.2s;">
                            <span style="font-weight: 500; color: var(--text-dark); flex: 1; padding-right: 15px; line-height: 1.4;">Obstétrica transvaginal</span>
                            <span style="font-weight: 800; color: var(--secondary); font-size: 1.1rem; white-space: nowrap;">$ 110.000</span>
                        </li>
                        <li style="padding: 18px 25px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; transition: background-color 0.2s;">
                            <span style="font-weight: 500; color: var(--text-dark); flex: 1; padding-right: 15px; line-height: 1.4;">Pélvica transabdominal</span>
                            <span style="font-weight: 800; color: var(--secondary); font-size: 1.1rem; white-space: nowrap;">$ 100.000</span>
                        </li>
                        <li style="padding: 18px 25px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; transition: background-color 0.2s;">
                            <span style="font-weight: 500; color: var(--text-dark); flex: 1; padding-right: 15px; line-height: 1.4;">Pélvica transvaginal</span>
                            <span style="font-weight: 800; color: var(--secondary); font-size: 1.1rem; white-space: nowrap;">$ 110.000</span>
                        </li>
                        <li style="padding: 18px 25px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; transition: background-color 0.2s;">
                            <span style="font-weight: 500; color: var(--text-dark); flex: 1; padding-right: 15px; line-height: 1.4;">Seguimiento ovulación (por sesión)</span>
                            <span style="font-weight: 800; color: var(--secondary); font-size: 1.1rem; white-space: nowrap;">$ 100.000</span>
                        </li>
                    </ul>
                </div>

                <div class="locations-cta" style="margin-top: 80px; text-align: center; background-color: var(--bg-light); padding: 50px 20px; border-radius: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.03);">
                    <h3 style="color: var(--primary); margin-bottom: 40px; font-size: 1.8rem; max-width: 700px; margin-left: auto; margin-right: auto; line-height: 1.4;">¡Agende usted mismo su cita de forma fácil y rápida!</h3>
                    <div class="text-center" style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; margin-bottom: 40px;">
                        <a href="https://ecografiasbogota.agendapro.com/co" target="_blank" class="btn btn-primary" style="font-size: 1.1rem; padding: 12px 30px;">
                            <i class="far fa-calendar-check" style="margin-right: 8px;"></i> Programar cita online
                        </a>
                        <a href="https://wa.link/42dexe" target="_blank" class="btn btn-outline" style="font-size: 1.1rem; padding: 12px 30px; display: inline-flex; align-items: center; gap: 8px;">
                            <i class="fab fa-whatsapp"></i> Agendar por WhatsApp
                        </a>
                    </div>
                    <div class="locations-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; max-width: 1000px; margin: 0 auto 40px auto; text-align: left;">
                        <div class="location-card" style="background: var(--white); padding: 30px 20px; border-radius: 12px; box-shadow: 0 5px 20px rgba(0,0,0,0.04); transition: transform 0.3s; border-top: 4px solid var(--secondary); display: grid; grid-template-columns: 80px 1fr auto; gap: 15px; align-items: center; border-left: 1px solid #eee; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <div style="display: flex; align-items: center; justify-content: flex-start; color: var(--secondary); font-weight: 800; font-size: 1rem; gap: 8px;">
                                <i class="fas fa-map-marker-alt" style="font-size: 1.4rem;"></i>
                                <span style="line-height: 1.2;">SEDE<br>SUR</span>
                            </div>
                            <div style="color: var(--text-light); font-size: 0.95rem; line-height: 1.6; display: flex; align-items: center;">
                                <div>Sede Mandalay, Carrera 78 #<br>3A-40,<br>Barrio Mandalay.</div>
                            </div>
                            <a href="https://www.google.com/maps/place/Cra.+78+%233a-40,+Kennedy,+Bogot%C3%A1/@4.6252819,-74.1490823,15z/data=!4m6!3m5!1s0x8e3f9f5926d07815:0x6d51969686894a13!8m2!3d4.6276135!4d-74.1449898!16s%2Fg%2F11nxn__j3x?entry=ttu" target="_blank" class="btn" style="border: 2px solid var(--secondary); color: var(--secondary); display: flex; align-items: center; justify-content: center; text-align: center; padding: 10px 20px; font-size: 0.9rem; font-weight: 700; line-height: 1.4; background: transparent; border-radius: 6px; transition: all 0.2s;">
                                Ver mapa
                            </a>
                        </div>
                        <div class="location-card" style="background: var(--white); padding: 30px 20px; border-radius: 12px; box-shadow: 0 5px 20px rgba(0,0,0,0.04); transition: transform 0.3s; border-top: 4px solid var(--primary); display: grid; grid-template-columns: 80px 1fr auto; gap: 15px; align-items: center; border-left: 1px solid #eee; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <div style="display: flex; align-items: center; justify-content: flex-start; color: var(--primary); font-weight: 800; font-size: 1rem; gap: 8px;">
                                <i class="fas fa-map-marker-alt" style="font-size: 1.4rem;"></i>
                                <span style="line-height: 1.2;">SEDE<br>NORTE</span>
                            </div>
                            <div style="color: var(--text-light); font-size: 0.95rem; line-height: 1.6; display: flex; align-items: center;">
                                <div>ILARCO Av. Suba #115-58,<br>Centro Ilarco. Torre C,<br>Consultorio 208.<br>Frente a estación de<br>Transmilenio "Av. Suba Calle<br>116" Bogotá.</div>
                            </div>
                            <a href="https://www.google.com/maps/place/Ecograf%C3%ADas+Bogot%C3%A1/@4.6991789,-74.0694352,3a,100.9y/data=!3m8!1e2!3m6!1sCIABIhAA3ilWYAGlLGgKvO8ABURR!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAHRPTWmqU-dLLIgy-naytBkGfhqtToLfY8oJEz1vNFEsOVNm5mIojcKAC7lAKOBoR21ECVGFkiIj6W_eH2ODVH_q05uUzy8bIjOPx8cEZERWGhUeyKbEZd096nyaFL5N8g0-zcf5xcE-Uyp_H2E%3Dw114-h86-k-no!7i512!8i384!4m7!3m6!1s0x8e3f9b30311359f5:0xecb2e062ee644594!8m2!3d4.6991074!4d-74.0694081!10e5!16s%2Fg%2F11n1x9930v?hl=es-419&entry=ttu" target="_blank" class="btn" style="border: 2px solid var(--primary); color: var(--primary); display: flex; align-items: center; justify-content: center; text-align: center; padding: 10px 20px; font-size: 0.9rem; font-weight: 700; line-height: 1.4; background: transparent; border-radius: 6px; transition: all 0.2s;">
                                Ver mapa
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            group1: [
                {
                    title: "Ecografía de detalle anatómico o Ecografía de morfología fetal",
                    description: "Se toma generalmente entre la semana 20 y 25. Como su nombre indica, examina detenidamente el desarrollo del cuerpo fetal y sus partes, dando un diagnóstico más amplio sobre el bienestar fetal. Adicionalmente examina placenta, cordón umbilical, líquido amniótico y condiciones del útero materno. Es realizada por un médico especialista en genética humana.",
                    preparation: "No se requiere preparación.",
                    isOpen: false
                },
                {
                    title: "Ecografía 11-14 semanas, sonolucencia nucal, translucencia nucal o tamizaje",
                    description: "Esta se toma generalmente entre la semana 11 y 14. El principal objetivo de este examen es detectar posibles enfermedades cromosómicas, cardíacas, linfáticas y otras. Se evalúa la Translucencia Nucal propiamente dicha, el Hueso Nasal y el Ductus. Es realizada por un médico especialista en genética humana.",
                    preparation: "No se requiere preparación.",
                    isOpen: false
                },
                {
                    title: "Doppler de inserción placentaria",
                    description: "Este doppler se toma en úteros que tienen cicatrices, ya sea por cesáreas, resección de miomas, legrados u otras intervenciones. Busca identificar si la placenta se encuentra en la cicatriz, si la invade o la traspasa, e incluso, si se está saliendo del mismo útero.",
                    preparation: "No se requiere preparación.",
                    isOpen: false
                }
            ],
            group2: [
                {
                    title: "Doppler fetoplacentario o Doppler obstétrico",
                    description: "El objetivo de este doppler es valorar la cantidad de oxígeno que llega de la madre al feto por el cordón umbilical, con el fin de determinar si esta cantidad está disminuida y puede ser factor de riesgo para el desarrollo del feto.",
                    preparation: "No se requiere preparación.",
                    isOpen: false
                },
                {
                    title: "Doppler de arterias uterinas",
                    description: "Se realiza generalmente en la semana 11 y 14 para conocer el riesgo de la madre de presentar alteraciones futuras con la tensión arterial elevada (preeclampsia). También sirve para predecir la posibilidad de que el feto presente restricción del crecimiento intrauterino. Entre las semanas 20 y 30 este doppler puede repetirse para seguimiento de los riesgos descritos.",
                    preparation: "No se requiere preparación.",
                    isOpen: false
                }
            ]
        }
    },
    methods: {
        toggleAccordion(group, index) {
            group[index].isOpen = !group[index].isOpen;
        }
    }
};
