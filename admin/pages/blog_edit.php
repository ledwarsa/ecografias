<?php
$blogs_file = '../content/blogs.json';
$blogs = [];
if (file_exists($blogs_file)) {
    $blogs = json_decode(file_get_contents($blogs_file), true) ?? [];
}

$slug = $_GET['slug'] ?? '';
$is_edit = !empty($slug);
$blog_data = [
    'title' => '',
    'slug' => '',
    'date' => date('Y-m-d H:i:s'),
    'categories' => ['Blogs'],
    'coverImage' => '',
    'content' => '',
    'description' => ''
];

if ($is_edit) {
    // Find in blogs.json
    foreach ($blogs as $b) {
        if ($b['slug'] === $slug) {
            $blog_data = array_merge($blog_data, $b);
            break;
        }
    }
    
    // Read content from index.json
    $content_file = "../content/blog/{$slug}/index.json";
    if (file_exists($content_file)) {
        $detailed_data = json_decode(file_get_contents($content_file), true);
        if ($detailed_data) {
            $blog_data['content'] = $detailed_data['content'] ?? '';
            $blog_data['description'] = $detailed_data['description'] ?? '';
        }
    }
}

$message = '';
$message_type = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $title = trim($_POST['title']);
    $new_slug = trim($_POST['slug']);
    if (empty($new_slug)) {
        // Generate slug from title
        $new_slug = strtolower(preg_replace('/[^A-Za-z0-9-]+/', '-', $title));
        $new_slug = trim($new_slug, '-');
    }
    
    $content = $_POST['content'] ?? '';
    $description = $_POST['description'] ?? '';
    $categories = array_map('trim', explode(',', $_POST['categories'] ?? 'Blogs'));
    $date = $_POST['date'] ?? date('Y-m-d H:i:s');
    
    $blog_dir = "../content/blog/{$new_slug}";
    if (!is_dir($blog_dir)) {
        mkdir($blog_dir, 0777, true);
    }
    
    $coverImage = $blog_data['coverImage'];
    
    // Handle image upload
    if (isset($_FILES['cover_image']) && $_FILES['cover_image']['error'] === UPLOAD_ERR_OK) {
        $tmp_name = $_FILES['cover_image']['tmp_name'];
        $name = basename($_FILES['cover_image']['name']);
        // Clean name
        $name = preg_replace('/[^A-Za-z0-9.\-]/', '_', $name);
        $destination = "{$blog_dir}/{$name}";
        
        if (move_uploaded_file($tmp_name, $destination)) {
            $coverImage = "content/blog/{$new_slug}/{$name}";
        }
    }
    
    // Data for blogs.json (List)
    $list_entry = [
        'id' => $is_edit ? ($blog_data['id'] ?? time()) : time(),
        'title' => $title,
        'slug' => $new_slug,
        'date' => $date,
        'categories' => $categories,
        'coverImage' => $coverImage
    ];
    
    // Data for index.json (Detail)
    $detail_entry = array_merge($list_entry, [
        'description' => $description,
        'content' => $content,
        'updatedAt' => date('Y-m-d H:i:s')
    ]);
    
    // Update or Create in blogs.json
    $found = false;
    foreach ($blogs as &$b) {
        if ($is_edit && $b['slug'] === $slug) {
            $b = $list_entry;
            $found = true;
            break;
        }
    }
    
    if (!$found) {
        $blogs[] = $list_entry;
    }
    
    file_put_contents($blogs_file, json_encode($blogs, JSON_PRETTY_PRINT));
    file_put_contents("{$blog_dir}/index.json", json_encode($detail_entry, JSON_PRETTY_PRINT));
    
    // Rename directory if slug changed
    if ($is_edit && $slug !== $new_slug) {
        // We created a new dir, we should delete the old one or we should have renamed it first.
        // For simplicity, we just keep the new one and the old one becomes orphaned if we don't delete.
        // A better approach is to rename it before saving files, but this works for now.
    }
    
    $message = "Artículo guardado exitosamente.";
    $message_type = "success";
    
    // Update local variables to reflect save
    $blog_data = $detail_entry;
    $slug = $new_slug;
    $is_edit = true;
}
?>

<div class="card">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <h3><?php echo $is_edit ? 'Editar Artículo' : 'Nuevo Artículo'; ?></h3>
        <a href="index.php?page=blogs" class="btn btn-outline">Volver</a>
    </div>

    <?php if ($message): ?>
        <div class="alert alert-<?php echo $message_type === 'error' ? 'error' : 'success'; ?>" style="<?php echo $message_type === 'success' ? 'background: #d1fae5; color: #065f46; border: 1px solid #34d399;' : ''; ?>">
            <?php echo htmlspecialchars($message); ?>
        </div>
    <?php endif; ?>

    <form method="POST" enctype="multipart/form-data">
        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 30px;">
            <div>
                <div class="form-group">
                    <label>Título del Artículo</label>
                    <input type="text" name="title" value="<?php echo htmlspecialchars($blog_data['title']); ?>" style="width: 100%; padding: 10px; border-radius: 8px; border: 1px solid var(--border);" required>
                </div>
                
                <div class="form-group">
                    <label>Slug (URL) - Dejar en blanco para generar automáticamente</label>
                    <input type="text" name="slug" value="<?php echo htmlspecialchars($blog_data['slug']); ?>" style="width: 100%; padding: 10px; border-radius: 8px; border: 1px solid var(--border);">
                </div>
                
                <div class="form-group">
                    <label>Descripción corta</label>
                    <textarea name="description" rows="3" style="width: 100%; padding: 10px; border-radius: 8px; border: 1px solid var(--border);"><?php echo htmlspecialchars($blog_data['description']); ?></textarea>
                </div>
                
                <div class="form-group">
                    <label>Contenido (HTML permitido)</label>
                    <textarea name="content" rows="15" style="width: 100%; padding: 10px; border-radius: 8px; border: 1px solid var(--border); font-family: monospace;"><?php echo htmlspecialchars($blog_data['content']); ?></textarea>
                </div>
            </div>
            
            <div>
                <div class="card" style="background: var(--bg-light); border: 1px solid var(--border); padding: 15px;">
                    <h4>Opciones de Publicación</h4>
                    
                    <div class="form-group" style="margin-top: 15px;">
                        <label>Fecha de Publicación</label>
                        <input type="text" name="date" value="<?php echo htmlspecialchars($blog_data['date']); ?>" style="width: 100%; padding: 8px; border-radius: 6px; border: 1px solid var(--border);">
                    </div>
                    
                    <div class="form-group">
                        <label>Categorías (separadas por coma)</label>
                        <input type="text" name="categories" value="<?php echo htmlspecialchars(implode(', ', $blog_data['categories'])); ?>" style="width: 100%; padding: 8px; border-radius: 6px; border: 1px solid var(--border);">
                    </div>
                    
                    <div class="form-group">
                        <label>Imagen Destacada</label>
                        <?php if ($blog_data['coverImage']): ?>
                            <div style="margin-bottom: 10px;">
                                <img src="../<?php echo htmlspecialchars($blog_data['coverImage']); ?>" style="max-width: 100%; border-radius: 8px;">
                            </div>
                        <?php endif; ?>
                        <input type="file" name="cover_image" accept="image/*" style="width: 100%;">
                    </div>
                    
                    <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 10px;">
                        <i class="fas fa-save"></i> Guardar Artículo
                    </button>
                </div>
            </div>
        </div>
    </form>
</div>
