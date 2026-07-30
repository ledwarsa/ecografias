export default {
    template: `
        <div class="nosotros-section" style="padding-top: 60px; padding-bottom: 60px;">
            <div class="container">
                <div class="section-header text-center" style="margin-bottom: 50px;">
                    <span class="subtitle">Sobre Nosotros</span>
                    <h2 style="font-size: 2.5rem; color: var(--primary);">Quiénes Somos</h2>
                </div>

                <div class="about-content" style="display: flex; flex-wrap: wrap; gap: 40px; align-items: center; margin-bottom: 60px;">
                    <div class="about-text" style="flex: 1; min-width: 300px;">
                        <h3 style="color: var(--secondary); margin-bottom: 20px; font-size: 1.8rem;">Ecografías Bogotá</h3>
                        <p style="color: var(--text-dark); font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;">
                            Ecografías Bogotá fue fundada en 2021 por un equipo de especialistas con más de 15 años de experiencia en diagnóstico ecográfico. Somos líderes en innovación utilizando técnicas y equipos de ultrasonido de alta tecnología.
                        </p>
                        <h4 style="color: var(--primary); margin-bottom: 15px; font-size: 1.3rem;">Lo que nos diferencia:</h4>
                        <ul style="list-style: none; padding: 0; color: var(--text-light); font-size: 1.05rem; line-height: 1.8;">
                            <li style="margin-bottom: 10px; display: flex; align-items: flex-start;"><i class="fas fa-check-circle" style="color: var(--secondary); margin-top: 5px; margin-right: 10px;"></i> Exámenes realizados por médicos especialistas en ultrasonido.</li>
                            <li style="margin-bottom: 10px; display: flex; align-items: flex-start;"><i class="fas fa-check-circle" style="color: var(--secondary); margin-top: 5px; margin-right: 10px;"></i> Equipos de tecnología de vanguardia.</li>
                            <li style="margin-bottom: 10px; display: flex; align-items: flex-start;"><i class="fas fa-check-circle" style="color: var(--secondary); margin-top: 5px; margin-right: 10px;"></i> Atención personalizada.</li>
                            <li style="margin-bottom: 10px; display: flex; align-items: flex-start;"><i class="fas fa-check-circle" style="color: var(--secondary); margin-top: 5px; margin-right: 10px;"></i> Consultorios equipados adecuadamente y de fácil acceso.</li>
                            <li style="margin-bottom: 10px; display: flex; align-items: flex-start;"><i class="fas fa-check-circle" style="color: var(--secondary); margin-top: 5px; margin-right: 10px;"></i> Citas disponibles para el mismo día y día siguiente.</li>
                        </ul>
                    </div>
                    <div class="about-image" style="flex: 1; min-width: 300px; text-align: center;">
                        <img src="assets/hero.png" alt="Ecografías Bogotá Equipo" style="max-width: 100%; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
                    </div>
                </div>

                <div class="text-center">
                    <a href="tarifas.html" class="btn btn-primary" style="font-size: 1.1rem; padding: 12px 30px; border-radius: 8px; text-transform: uppercase; font-weight: bold;">Ver Tarifas</a>
                </div>
            </div>
        </div>
    `
}
