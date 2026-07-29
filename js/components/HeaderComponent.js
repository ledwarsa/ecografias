export default {
    data() {
        return {
            isMenuOpen: false,
            isServicesOpen: false,
            isAboutOpen: false
        }
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        toggleServices(e) {
            if (e) e.preventDefault();
            this.isServicesOpen = !this.isServicesOpen;
        },
        toggleAbout(e) {
            if (e) e.preventDefault();
            this.isAboutOpen = !this.isAboutOpen;
        }
    },
    template: `
        <header class="header">
            <div class="container">
                <a href="#" class="logo">
                    <img src="assets/logo.jpg" alt="Ecografías Bogotá" style="height: 40px; margin-right: 10px;">
                </a>
                
                <button class="mobile-menu-btn" @click="toggleMenu" aria-label="Toggle menu">
                    <i :class="isMenuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
                </button>
                
                <nav :class="['nav-links', { 'open': isMenuOpen }]">
                    <a href="index.html" class="text-secondary" @click="isMenuOpen = false">Inicio</a>
                    <div class="dropdown" @mouseenter="isAboutOpen = true" @mouseleave="isAboutOpen = false" :class="{ 'open': isAboutOpen }">
                        <a href="#" @click="toggleAbout">Sobre nosotros <i class="fas fa-chevron-down" style="font-size: 0.8em;"></i></a>
                        <div class="dropdown-menu">
                            <a href="nosotros.html" @click="isMenuOpen = false; isAboutOpen = false">Quiénes somos</a>
                            <a href="preguntas-frecuentes.html" @click="isMenuOpen = false; isAboutOpen = false">Preguntas frecuentes</a>
                            <a href="testimonios.html" @click="isMenuOpen = false; isAboutOpen = false">Testimonios</a>
                        </div>
                    </div>
                    <div class="dropdown" @mouseenter="isServicesOpen = true" @mouseleave="isServicesOpen = false" :class="{ 'open': isServicesOpen }">
                        <a href="#" @click="toggleServices">Servicios <i class="fas fa-chevron-down" style="font-size: 0.8em;"></i></a>
                        <div class="dropdown-menu">
                            <a href="ecografias-generales.html" @click="isMenuOpen = false; isServicesOpen = false">Ecografías Generales</a>
                        </div>
                    </div>
                    <a href="#" @click="isMenuOpen = false">DEP</a>
                    <a href="#" @click="isMenuOpen = false">Sedes</a>
                    <a href="#" @click="isMenuOpen = false">Blog</a>
                    <a href="contactenos.html" @click="isMenuOpen = false">Contacto</a>
                    <!-- Mostrar acciones dentro del menú en móvil -->
                    <div class="header-actions-mobile" v-if="isMenuOpen" style="display: flex; flex-direction: column; width: 100%; gap: 10px; margin-top: 15px;">
                        <button class="btn btn-outline" style="width: 100%;">Ver tarifas</button>
                        <button class="btn btn-primary" style="width: 100%;"><i class="far fa-calendar-check" style="margin-right:8px;"></i> Agendar cita</button>
                    </div>
                </nav>
                
                <div class="header-actions">
                    <button class="btn btn-outline">Ver tarifas</button>
                    <button class="btn btn-primary"><i class="far fa-calendar-check" style="margin-right:8px;"></i> Agendar cita</button>
                </div>
            </div>
        </header>
    `
}
