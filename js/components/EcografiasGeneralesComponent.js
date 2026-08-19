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

                <div class="tarifa-category-card" style="max-width: 800px; margin: 60px auto 0 auto; background: var(--white); border-radius: 16px; box-shadow: 0 10px 40px rgba(0,0,0,0.05); overflow: hidden; border: 1px solid var(--border);">
                    <div class="tarifa-header" style="background-color: var(--primary); padding: 25px; text-align: center; color: white;">
                        <i class="fas fa-stethoscope" style="font-size: 2rem; color: var(--secondary); margin-bottom: 15px; display: block;"></i>
                        <h3 style="margin: 0; font-size: 1.4rem;">Tarifas de Ecografías Generales</h3>
                    </div>
                    <ul class="tarifa-list" style="list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 0 20px;">
                        <li style="padding: 18px 25px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; transition: background-color 0.2s;">
                            <span style="font-weight: 500; color: var(--text-dark); flex: 1; padding-right: 15px; line-height: 1.4;">Diagnóstico ecográfico preventivo (DEP)</span>
                            <span style="font-weight: 800; color: var(--secondary); font-size: 1.1rem; white-space: nowrap;">$ 280.000</span>
                        </li>
                        <li style="padding: 18px 25px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; transition: background-color 0.2s;">
                            <span style="font-weight: 500; color: var(--text-dark); flex: 1; padding-right: 15px; line-height: 1.4;">Abdominal superior</span>
                            <span style="font-weight: 800; color: var(--secondary); font-size: 1.1rem; white-space: nowrap;">$ 120.000</span>
                        </li>
                        <li style="padding: 18px 25px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; transition: background-color 0.2s;">
                            <span style="font-weight: 500; color: var(--text-dark); flex: 1; padding-right: 15px; line-height: 1.4;">Abdominal total</span>
                            <span style="font-weight: 800; color: var(--secondary); font-size: 1.1rem; white-space: nowrap;">$ 140.000</span>
                        </li>
                        <li style="padding: 18px 25px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; transition: background-color 0.2s;">
                            <span style="font-weight: 500; color: var(--text-dark); flex: 1; padding-right: 15px; line-height: 1.4;">Masas abdominales y retroperitoneo</span>
                            <span style="font-weight: 800; color: var(--secondary); font-size: 1.1rem; white-space: nowrap;">$ 140.000</span>
                        </li>
                        <li style="padding: 18px 25px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; transition: background-color 0.2s;">
                            <span style="font-weight: 500; color: var(--text-dark); flex: 1; padding-right: 15px; line-height: 1.4;">Hepatobiliar</span>
                            <span style="font-weight: 800; color: var(--secondary); font-size: 1.1rem; white-space: nowrap;">$ 110.000</span>
                        </li>
                        <li style="padding: 18px 25px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; transition: background-color 0.2s;">
                            <span style="font-weight: 500; color: var(--text-dark); flex: 1; padding-right: 15px; line-height: 1.4;">Renal y de vías urinarias</span>
                            <span style="font-weight: 800; color: var(--secondary); font-size: 1.1rem; white-space: nowrap;">$ 120.000</span>
                        </li>
                        <li style="padding: 18px 25px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; transition: background-color 0.2s;">
                            <span style="font-weight: 500; color: var(--text-dark); flex: 1; padding-right: 15px; line-height: 1.4;">Próstata transabdominal</span>
                            <span style="font-weight: 800; color: var(--secondary); font-size: 1.1rem; white-space: nowrap;">$ 110.000</span>
                        </li>
                        <li style="padding: 18px 25px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; transition: background-color 0.2s;">
                            <span style="font-weight: 500; color: var(--text-dark); flex: 1; padding-right: 15px; line-height: 1.4;">Próstata transrectal</span>
                            <span style="font-weight: 800; color: var(--secondary); font-size: 1.1rem; white-space: nowrap;">$ 130.000</span>
                        </li>
                        <li style="padding: 18px 25px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; transition: background-color 0.2s;">
                            <span style="font-weight: 500; color: var(--text-dark); flex: 1; padding-right: 15px; line-height: 1.4;">Renal, aorta, bazo</span>
                            <span style="font-weight: 800; color: var(--secondary); font-size: 1.1rem; white-space: nowrap;">$ 120.000</span>
                        </li>
                        <li style="padding: 18px 25px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; transition: background-color 0.2s;">
                            <span style="font-weight: 500; color: var(--text-dark); flex: 1; padding-right: 15px; line-height: 1.4;">Mamaria (sin implantes)</span>
                            <span style="font-weight: 800; color: var(--secondary); font-size: 1.1rem; white-space: nowrap;">$ 110.000</span>
                        </li>
                        <li style="padding: 18px 25px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; transition: background-color 0.2s;">
                            <span style="font-weight: 500; color: var(--text-dark); flex: 1; padding-right: 15px; line-height: 1.4;">Mamaria (con implantes)</span>
                            <span style="font-weight: 800; color: var(--secondary); font-size: 1.1rem; white-space: nowrap;">$ 140.000</span>
                        </li>
                        <li style="padding: 18px 25px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; transition: background-color 0.2s;">
                            <span style="font-weight: 500; color: var(--text-dark); flex: 1; padding-right: 15px; line-height: 1.4;">Articular unilateral</span>
                            <span style="font-weight: 800; color: var(--secondary); font-size: 1.1rem; white-space: nowrap;">$ 110.000</span>
                        </li>
                        <li style="padding: 18px 25px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; transition: background-color 0.2s;">
                            <span style="font-weight: 500; color: var(--text-dark); flex: 1; padding-right: 15px; line-height: 1.4;">Articular bilateral</span>
                            <span style="font-weight: 800; color: var(--secondary); font-size: 1.1rem; white-space: nowrap;">$ 160.000</span>
                        </li>
                        <li style="padding: 18px 25px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; transition: background-color 0.2s;">
                            <span style="font-weight: 500; color: var(--text-dark); flex: 1; padding-right: 15px; line-height: 1.4;">Testicular</span>
                            <span style="font-weight: 800; color: var(--secondary); font-size: 1.1rem; white-space: nowrap;">$ 110.000</span>
                        </li>
                        <li style="padding: 18px 25px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; transition: background-color 0.2s;">
                            <span style="font-weight: 500; color: var(--text-dark); flex: 1; padding-right: 15px; line-height: 1.4;">Tiroides-cuello</span>
                            <span style="font-weight: 800; color: var(--secondary); font-size: 1.1rem; white-space: nowrap;">$ 110.000</span>
                        </li>
                        <li style="padding: 18px 25px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; transition: background-color 0.2s;">
                            <span style="font-weight: 500; color: var(--text-dark); flex: 1; padding-right: 15px; line-height: 1.4;">Otras zonas del cuerpo</span>
                            <span style="font-weight: 800; color: var(--secondary); font-size: 1.1rem; white-space: nowrap;">$ 110.000</span>
                        </li>
                        <li style="padding: 18px 25px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; transition: background-color 0.2s;">
                            <span style="font-weight: 500; color: var(--text-dark); flex: 1; padding-right: 15px; line-height: 1.4;">Tejidos blandos con doppler</span>
                            <span style="font-weight: 800; color: var(--secondary); font-size: 1.1rem; white-space: nowrap;">$ 140.000</span>
                        </li>
                        <li style="padding: 18px 25px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; transition: background-color 0.2s;">
                            <span style="font-weight: 500; color: var(--text-dark); flex: 1; padding-right: 15px; line-height: 1.4;">Tejidos blandos bilateral</span>
                            <span style="font-weight: 800; color: var(--secondary); font-size: 1.1rem; white-space: nowrap;">$ 160.000</span>
                        </li>
                        <li style="padding: 18px 25px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; transition: background-color 0.2s;">
                            <span style="font-weight: 500; color: var(--text-dark); flex: 1; padding-right: 15px; line-height: 1.4;">Pericardio-pleura</span>
                            <span style="font-weight: 800; color: var(--secondary); font-size: 1.1rem; white-space: nowrap;">$ 140.000</span>
                        </li>
                        <li style="padding: 18px 25px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; transition: background-color 0.2s;">
                            <span style="font-weight: 500; color: var(--text-dark); flex: 1; padding-right: 15px; line-height: 1.4;">Tórax</span>
                            <span style="font-weight: 800; color: var(--secondary); font-size: 1.1rem; white-space: nowrap;">$ 140.000</span>
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
                        <!-- Sede Sur -->
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
                        <!-- Sede Norte -->
                        <div class="location-card" style="background: var(--white); padding: 30px 20px; border-radius: 12px; box-shadow: 0 5px 20px rgba(0,0,0,0.04); transition: transform 0.3s; border-top: 4px solid var(--primary); display: grid; grid-template-columns: 80px 1fr auto; gap: 15px; align-items: center; border-left: 1px solid #eee; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <div style="display: flex; align-items: center; justify-content: flex-start; color: var(--primary); font-weight: 800; font-size: 1rem; gap: 8px;">
                                <i class="fas fa-map-marker-alt" style="font-size: 1.4rem;"></i>
                                <span style="line-height: 1.2;">SEDE<br>NORTE</span>
                            </div>
                            <div style="color: var(--text-light); font-size: 0.95rem; line-height: 1.6; display: flex; align-items: center;">
                                <div>ILARCO Av. Suba #115-58,<br>Centro Ilarco. Torre C,<br>Consultorio 208.<br>Frente a estación de<br>Transmilenio "Av. Suba Calle<br>116" Bogotá.</div>
                            </div>
                            <a href="https://www.google.com/maps/place/Ecograf%C3%ADas+Bogot%C3%A1/@4.6991789,-74.0694352,15z/data=!4m15!1m8!3m7!1s0x8e3f9b30311359f5:0xecb2e062ee644594!2zRWNvZ3JhZsOtYXMgQm9nb3TDoQ!8m2!3d4.6991074!4d-74.0694081!10e5!16s%2Fg%2F11n1x9930v!3m5!1s0x8e3f9b30311359f5:0xecb2e062ee644594!8m2!3d4.6991074!4d-74.0694081!16s%2Fg%2F11n1x9930v?hl=es-419&entry=ttu&g_ep=EgoyMDI2MDgxNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" class="btn" style="border: 2px solid var(--primary); color: var(--primary); display: flex; align-items: center; justify-content: center; text-align: center; padding: 10px 20px; font-size: 0.9rem; font-weight: 700; line-height: 1.4; background: transparent; border-radius: 6px; transition: all 0.2s;">
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
