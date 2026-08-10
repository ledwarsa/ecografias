<?php
$blogs_file = '../content/blogs.json';
$blogs = [];

if (file_exists($blogs_file)) {
    $blogs = json_decode(file_get_contents($blogs_file), true) ?? [];
}

$message = '';
$message_type = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action']) && $_POST['action'] === 'delete_blog') {
    $slug_to_delete = $_POST['slug'];
    
    // Remove from array
    $blogs = array_filter($blogs, function($blog) use ($slug_to_delete) {
        return $blog['slug'] !== $slug_to_delete;
    });
    $blogs = array_values($blogs); // Reindex
    file_put_contents($blogs_file, json_encode($blogs, JSON_PRETTY_PRINT));
    
    // Attempt to delete directory
    $blog_dir = '../content/blog/' . $slug_to_delete;
    if (is_dir($blog_dir)) {
        // Simple recursive delete
        $files = array_diff(scandir($blog_dir), array('.','..'));
        foreach ($files as $file) {
            unlink("$blog_dir/$file");
        }
        rmdir($blog_dir);
    }
    
    $message = "Artículo eliminado correctamente.";
    $message_type = "success";
}
?>

<div class="card">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <h3>Gestión de Blogs</h3>
        <a href="index.php?page=blog_edit" class="btn btn-primary"><i class="fas fa-plus"></i> Nuevo Artículo</a>
    </div>

    <?php if ($message): ?>
        <div class="alert alert-<?php echo $message_type === 'error' ? 'error' : 'success'; ?>" style="<?php echo $message_type === 'success' ? 'background: #d1fae5; color: #065f46; border: 1px solid #34d399;' : ''; ?>">
            <?php echo htmlspecialchars($message); ?>
        </div>
    <?php endif; ?>

    <div class="table-responsive">
        <table>
            <thead>
                <tr>
                    <th>Imagen</th>
                    <th>Título</th>
                    <th>Fecha</th>
                    <th>Categorías</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <?php if(empty($blogs)): ?>
                    <tr><td colspan="5" class="text-center">No hay artículos publicados.</td></tr>
                <?php else: ?>
                    <?php foreach ($blogs as $blog): ?>
                        <tr>
                            <td>
                                <?php if(isset($blog['coverImage']) && $blog['coverImage']): ?>
                                    <img src="../<?php echo htmlspecialchars($blog['coverImage']); ?>" alt="Cover" style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px;">
                                <?php else: ?>
                                    <div style="width: 60px; height: 60px; background: #eee; border-radius: 8px; display:flex; align-items:center; justify-content:center; color:#999;"><i class="fas fa-image"></i></div>
                                <?php endif; ?>
                            </td>
                            <td><?php echo htmlspecialchars($blog['title'] ?? ''); ?></td>
                            <td><?php echo htmlspecialchars($blog['date'] ?? ''); ?></td>
                            <td><?php echo htmlspecialchars(implode(', ', $blog['categories'] ?? [])); ?></td>
                            <td>
                                <a href="index.php?page=blog_edit&slug=<?php echo urlencode($blog['slug']); ?>" class="btn btn-sm" style="background: #e0f2fe; color: #0284c7; padding: 5px 10px; border: none; border-radius: 4px; margin-right: 5px;">
                                    <i class="fas fa-edit"></i>
                                </a>
                                <form method="POST" action="index.php?page=blogs" style="display:inline;" onsubmit="return confirm('¿Seguro que deseas eliminar este artículo? Esta acción no se puede deshacer.');">
                                    <input type="hidden" name="action" value="delete_blog">
                                    <input type="hidden" name="slug" value="<?php echo htmlspecialchars($blog['slug']); ?>">
                                    <button type="submit" class="btn btn-sm" style="background: #fee2e2; color: #b91c1c; padding: 5px 10px; border: none; border-radius: 4px; cursor: pointer;">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </form>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                <?php endif; ?>
            </tbody>
        </table>
    </div>
</div>
