export default {
    template: `
        <div class="services-section" style="padding-top: 40px;">
            <div class="container">
                <div class="section-header text-center">
                    <span class="subtitle">Nuestros Servicios</span>
                    <h2>Ecografías Generales</h2>
                    <p style="margin-top: 20px; color: var(--text-light); max-width: 800px; margin-left: auto; margin-right: auto; font-size: 1.1rem;">
                        Podrás agendar la cita fácilmente para tu ecografía general en cualquiera de nuestras 2 sedes en Bogotá.
                        Tenemos una sede al norte y otra al sur de Bogotá, de manera que tal vez alguna quede cerca a tu dirección.
                    </p>
                    <div style="margin-top: 30px; display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                        <a href="https://ecografiasbogota.site.agendapro.com/co" target="_blank" class="btn btn-primary">
                            <i class="far fa-calendar-check" style="margin-right:8px;"></i> Programar cita online
                        </a>
                        <a href="#" class="btn btn-outline">
                            <i class="fab fa-whatsapp" style="margin-right:8px;"></i> Agendar por WhatsApp
                        </a>
                    </div>
                </div>

                <div class="services-grid" style="grid-template-columns: 1fr; max-width: 800px; margin: 0 auto; gap: 20px;">
                    <div class="service-card" v-for="(item, index) in items" :key="index" style="padding: 25px; border-left: 5px solid var(--secondary); text-align: left; transition: transform 0.2s;">
                        <h3 style="color: var(--primary); margin-bottom: 12px; font-size: 1.3rem;">
                            <i class="fas fa-stethoscope" style="color: var(--secondary); margin-right: 8px;"></i>
                            {{ item.title }}
                        </h3>
                        <p style="color: var(--text-light); margin-bottom: 15px; font-size: 1rem;" v-if="item.description">
                            {{ item.description }}
                        </p>
                        <div style="background-color: var(--bg-light); padding: 15px; border-radius: 8px;">
                            <p style="font-weight: 600; color: var(--text-dark); margin: 0; display: flex; align-items: flex-start; gap: 10px;">
                                <i class="fas fa-info-circle" style="color: var(--secondary); margin-top: 4px;"></i>
                                <span style="flex: 1;">{{ item.preparation }}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            items: [
                {
                    title: "Renal, Bazo, Aorta",
                    description: "",
                    preparation: "No requiere preparación."
                },
                {
                    title: "Senos (Glándulas mamarias)",
                    description: "En esta ecografía se examinan ambas mamas, en todos sus planos.",
                    preparation: "No requiere preparación."
                },
                {
                    title: "Tejidos blandos (Pared abdominal, testículo, tiroides..)",
                    description: "Examina los planos superficiales (piel, tejido celular subcutáneo, músculo), glándulas y ganglios.",
                    preparation: "No requiere preparación."
                },
                {
                    title: "Hepatobiliar (Hígado y vías biliares)",
                    description: "Esta ecografía examina: hígado, vesícula, vías biliares y páncreas.",
                    preparation: "Preparación: El paciente debe hacer ayuno por un tiempo mínimo de 6 horas previamente al examen; durante ese tiempo, si desea, puede tomar agua o aromáticas en agua."
                },
                {
                    title: "Abdominal total (Abdomino - pélvica)",
                    description: "Examina hígado, vesícula, vías biliares, páncreas, riñones, cavidad y grandes vasos abdominales, vejiga y órganos pélvicos.",
                    preparation: "Preparación: El paciente debe hacer ayuno por un tiempo mínimo de 6 horas previamente al examen; durante ese tiempo, si desea, puede tomar agua o aromáticas en agua. Adicionalmente, una hora antes del examen, tomarse 6 vasos (o 1.5 litros) de agua y retener la orina."
                },
                {
                    title: "Diagnóstico Ecográfico Preventivo (DEP)",
                    description: "Esta ecografía, además de lo que examina la abdominal total, también examina tiroides y contenido escrotal (en hombre) y senos (mujer).",
                    preparation: "Preparación: El paciente debe hacer ayuno por un tiempo mínimo de 6 horas previamente al examen; durante ese tiempo, si desea, puede tomar agua o aromáticas en agua. Adicionalmente, una hora antes del examen, tomarse 6 vasos (o 1.5 litros) de agua y retener la orina."
                },
                {
                    title: "Pélvica (ginecológica) transabdominal",
                    description: "Examina los órganos ginecológicos internos: útero (o matriz) y ovarios.",
                    preparation: "Preparación: El paciente debe llenar vejiga: Tomar por lo menos un litro de líquido (preferiblemente agua) una hora antes del examen y retener la orina."
                },
                {
                    title: "Obstétrica transabdominal",
                    description: "Se toma generalmente después del primer trimestre del embarazo. Informa sobre el tiempo de embarazo, el bienestar del bebé, la fecha probable de parto. Además, si ya tiene 18 semanas o más, también informa el sexo del bebé.",
                    preparation: "No requiere preparación."
                },
                {
                    title: "Pélvica (ginecológica) transvaginal",
                    description: "Examina los órganos ginecológicos internos: útero (o matriz) y ovarios.",
                    preparation: "No requiere preparación."
                },
                {
                    title: "Obstétrica transvaginal",
                    description: "Se toma generalmente en el primer trimestre del embarazo. Informa sobre el tiempo de gestación, el bienestar del bebé, la fecha probable de parto.",
                    preparation: "No requiere preparación."
                },
                {
                    title: "Abdominal Superior",
                    description: "Esta ecografía examina hígado, vesícula, vías biliares, páncreas y riñones.",
                    preparation: "Preparación: El paciente debe hacer ayuno por un tiempo mínimo de 6 horas previamente al examen; durante ese tiempo, si desea, puede tomar agua o aromáticas en agua."
                },
                {
                    title: "Próstata transabdominal",
                    description: "Esta ecografía examina la glándula prostática por vía abdominal.",
                    preparation: "Preparación: El paciente debe llenar vejiga: Tomar por lo menos un litro de líquido (preferiblemente agua) una hora antes del examen y retener la orina."
                },
                {
                    title: "Renal y vías urinarias",
                    description: "Examina riñones, vías urinarias, vejiga y próstata. Adicionalmente mide el volumen vesical, premiccional y posmiccional.",
                    preparation: "Preparación: El paciente debe llenar vejiga: Tomar por lo menos un litro de líquido (preferiblemente agua) una hora antes del examen y retener la orina."
                }
            ]
        }
    }
}
