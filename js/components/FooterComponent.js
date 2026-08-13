import { useLinks } from '../composables/useLinks.js';

export default {
    setup() {
        const { links } = useLinks();
        return { links };
    },
    template: `
        <footer class="footer">
            <div class="container">
                <div class="footer-grid">
                    <div class="footer-brand">
                        <div class="footer-logo">
                            <img src="assets/logo-white.png" alt="Ecografías Bogotá" style="max-width: 200px; height: auto;">
                        </div>
                        <p>Más de 15 años cuidando tu salud con tecnología, experiencia y calidad humana.</p>
                        <div class="social-links">
                            <a :href="links.facebook" target="_blank"><i class="fab fa-facebook-f"></i></a>
                            <a :href="links.instagram" target="_blank"><i class="fab fa-instagram"></i></a>
                            <a :href="links.youtube" target="_blank"><i class="fab fa-youtube"></i></a>
                        </div>
                    </div>
                    
                    <div class="footer-links">
                        <h4>Servicios</h4>
                        <ul>
                            <li><a href="ecografias-generales.html">Ecografías Generales</a></li>
                            <li><a href="obstetricas.html">Ecografías Obstétricas Avanzadas</a></li>
                            <li><a href="doppler.html">Doppler o Dúplex Scan Color</a></li>
                            <li><a href="dep.html">Diagnóstico Preventivo (DEP)</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-links">
                        <h4>Sedes</h4>
                        <ul>
                            <li><a :href="links.google_maps_norte" target="_blank">Sede Norte</a></li>
                            <li><a :href="links.google_maps_sur" target="_blank">Sede Sur</a></li>
                            <li><a :href="links.whatsapp" target="_blank">Cómo llegar</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-links">
                        <h4>Información</h4>
                        <ul>
                            <li><a href="blogs.html">Blog</a></li>
                            <li><a href="preguntas-frecuentes.html">Preguntas frecuentes</a></li>
                            <li><a href="politicas.html">Políticas de privacidad</a></li>
                            <li><a href="politicas.html">Términos y condiciones</a></li>
                            <li><a href="clausula.html">Cláusula de consentimiento</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-contact">
                        <h4>Contacto</h4>
                        <ul style="gap: 20px;">
                            <li style="display:flex; align-items:flex-start; gap:10px;">
                                <i class="fas fa-phone-alt" style="color:var(--secondary); margin-top:3px;"></i>
                                <span style="color: rgba(255,255,255,0.7); font-size:0.9rem;">(601) 745 0740</span>
                            </li>
                            <li style="display:flex; align-items:flex-start; gap:10px;">
                                <i class="fab fa-whatsapp" style="color:var(--secondary); margin-top:3px;"></i>
                                <span style="color: rgba(255,255,255,0.7); font-size:0.9rem;">+57 320 403 7965</span>
                            </li>
                            <li style="display:flex; align-items:flex-start; gap:10px;">
                                <i class="far fa-envelope" style="color:var(--secondary); margin-top:3px;"></i>
                                <span style="color: rgba(255,255,255,0.7); font-size:0.9rem;">info@ecografiasbogota.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <p>&copy; 2024 Ecografías Bogotá. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    `
}
