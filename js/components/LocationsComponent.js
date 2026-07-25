export default {
    template: `
        <section class="locations-reviews container">
            <div class="locations-col">
                <div class="subtitle text-secondary font-bold" style="letter-spacing:1px; margin-bottom:10px; font-size:0.85rem;">NUESTRAS SEDES</div>
                
                <div class="locations-grid">
                    <div class="location-card">
                        <div class="location-info">
                            <h4>Sede Norte</h4>
                            <p>Calle 125 # 19-24<br>Edificio Zimma<br>Consultorio 304<br>Bogotá, Colombia</p>
                            <div class="phone"><i class="fas fa-phone-alt"></i> (601) 745 0740</div>
                            <button class="btn btn-outline btn-sm">Cómo llegar <i class="fas fa-external-link-alt" style="margin-left:5px;"></i></button>
                        </div>
                        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=200&q=80" class="location-image" alt="Sede Norte">
                    </div>
                    
                    <div class="location-card">
                        <div class="location-info">
                            <h4>Sede Sur</h4>
                            <p>Cra. 15 # 82-45<br>Centro Médico Almirante Colón<br>Torre 2, Consultorio 504<br>Bogotá, Colombia</p>
                            <div class="phone"><i class="fas fa-phone-alt"></i> (601) 745 0740</div>
                            <button class="btn btn-outline btn-sm">Cómo llegar <i class="fas fa-external-link-alt" style="margin-left:5px;"></i></button>
                        </div>
                        <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=200&q=80" class="location-image" alt="Sede Sur">
                    </div>
                </div>
            </div>
            
            <div class="reviews-col">
                <div class="subtitle text-secondary font-bold" style="letter-spacing:1px; margin-bottom:10px; font-size:0.85rem;">LO QUE DICEN NUESTROS PACIENTES</div>
                
                <div class="review-card">
                    <div class="stars" style="color:var(--secondary); font-size: 1.2rem;">
                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                    </div>
                    <p>"Excelente atención y muy profesionales. Los resultados llegaron el mismo día."</p>
                    <div class="review-author">María Fernanda P.</div>
                    
                    <div class="review-nav">
                        <i class="fas fa-chevron-left" style="cursor:pointer; color:var(--text-light);"></i>
                        <div class="review-dots">
                            <div class="dot active"></div>
                            <div class="dot"></div>
                            <div class="dot"></div>
                        </div>
                        <i class="fas fa-chevron-right" style="cursor:pointer; color:var(--text-light);"></i>
                    </div>
                </div>
            </div>
        </section>
    `
}
