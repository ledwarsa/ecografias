export default {
    template: `
        <div class="services-section" style="padding-top: 40px; padding-bottom: 60px;">
            <div class="container">
                <div class="section-header text-center" style="margin-bottom: 40px;">
                    <span class="subtitle">Nuestros Servicios</span>
                    <h2 style="font-size: 2.5rem; color: var(--primary);">Ecografías Generales</h2>
                    <p style="margin-top: 20px; color: var(--text-light); max-width: 800px; margin-left: auto; margin-right: auto; font-size: 1.1rem;">
                        Podrás agendar la cita fácilmente para tu ecografía general en cualquiera de nuestras 2 sedes en Bogotá.<br/>
                        Tenemos una sede al norte y otra al sur de Bogotá, de manera que tal vez alguna quede cerca a tu dirección.
                    </p>
                    <div style="margin-top: 30px; display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                        <a href="https://ecografiasbogota.site.agendapro.com/co" target="_blank" class="btn btn-primary" style="font-size: 1.1rem; padding: 12px 25px;">
                            <i class="far fa-calendar-check" style="margin-right:8px;"></i> Programar cita online
                        </a>
                        <a href="https://wa.link/alwgbn" target="_blank" class="btn btn-outline" style="font-size: 1.1rem; padding: 12px 25px;">
                            <i class="fab fa-whatsapp" style="margin-right:8px;"></i> Agendar por WhatsApp
                        </a>
                    </div>
                </div>

                <div class="text-center" style="margin-bottom: 50px;">
                    <h4 style="color: var(--primary); font-weight: 600; max-width: 900px; margin: 0 auto; line-height: 1.5;">Conoce nuestros servicios y la preparación que debes tener en cuenta antes de realizar el examen con nosotros. En Ecografías Bogotá cuidamos de ti.</h4>
                </div>

                <!-- Accordions en 2 columnas -->
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

                <div class="locations-cta" style="margin-top: 80px; text-align: center; background-color: var(--bg-light); padding: 50px 20px; border-radius: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.03);">
                    <h3 style="color: var(--primary); margin-bottom: 40px; font-size: 1.8rem; max-width: 700px; margin-left: auto; margin-right: auto; line-height: 1.4;">¡Agende usted mismo su cita de forma fácil y rápida!</h3>
                    <div class="locations-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; max-width: 900px; margin: 0 auto 40px auto; text-align: left;">
                        <div class="location-card" style="background: var(--white); padding: 30px; border-radius: 10px; box-shadow: 0 5px 20px rgba(0,0,0,0.08); transition: transform 0.3s; border-top: 4px solid var(--secondary);">
                            <h4 style="color: var(--secondary); margin-bottom: 15px; display: flex; align-items: center; gap: 10px; font-size: 1.3rem;">
                                <i class="fas fa-map-marker-alt"></i> SEDE SUR
                            </h4>
                            <p style="color: var(--text-light); margin: 0 0 20px 0; font-size: 1rem; line-height: 1.6;">
                                Sede Mandalay, Carrera 78#3A-40, barrio Mandalay.
                            </p>
                            <a href="https://maps.app.goo.gl/bmvqMyrGJUw8EAjcA" target="_blank" class="btn btn-outline-secondary" style="width: 100%; font-size: 1rem; padding: 10px;">Ver en Google Maps</a>
                        </div>
                        <div class="location-card" style="background: var(--white); padding: 30px; border-radius: 10px; box-shadow: 0 5px 20px rgba(0,0,0,0.08); transition: transform 0.3s; border-top: 4px solid var(--primary);">
                            <h4 style="color: var(--primary); margin-bottom: 15px; display: flex; align-items: center; gap: 10px; font-size: 1.3rem;">
                                <i class="fas fa-map-marker-alt"></i> SEDE NORTE
                            </h4>
                            <p style="color: var(--text-light); margin: 0 0 20px 0; font-size: 1rem; line-height: 1.6;">
                                ILARCO Av. Suba #115-58, Centro Ilarco. Torre C, Consultorio 208.<br/>
                                Frente a estación de Transmilenio “Av. Suba Calle 116” Bogotá.
                            </p>
                            <a href="https://www.google.com/maps/place/Ecograf%C3%ADas+Bogot%C3%A1/@4.699231,-74.069392,15z/data=!4m2!3m1!1s0x0:0xecb2e062ee644594?sa=X&ved=1t:2428&hl=es-419&ictx=111" target="_blank" class="btn btn-outline" style="width: 100%; font-size: 1rem; padding: 10px;">Ver en Google Maps</a>
                        </div>
                    </div>
                    <a href="https://ecografiasbogota.com/tarifas/" target="_blank" class="btn btn-primary" style="font-size: 1.2rem; padding: 15px 40px; box-shadow: 0 10px 20px rgba(0,207,191,0.3);">
                        Ver Tarifas
                    </a>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            group1: [
                {
                    title: "Renal, Bazo, Aorta",
                    description: "",
                    preparation: "No requiere preparación.",
                    isOpen: false
                },
                {
                    title: "Senos (Glándulas mamarias)",
                    description: "En esta ecografía se examinan ambas mamas, en todos sus planos.",
                    preparation: "No requiere preparación.",
                    isOpen: false
                },
                {
                    title: "Tejidos blandos (Pared abdominal, testículo, tiroides..)",
                    description: "Examina los planos superficiales (piel, tejido celular subcutáneo, músculo), glándulas y ganglios.",
                    preparation: "No requiere preparación.",
                    isOpen: false
                },
                {
                    title: "Hepatobiliar (Hígado y vías biliares)",
                    description: "Esta ecografía examina: hígado, vesícula, vías biliares y páncreas.",
                    preparation: "El paciente debe hacer ayuno por un tiempo mínimo de 6 horas previamente al examen; durante ese tiempo, si desea, puede tomar agua o aromáticas en agua.",
                    isOpen: false
                },
                {
                    title: "Abdominal total (Abdomino - pélvica)",
                    description: "Examina hígado, vesícula, vías biliares, páncreas, riñones, cavidad y grandes vasos abdominales, vejiga y órganos pélvicos.",
                    preparation: "El paciente debe hacer ayuno por un tiempo mínimo de 6 horas previamente al examen; durante ese tiempo, si desea, puede tomar agua o aromáticas en agua. Adicionalmente, una hora antes del examen, tomarse 6 vasos (o 1.5 litros) de agua y retener la orina.",
                    isOpen: false
                },
                {
                    title: "Diagnóstico Ecográfico Preventivo (DEP)",
                    description: "Esta ecografía, además de lo que examina la abdominal total, también examina tiroides y contenido escrotal (en hombre) y senos (mujer).",
                    preparation: "El paciente debe hacer ayuno por un tiempo mínimo de 6 horas previamente al examen; durante ese tiempo, si desea, puede tomar agua o aromáticas en agua. Adicionalmente, una hora antes del examen, tomarse 6 vasos (o 1.5 litros) de agua y retener la orina.",
                    isOpen: false
                }
            ],
            group2: [
                {
                    title: "Pélvica (ginecológica) transabdominal",
                    description: "Examina los órganos ginecológicos internos: útero (o matriz) y ovarios.",
                    preparation: "El paciente debe llenar vejiga: Tomar por lo menos un litro de líquido (preferiblemente agua) una hora antes del examen y retener la orina.",
                    isOpen: false
                },
                {
                    title: "Obstétrica transabdominal",
                    description: "Se toma generalmente después del primer trimestre del embarazo. Informa sobre el tiempo de embarazo, el bienestar del bebé, la fecha probable de parto. Además, si ya tiene 18 semanas o más, también informa el sexo del bebé.",
                    preparation: "No requiere preparación.",
                    isOpen: false
                },
                {
                    title: "Pélvica (ginecológica) transvaginal",
                    description: "Examina los órganos ginecológicos internos: útero (o matriz) y ovarios.",
                    preparation: "No requiere preparación.",
                    isOpen: false
                },
                {
                    title: "Obstétrica transvaginal",
                    description: "Se toma generalmente en el primer trimestre del embarazo. Informa sobre el tiempo de gestación, el bienestar del bebé, la fecha probable de parto.",
                    preparation: "No requiere preparación.",
                    isOpen: false
                },
                {
                    title: "Abdominal Superior",
                    description: "Esta ecografía examina hígado, vesícula, vías biliares, páncreas y riñones.",
                    preparation: "El paciente debe hacer ayuno por un tiempo mínimo de 6 horas previamente al examen; durante ese tiempo, si desea, puede tomar agua o aromáticas en agua.",
                    isOpen: false
                },
                {
                    title: "Próstata transabdominal",
                    description: "Esta ecografía examina la glándula prostática por vía abdominal.",
                    preparation: "El paciente debe llenar vejiga: Tomar por lo menos un litro de líquido (preferiblemente agua) una hora antes del examen y retener la orina.",
                    isOpen: false
                },
                {
                    title: "Renal y vías urinarias",
                    description: "Examina riñones, vías urinarias, vejiga y próstata. Adicionalmente mide el volumen vesical, premiccional y posmiccional.",
                    preparation: "El paciente debe llenar vejiga: Tomar por lo menos un litro de líquido (preferiblemente agua) una hora antes del examen y retener la orina.",
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
}
