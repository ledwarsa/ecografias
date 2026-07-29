export default {
    data() {
        return {
            faqs: [
                {
                    question: '¿Cuánto tarda la entrega de los resultados?',
                    answer: '<p>Sabemos que necesitas conocer pronto los resultados de tu examen, por lo tanto, el profesional te los entrega inmediatamente, con lectura y explicación.</p>',
                    open: false
                },
                {
                    question: '¿Puedo ingresar a la ecografía con acompañante?',
                    answer: '<p>Debido a la pandemia del Covid-19, el gobierno dispuso que a los exámenes no debe asistir acompañante. No obstante, si es una ecografía obstétrica (de embarazo) permitiremos la entrada un momento al papá del bebé. También si es un adulto mayor que requiere ayuda permanente, o si el paciente es menor de edad.</p>',
                    open: false
                },
                {
                    question: '¿Hay diferencia entre ecografía, sonograma, ultrasonografía y ultrasonido?',
                    answer: '<p>No hay ninguna diferencia entre estos exámenes.</p>',
                    open: false
                },
                {
                    question: '¿Cuándo tomar la ecografía obstétrica transvaginal y cuándo la obstétrica transabdominal?',
                    answer: '<p>Si es para saber si estás en embarazo o si tienes menos de 3 meses, la más indicada es la transvaginal.</p>',
                    open: false
                },
                {
                    question: '¿Cuál es la diferencia entre la ecografía pélvica transvaginal y la ecografía pélvica transabdominal?',
                    answer: '<p>La transvaginal se realiza introduciendo una sonda especial por vía vaginal, usando un preservativo, y permite un mejor diagnóstico sobre las estructuras ginecológicas internas (útero, ovarios, trompas). La transabdominal se realiza por encima, en el área pélvica.</p>',
                    open: false
                },
                {
                    question: '¿La ecografía obstétrica transvaginal puede causar daño a mi bebé?',
                    answer: '<p>Este no es un examen invasivo ni se realiza utilizando frecuencias de ultrasonido que afecten al ser humano. Por tanto, siguiendo todos los protocolos de bioseguridad, no afecta al bebé ni a la madre.</p><p>La ecografía obstétrica transvaginal es importante al inicio del embarazo pues permite comprobar el estado del cuello del útero, el lugar de la implantación de la cámara ovular, su morfología y su tamaño. Adicionalmente, permite observar la presencia del embrión y la frecuencia del ritmo cardiaco.</p>',
                    open: false
                },
                {
                    question: '¿Qué enfermedades se pueden detectar con los diagnósticos de ecografía?',
                    answer: '<p>Según la región que se examine, se pueden detectar diversas alteraciones como crecimiento de los órganos, inflamación de los tejidos, cálculos, masas, tumores, etc.</p>',
                    open: false
                },
                {
                    question: '¿La ecografía es un procedimiento con radiaciones?',
                    answer: '<p>No, la ecografía es un procedimiento sin radiaciones. Funciona con ondas de ultrasonido aplicadas a unas frecuencias que no son dañinas para el cuerpo humano.</p>',
                    open: false
                },
                {
                    question: '¿Es necesario agendar cita?',
                    answer: '<p>Sí. Para manejar efectivamente las medidas de bioseguridad, atender a tiempo a nuestros pacientes, prestar un excelente servicio y programar de manera adecuada a nuestros profesionales, es fundamental que agendes tu cita.</p>',
                    open: false
                },
                {
                    question: '¿Con cuánto tiempo de anticipación hay que agendar la cita?',
                    answer: '<p>Generalmente tenemos citas disponibles de un día para otro, e incluso el mismo día. Lo importante es que te comuniques y consultes con nosotros la disponibilidad.</p>',
                    open: false
                },
                {
                    question: '¿Cuáles son los medios de pago?',
                    answer: '<p>El pago se realiza directamente en el consultorio. Puede ser en efectivo, nequi o daviplata. No recibimos tarjetas.</p>',
                    open: false
                },
                {
                    question: '¿Cuáles son las medidas de bioseguridad que manejan?',
                    answer: '<p>Desinfectamos los equipos y las áreas donde se lleva a cabo el examen apenas se finaliza el procedimiento con cada paciente. Asimismo, nuestros profesionales hacen uso permanente de sus uniformes antifluido, tapabocas N95 y careta. Contamos con dispensadores de alcohol y zona de lavado de manos. Procuramos mantener las áreas ventiladas. Mientras el profesional realiza el reporte y prepara los resultados se maneja el distanciamiento pertinente.</p>',
                    open: false
                }
            ]
        }
    },
    methods: {
        toggleAccordion(index) {
            this.faqs = this.faqs.map((faq, i) => {
                if (i === index) {
                    faq.open = !faq.open;
                } else {
                    faq.open = false; // Close others
                }
                return faq;
            });
        }
    },
    template: `
        <div class="faq-section" style="padding-top: 60px; padding-bottom: 60px;">
            <div class="container">
                <div class="section-header text-center" style="margin-bottom: 50px;">
                    <span class="subtitle">Resolviendo dudas</span>
                    <h2 style="font-size: 2.5rem; color: var(--primary);">Preguntas Frecuentes</h2>
                </div>
                
                <div class="accordion-container" style="max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 20px; align-items: start;">
                    <div v-for="(faq, index) in faqs" :key="index" class="accordion-item" :class="{ 'active': faq.open }" style="border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); overflow: hidden; background: #fff;">
                        <div class="accordion-header" @click="toggleAccordion(index)" style="padding: 20px 25px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; background-color: #fff; transition: background-color 0.3s ease;">
                            <h3 style="margin: 0; font-size: 1.1rem; color: var(--text-dark); font-weight: 600;">{{ faq.question }}</h3>
                            <i :class="faq.open ? 'fas fa-minus' : 'fas fa-plus'" style="color: var(--secondary); transition: transform 0.3s ease;" :style="{ transform: faq.open ? 'rotate(180deg)' : 'rotate(0)' }"></i>
                        </div>
                        <div class="accordion-content" style="max-height: 0; overflow: hidden; transition: max-height 0.4s ease-out; padding: 0 25px; background: #fafafa;" :style="{ maxHeight: faq.open ? '500px' : '0', paddingBottom: faq.open ? '20px' : '0' }">
                            <div style="padding-top: 15px; color: var(--text-light); line-height: 1.7; font-size: 1rem;" v-html="faq.answer">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="text-center" style="margin-top: 50px;">
                    <a href="contactenos.html" class="btn btn-outline" style="margin-right: 15px; padding: 12px 25px;">¿Más dudas? Contáctanos</a>
                    <a href="https://ecografiasbogota.site.agendapro.com/co" target="_blank" class="btn btn-primary" style="padding: 12px 25px;"><i class="far fa-calendar-check" style="margin-right: 8px;"></i> Programar cita</a>
                </div>
            </div>
        </div>
    `
}
