import { ref, onMounted } from 'vue';

export default {
    setup() {
        const blog = ref(null);
        const loading = ref(true);
        const error = ref(null);

        onMounted(async () => {
            const params = new URLSearchParams(window.location.search);
            const slug = params.get('slug');

            if (!slug) {
                error.value = "No se especificó un artículo.";
                loading.value = false;
                return;
            }

            try {
                const response = await fetch(`content/blog/${slug}/index.json`);
                if (response.ok) {
                    blog.value = await response.json();
                    document.title = `${blog.value.title} | Ecografías Bogotá`;
                } else {
                    error.value = "No se pudo cargar el artículo. Puede que no exista.";
                }
            } catch (err) {
                console.error("Error fetching blog:", err);
                error.value = "Error de conexión al cargar el artículo.";
            } finally {
                loading.value = false;
            }
        });

        const formatDate = (dateString) => {
            const options = { day: '2-digit', month: 'long', year: 'numeric' };
            return new Date(dateString).toLocaleDateString('es-ES', options);
        };

        return { blog, loading, error, formatDate };
    },
    template: `
        <main class="blog-content-section container">
            <div v-if="loading" class="text-center" style="padding: 100px 0;">
                <p><i class="fas fa-spinner fa-spin fa-2x text-primary"></i></p>
                <p class="mt-3">Cargando artículo...</p>
            </div>
            
            <div v-else-if="error" class="alert alert-danger" style="margin: 100px 0; text-align: center;">
                <i class="fas fa-exclamation-triangle fa-2x mb-3"></i>
                <p>{{ error }}</p>
                <a href="/" class="btn btn-primary mt-3">Volver al inicio</a>
            </div>
            
            <article v-else-if="blog">
                <header class="mb-5 text-center">
                    <div class="blog-meta mb-3">
                        <span class="badge bg-primary text-white p-2 px-3 rounded-pill me-2" v-if="blog.categories && blog.categories.length">
                            {{ blog.categories[0] }}
                        </span>
                        <span><i class="far fa-calendar-alt me-2"></i>{{ formatDate(blog.date) }}</span>
                        <span v-if="blog.author" class="ms-3"><i class="far fa-user me-2"></i>{{ blog.author }}</span>
                    </div>
                    
                    <h1 class="blog-title">{{ blog.title }}</h1>
                </header>
                
                <img v-if="blog.coverImage" :src="blog.coverImage" :alt="blog.title" class="blog-cover shadow-sm">
                
                <div class="blog-body" v-html="blog.content"></div>
                
                <div class="mt-5 pt-4 border-top">
                    <div v-if="blog.tags && blog.tags.length">
                        <strong>Etiquetas:</strong> 
                        <span v-for="tag in blog.tags" :key="tag" class="badge bg-secondary me-2 p-2">{{ tag }}</span>
                    </div>
                    <div class="mt-4">
                        <a href="/" class="btn btn-outline-primary"><i class="fas fa-arrow-left me-2"></i> Volver al inicio</a>
                    </div>
                </div>
            </article>
        </main>
    `
}
