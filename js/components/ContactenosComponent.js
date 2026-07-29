export default {
    template: `
        <div class="contactenos-section" style="padding-top: 60px; padding-bottom: 60px;">
            <div class="container">
                <div class="section-header text-center" style="margin-bottom: 50px;">
                    <span class="subtitle">Contáctanos</span>
                    <h2 style="font-size: 2.5rem; color: var(--primary);">Datos de Contacto</h2>
                </div>

                <div class="contact-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-bottom: 60px;">
                    <!-- Sede Norte -->
                    <div class="contact-card" style="background: var(--white); padding: 30px; border-radius: 12px; box-shadow: 0 5px 20px rgba(0,0,0,0.05); text-align: center; border-top: 4px solid var(--primary);">
                        <div class="icon-circle" style="width: 60px; height: 60px; background: var(--bg-light); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px auto;">
                            <i class="fas fa-map-marker-alt" style="font-size: 1.5rem; color: var(--primary);"></i>
                        </div>
                        <h4 style="color: var(--primary); margin-bottom: 15px;">Sede Norte</h4>
                        <p style="color: var(--text-light); line-height: 1.6; margin-bottom: 15px;">
                            ILARCO Av. Suba #115-58, Centro Ilarco.<br>Torre C, Consultorio 208.<br>
                            Frente a estación de Transmilenio "Av. Suba Calle 116" Bogotá.
                        </p>
                    </div>

                    <!-- Sede Sur -->
                    <div class="contact-card" style="background: var(--white); padding: 30px; border-radius: 12px; box-shadow: 0 5px 20px rgba(0,0,0,0.05); text-align: center; border-top: 4px solid var(--secondary);">
                        <div class="icon-circle" style="width: 60px; height: 60px; background: var(--bg-light); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px auto;">
                            <i class="fas fa-map-marker-alt" style="font-size: 1.5rem; color: var(--secondary);"></i>
                        </div>
                        <h4 style="color: var(--secondary); margin-bottom: 15px;">Sede Sur</h4>
                        <p style="color: var(--text-light); line-height: 1.6; margin-bottom: 15px;">
                            Sede Mandalay, Carrera 78#3A-40, barrio Mandalay.
                        </p>
                    </div>

                    <!-- Teléfono / Email -->
                    <div class="contact-card" style="background: var(--white); padding: 30px; border-radius: 12px; box-shadow: 0 5px 20px rgba(0,0,0,0.05); text-align: center; border-top: 4px solid var(--primary);">
                        <div class="icon-circle" style="width: 60px; height: 60px; background: var(--bg-light); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px auto;">
                            <i class="fas fa-phone-alt" style="font-size: 1.5rem; color: var(--primary);"></i>
                        </div>
                        <h4 style="color: var(--primary); margin-bottom: 15px;">Canales de Atención</h4>
                        <p style="color: var(--text-light); line-height: 1.6; margin-bottom: 10px;">
                            <i class="fab fa-whatsapp" style="margin-right: 8px;"></i> Celular: 300 509 35 68
                        </p>
                        <p style="color: var(--text-light); line-height: 1.6; margin-bottom: 0;">
                            <i class="far fa-envelope" style="margin-right: 8px;"></i> ecografiasbogota@gmail.com
                        </p>
                    </div>
                </div>

                <div class="contact-layout" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 450px), 1fr)); gap: 40px; align-items: start;">
                    
                    <!-- Formulario -->
                    <div class="contact-form-container" style="background: var(--white); padding: 40px; border-radius: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.08);">
                        <h3 style="color: var(--primary); margin-bottom: 30px; font-size: 1.8rem;">Envíanos un mensaje</h3>
                        <form @submit.prevent="submitForm">
                            <div class="form-group" style="margin-bottom: 20px;">
                                <label style="display: block; margin-bottom: 8px; font-weight: 600; color: var(--text-dark);">Tu Nombre</label>
                                <input type="text" v-model="form.name" required style="width: 100%; padding: 12px 15px; border: 1px solid #e0e0e0; border-radius: 6px; font-family: inherit; font-size: 1rem; outline: none; transition: border-color 0.3s;" placeholder="Escribe tu nombre" onfocus="this.style.borderColor='var(--primary)'" onblur="this.style.borderColor='#e0e0e0'">
                            </div>
                            <div class="form-group" style="margin-bottom: 20px;">
                                <label style="display: block; margin-bottom: 8px; font-weight: 600; color: var(--text-dark);">Tu Correo</label>
                                <input type="email" v-model="form.email" required style="width: 100%; padding: 12px 15px; border: 1px solid #e0e0e0; border-radius: 6px; font-family: inherit; font-size: 1rem; outline: none; transition: border-color 0.3s;" placeholder="Escribe tu correo" onfocus="this.style.borderColor='var(--primary)'" onblur="this.style.borderColor='#e0e0e0'">
                            </div>
                            <div class="form-group" style="margin-bottom: 20px;">
                                <label style="display: block; margin-bottom: 8px; font-weight: 600; color: var(--text-dark);">Asunto</label>
                                <input type="text" v-model="form.subject" required style="width: 100%; padding: 12px 15px; border: 1px solid #e0e0e0; border-radius: 6px; font-family: inherit; font-size: 1rem; outline: none; transition: border-color 0.3s;" placeholder="Asunto del mensaje" onfocus="this.style.borderColor='var(--primary)'" onblur="this.style.borderColor='#e0e0e0'">
                            </div>
                            <div class="form-group" style="margin-bottom: 25px;">
                                <label style="display: block; margin-bottom: 8px; font-weight: 600; color: var(--text-dark);">Tu Mensaje</label>
                                <textarea v-model="form.message" rows="5" required style="width: 100%; padding: 12px 15px; border: 1px solid #e0e0e0; border-radius: 6px; font-family: inherit; font-size: 1rem; resize: vertical; outline: none; transition: border-color 0.3s;" placeholder="Escribe tu mensaje aquí" onfocus="this.style.borderColor='var(--primary)'" onblur="this.style.borderColor='#e0e0e0'"></textarea>
                            </div>
                            <div class="form-group" style="margin-bottom: 25px; display: flex; align-items: flex-start; gap: 10px;">
                                <input type="checkbox" id="terms" v-model="form.terms" required style="margin-top: 4px; cursor: pointer;">
                                <label for="terms" style="color: var(--text-light); font-size: 0.95rem; cursor: pointer; line-height: 1.4;">
                                    Acepto términos y condiciones y políticas de privacidad
                                </label>
                            </div>
                            <button type="submit" class="btn btn-primary" style="width: 100%; font-size: 1.1rem; padding: 15px; border-radius: 6px; border: none; cursor: pointer;">Enviar Mensaje</button>
                        </form>
                    </div>

                    <!-- Mapas -->
                    <div class="maps-container" style="display: flex; flex-direction: column; gap: 30px;">
                        <div class="map-box" style="border-radius: 12px; overflow: hidden; box-shadow: 0 5px 20px rgba(0,0,0,0.05);">
                            <h4 style="background: var(--primary); color: white; margin: 0; padding: 10px 15px; font-size: 1.1rem; text-align: center;">Sede Norte</h4>
                            <iframe loading="lazy" src="https://maps.google.com/maps?q=av.%20suba%20%23115-58&t=m&z=14&output=embed&iwloc=near" title="Sede Norte" aria-label="Sede Norte" width="100%" height="250" style="border:0; display: block;" allowfullscreen=""></iframe>
                        </div>
                        <div class="map-box" style="border-radius: 12px; overflow: hidden; box-shadow: 0 5px 20px rgba(0,0,0,0.05);">
                            <h4 style="background: var(--secondary); color: white; margin: 0; padding: 10px 15px; font-size: 1.1rem; text-align: center;">Sede Sur</h4>
                            <iframe loading="lazy" src="https://maps.google.com/maps?q=%20Av.%20de%20las%20Am%C3%A9ricas%20%2378-11&t=m&z=14&output=embed&iwloc=near" title="Sede Sur" aria-label="Sede Sur" width="100%" height="250" style="border:0; display: block;" allowfullscreen=""></iframe>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `,
    data() {
        return {
            form: {
                name: '',
                email: '',
                subject: '',
                message: '',
                terms: false
            }
        }
    },
    methods: {
        submitForm() {
            alert('Gracias por tu mensaje, nos pondremos en contacto pronto.');
            this.form.name = '';
            this.form.email = '';
            this.form.subject = '';
            this.form.message = '';
            this.form.terms = false;
        }
    }
}
