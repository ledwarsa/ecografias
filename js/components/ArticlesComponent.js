import { ref, onMounted } from 'vue';

export default {
    setup() {
        const articles = ref([]);

        onMounted(async () => {
            try {
                const response = await fetch('content/blogs.json');
                if (response.ok) {
                    const data = await response.json();
                    articles.value = data.slice(0, 3);
                }
            } catch (error) {
                console.error("Error loading blogs:", error);
            }
        });

        const formatDate = (dateString) => {
            const options = { day: '2-digit', month: 'short', year: 'numeric' };
            return new Date(dateString).toLocaleDateString('es-ES', options);
        };

        return { articles, formatDate };
    },
    template: `
        <section class="articles-section container">
            <div class="subtitle text-secondary font-bold" style="letter-spacing:1px; margin-bottom:10px; font-size:0.85rem;">ARTÍCULOS RECIENTES</div>
            
            <div class="articles-grid" v-if="articles.length > 0">
                <div class="article-card" v-for="article in articles" :key="article.id">
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
            <div v-else>
                <p>Cargando artículos...</p>
            </div>
        </section>
    `
}
