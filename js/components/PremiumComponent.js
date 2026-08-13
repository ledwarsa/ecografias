export default {
    template: `
        <section class="premium-section container">
            <div class="premium-card">
                <div class="premium-content">
                    <span class="badge">NUESTRO EXAMEN PREMIUM</span>
                    <h2>Diagnóstico Ecográfico Preventivo (DEP)</h2>
                    <p>Un solo examen para evaluar múltiples órganos y detectar alteraciones tempranas. Prevención, tranquilidad y cuidado para tu salud.</p>
                    <div class="premium-buttons" style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1.5rem;">
                        <a href="dep.html" class="btn btn-white-outline" style="display: inline-block; text-decoration: none;">Conocer el examen</a>
                        <a href="https://wa.link/42dexe" target="_blank" class="btn" style="background-color: #25d366; color: white; border: 2px solid #25d366; border-radius: 5px; padding: 0.8rem 2rem; font-weight: 600; display: inline-flex; align-items: center; gap: 0.5rem; text-decoration: none; transition: all 0.3s ease;">
                            <i class="fab fa-whatsapp" style="font-size: 1.2rem;"></i> Agendar cita
                        </a>
                    </div>
                </div>
                <div class="premium-image">
                    <img src="assets/premium_banner.png" alt="Examen DEP">
                </div>
                <ul class="premium-list">
                    <li><i class="fas fa-check-circle"></i> Examen completo</li>
                    <li><i class="fas fa-check-circle"></i> Detección temprana</li>
                    <li><i class="fas fa-check-circle"></i> Resultados rápidos</li>
                    <li><i class="fas fa-check-circle"></i> Prevención y bienestar</li>
                </ul>
            </div>
        </section>
    `
}
