export default {
    template: `
        <div class="services-section" style="padding-top: 40px; padding-bottom: 60px;">
            <div class="container">
                <div class="section-header text-center" style="margin-bottom: 40px;">
                    <span class="subtitle">Nuestros Servicios</span>
                    <h2 style="font-size: 2.5rem; color: var(--primary);">Diagnóstico Ecográfico Preventivo (DEP)</h2>
                    <p style="margin-top: 20px; color: var(--text-light); max-width: 800px; margin-left: auto; margin-right: auto; font-size: 1.1rem;">
                        <strong>TODO EN UN SOLO EXAMEN</strong>
                    </p>
                </div>

                <div class="row align-items-center" style="margin-bottom: 50px;">
                    <div class="col-md-6">
                        <ul style="list-style: none; padding-left: 0;">
                            <li style="margin-bottom: 15px; font-size: 1.1rem; display: flex; align-items: flex-start;">
                                <i class="fas fa-check" style="color: var(--secondary); margin-top: 5px; margin-right: 15px; font-size: 1.2rem;"></i>
                                <span style="color: var(--text-dark);">El DEP (diagnóstico ecográfico preventivo) es el examen preventivo más completo que ofrecemos.</span>
                            </li>
                            <li style="margin-bottom: 15px; font-size: 1.1rem; display: flex; align-items: flex-start;">
                                <i class="fas fa-check" style="color: var(--secondary); margin-top: 5px; margin-right: 15px; font-size: 1.2rem;"></i>
                                <span style="color: var(--text-dark);">Al tomar este examen pueden descartarse muchas alteraciones o anormalidades como: tiroides grande, nódulos en la tiroides, quistes o masas en los senos, hígado graso, cálculos en la vesícula o en los riñones o en la vejiga, miomas en el útero, quistes en los ovarios, inflamaciones o masas testiculares, etc, etc.</span>
                            </li>
                            <li style="margin-bottom: 15px; font-size: 1.1rem; display: flex; align-items: flex-start;">
                                <i class="fas fa-check" style="color: var(--secondary); margin-top: 5px; margin-right: 15px; font-size: 1.2rem;"></i>
                                <span style="color: var(--text-dark);">Al tomar este examen se está ahorrando un 20% en el costo de tomar los exámenes por separado.</span>
                            </li>
                            <li style="margin-bottom: 15px; font-size: 1.1rem; display: flex; align-items: flex-start;">
                                <i class="fas fa-check" style="color: var(--secondary); margin-top: 5px; margin-right: 15px; font-size: 1.2rem;"></i>
                                <span style="color: var(--text-dark);">La mejor forma de ahorrar en los costos de salud es previniendo. Prevenir es la mejor forma de ahorrar.</span>
                            </li>
                            <li style="margin-bottom: 15px; font-size: 1.1rem; display: flex; align-items: flex-start;">
                                <i class="fas fa-check" style="color: var(--secondary); margin-top: 5px; margin-right: 15px; font-size: 1.2rem;"></i>
                                <span style="color: var(--text-dark);">Para este examen se requiere un tiempo aproximado de solo 60 minutos.</span>
                            </li>
                            <li style="margin-bottom: 15px; font-size: 1.1rem; display: flex; align-items: flex-start;">
                                <i class="fas fa-check" style="color: var(--secondary); margin-top: 5px; margin-right: 15px; font-size: 1.2rem;"></i>
                                <span style="color: var(--text-dark);">El examen se realiza con ultrasonido (ecografía) por encima de la piel, es decir que no es invasivo.</span>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <img src="https://ecografiasbogota.com/wp-content/uploads/2024/03/woman-getting-ultrasound-abdomen-from-doctor-1.jpg" alt="Ecografía" style="width: 100%; border-radius: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
                    </div>
                </div>

                <div class="locations-cta" style="margin-top: 80px; text-align: center; background-color: var(--bg-light); padding: 50px 20px; border-radius: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.03);">
                    <h3 style="color: var(--primary); margin-bottom: 40px; font-size: 1.8rem; max-width: 700px; margin-left: auto; margin-right: auto; line-height: 1.4;">¡Agende usted mismo su cita de forma fácil y rápida!</h3>
                    <div class="locations-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(380px, 1fr)); gap: 30px; max-width: 1000px; margin: 0 auto 40px auto; text-align: left;">
                        <div class="location-card" style="background: var(--white); padding: 30px 20px; border-radius: 12px; box-shadow: 0 5px 20px rgba(0,0,0,0.04); transition: transform 0.3s; border-top: 4px solid var(--secondary); display: grid; grid-template-columns: 80px 1fr 110px; gap: 15px; align-items: stretch; border-left: 1px solid #eee; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <div style="display: flex; align-items: center; justify-content: flex-start; color: var(--secondary); font-weight: 800; font-size: 1rem; gap: 8px;">
                                <i class="fas fa-map-marker-alt" style="font-size: 1.4rem;"></i>
                                <span style="line-height: 1.2;">SEDE<br>SUR</span>
                            </div>
                            <div style="color: var(--text-light); font-size: 0.95rem; line-height: 1.6; display: flex; align-items: center;">
                                <div>Sede Mandalay, Carrera 78 #<br>3A-40,<br>Barrio Mandalay.</div>
                            </div>
                            <a href="https://www.google.com/maps/place/Cra.+78+%233a-40,+Kennedy,+Bogot%C3%A1/@4.6252819,-74.1490823,15z/data=!4m6!3m5!1s0x8e3f9f5926d07815:0x6d51969686894a13!8m2!3d4.6276135!4d-74.1449898!16s%2Fg%2F11nxn__j3x?entry=ttu" target="_blank" class="btn" style="border: 2px solid var(--secondary); color: var(--secondary); display: flex; align-items: center; justify-content: center; text-align: center; padding: 15px 10px; font-size: 0.9rem; font-weight: 700; line-height: 1.4; background: transparent; border-radius: 6px; height: 100%; transition: all 0.2s;">
                                Ver en<br>Google<br>Maps
                            </a>
                        </div>
                        <div class="location-card" style="background: var(--white); padding: 30px 20px; border-radius: 12px; box-shadow: 0 5px 20px rgba(0,0,0,0.04); transition: transform 0.3s; border-top: 4px solid var(--primary); display: grid; grid-template-columns: 80px 1fr 110px; gap: 15px; align-items: stretch; border-left: 1px solid #eee; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <div style="display: flex; align-items: center; justify-content: flex-start; color: var(--primary); font-weight: 800; font-size: 1rem; gap: 8px;">
                                <i class="fas fa-map-marker-alt" style="font-size: 1.4rem;"></i>
                                <span style="line-height: 1.2;">SEDE<br>NORTE</span>
                            </div>
                            <div style="color: var(--text-light); font-size: 0.95rem; line-height: 1.6; display: flex; align-items: center;">
                                <div>ILARCO Av. Suba #115-58,<br>Centro Ilarco. Torre C,<br>Consultorio 208.<br>Frente a estación de<br>Transmilenio "Av. Suba Calle<br>116" Bogotá.</div>
                            </div>
                            <a href="https://www.google.com/maps/place/Ecograf%C3%ADas+Bogot%C3%A1/@4.6991789,-74.0694352,3a,100.9y/data=!3m8!1e2!3m6!1sCIABIhAA3ilWYAGlLGgKvO8ABURR!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAHRPTWmqU-dLLIgy-naytBkGfhqtToLfY8oJEz1vNFEsOVNm5mIojcKAC7lAKOBoR21ECVGFkiIj6W_eH2ODVH_q05uUzy8bIjOPx8cEZERWGhUeyKbEZd096nyaFL5N8g0-zcf5xcE-Uyp_H2E%3Dw114-h86-k-no!7i512!8i384!4m7!3m6!1s0x8e3f9b30311359f5:0xecb2e062ee644594!8m2!3d4.6991074!4d-74.0694081!10e5!16s%2Fg%2F11n1x9930v?hl=es-419&entry=ttu" target="_blank" class="btn" style="border: 2px solid var(--primary); color: var(--primary); display: flex; align-items: center; justify-content: center; text-align: center; padding: 15px 10px; font-size: 0.9rem; font-weight: 700; line-height: 1.4; background: transparent; border-radius: 6px; height: 100%; transition: all 0.2s;">
                                Ver en<br>Google<br>Maps
                            </a>
                        </div>
                    </div>
                    <a href="https://ecografiasbogota.agendapro.com/co" target="_blank" class="btn btn-primary" style="font-size: 1.2rem; padding: 15px 40px; box-shadow: 0 10px 20px rgba(0,207,191,0.3);">
                        Agendar Cita
                    </a>
                </div>
            </div>
        </div>
    `
};
