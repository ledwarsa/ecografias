export default {
    template: `
        <section class="articles-section container">
            <div class="subtitle text-secondary font-bold" style="letter-spacing:1px; margin-bottom:10px; font-size:0.85rem;">ARTÍCULOS RECIENTES</div>
            
            <div class="articles-grid">
                <div class="article-card">
                    <div class="article-image">
                        <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&q=80" alt="Artículo 1">
                    </div>
                    <div class="article-content">
                        <div class="article-meta">
                            <span class="article-tag">Salud</span>
                            <span class="article-date">15 May 2024</span>
                        </div>
                        <h3>¿Cada cuánto debo hacerme una ecografía?</h3>
                        <a href="#" class="article-link">Leer más <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
                
                <div class="article-card">
                    <div class="article-image">
                        <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=400&q=80" alt="Artículo 2">
                    </div>
                    <div class="article-content">
                        <div class="article-meta">
                            <span class="article-tag">DEP</span>
                            <span class="article-date">10 May 2024</span>
                        </div>
                        <h3>Beneficios del Diagnóstico Ecográfico Preventivo (DEP)</h3>
                        <a href="#" class="article-link">Leer más <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
                
                <div class="article-card">
                    <div class="article-image">
                        <img src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=400&q=80" alt="Artículo 3">
                    </div>
                    <div class="article-content">
                        <div class="article-meta">
                            <span class="article-tag">Embarazo</span>
                            <span class="article-date">05 May 2024</span>
                        </div>
                        <h3>Ecografías obstétricas: cada etapa es única</h3>
                        <a href="#" class="article-link">Leer más <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </section>
    `
}
