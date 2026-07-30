import { ref, onMounted } from 'vue';

export default {
    setup() {
        const articles = ref([]);
        const loading = ref(true);

        onMounted(async () => {
            try {
                const response = await fetch('content/blogs.json');
                if (response.ok) {
                    articles.value = await response.json();
                }
            } catch (error) {
                console.error("Error loading blogs:", error);
            } finally {
                loading.value = false;
            }
        });

        const formatDate = (dateString) => {
            const options = { day: '2-digit', month: 'short', year: 'numeric' };
            return new Date(dateString).toLocaleDateString('es-ES', options);
        };

        return { articles, loading, formatDate };
    },
    template: `
        <main style="padding: 100px 0 60px 0;">
            <section class="articles-section container">
                <div class="text-center mb-5">
                    <h1 style="color: #2c3e50; font-size: 2.5rem; margin-bottom: 15px;">Nuestro Blog</h1>
                    <p style="color: #666; font-size: 1.1rem;">Encuentra aquí todos nuestros artículos sobre salud, prevención y cuidado.</p>
                </div>
                
                <div v-if="loading" class="text-center" style="padding: 50px 0;">
                    <p><i class="fas fa-spinner fa-spin fa-2x text-primary"></i></p>
                    <p class="mt-3">Cargando artículos...</p>
                </div>
                
                <div class="articles-grid" v-else-if="articles.length > 0">
                    <div class="article-card" v-for="article in articles" :key="article.id" style="margin-bottom: 30px;">
                        <div class="article-image">
                            <img :src="article.coverImage || 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&q=80'" :alt="article.title">
                        </div>
                        <div class="article-content">
                            <div class="article-meta">
                                <span class="article-tag" v-if="article.categories && article.categories.length">{{ article.categories[0] }}</span>
                                <span class="article-tag" v-else>Blog</span>
                                <span class="article-date">{{ formatDate(article.date) }}</span>
                            </div>
                            <h3>{{ article.title }}</h3>
                            <a :href="'blog.html?slug=' + article.slug" class="article-link">Leer más <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                
                <div v-else class="text-center" style="padding: 50px 0;">
                    <p>No se encontraron artículos.</p>
                </div>
            </section>
        </main>
    `
}
