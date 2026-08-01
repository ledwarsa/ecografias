<?php
$root_dir = '../';
$html_files = glob($root_dir . '*.html');

$message = '';
$message_type = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action']) && $_POST['action'] === 'save_seo') {
    foreach ($_POST['seo'] as $filename => $data) {
        $file_path = $root_dir . $filename;
        if (file_exists($file_path)) {
            $content = file_get_contents($file_path);
            
            $new_title = trim($data['title']);
            $new_desc = trim($data['description']);
            
            // Update Title
            if ($new_title !== '') {
                if (preg_match('/<title>.*?<\/title>/i', $content)) {
                    $content = preg_replace('/<title>.*?<\/title>/i', "<title>" . htmlspecialchars($new_title) . "</title>", $content);
                } else {
                    $content = preg_replace('/<head>/i', "<head>\n    <title>" . htmlspecialchars($new_title) . "</title>", $content, 1);
                }
            }
            
            // Update Description
            if ($new_desc !== '') {
                $desc_tag = '<meta name="description" content="' . htmlspecialchars($new_desc) . '">';
                if (preg_match('/<meta[^>]+name=["\']description["\'][^>]*>/i', $content)) {
                    $content = preg_replace('/<meta[^>]+name=["\']description["\'][^>]*>/i', $desc_tag, $content);
                } else {
                    $content = preg_replace('/<\/title>/i', "</title>\n    " . $desc_tag, $content, 1);
                }
            }
            
            file_put_contents($file_path, $content);
        }
    }
    
    $message = "Configuración SEO guardada correctamente en todas las páginas.";
    $message_type = "success";
}

// Extract current SEO data to pre-fill the form
$seo_data = [];
foreach ($html_files as $file) {
    $filename = basename($file);
    $content = file_get_contents($file);
    
    $title = '';
    $description = '';
    
    if (preg_match('/<title>(.*?)<\/title>/i', $content, $matches)) {
        $title = $matches[1];
    }
    
    if (preg_match('/<meta[^>]+name=["\']description["\'][^>]*content=["\'](.*?)["\']/i', $content, $matches)) {
        $description = $matches[1];
    }
    
    $seo_data[$filename] = [
        'title' => $title,
        'description' => $description
    ];
}
?>

<div class="card">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <h3>Gestión de SEO (Títulos y Meta Descripciones)</h3>
    </div>

    <?php if ($message): ?>
        <div class="alert alert-<?php echo $message_type === 'error' ? 'error' : 'success'; ?>" style="<?php echo $message_type === 'success' ? 'background: #d1fae5; color: #065f46; border: 1px solid #34d399;' : ''; ?>">
            <?php echo htmlspecialchars($message); ?>
        </div>
    <?php endif; ?>

    <p style="margin-bottom: 20px; color: var(--text-light);">
        Aquí puedes configurar el título y la descripción meta de cada página de forma individual. Esta información es la que lee Google para posicionar tu web y la que se muestra en los resultados de búsqueda.
    </p>

    <form method="POST" action="index.php?page=seo">
        <input type="hidden" name="action" value="save_seo">
        
        <?php foreach ($seo_data as $filename => $data): ?>
            <div style="background: var(--bg-light); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 20px;">
                <h4 style="margin-bottom: 15px; color: var(--primary);"><i class="far fa-file-code"></i> Página: <?php echo $filename; ?></h4>
                <div style="display: grid; grid-template-columns: 1fr; gap: 15px;">
                    <div class="form-group" style="margin-bottom: 0;">
                        <label>Título (&lt;title&gt;) <span style="font-size:0.8rem; font-weight:normal; color:#64748b;">(Recomendado: Máximo 60 caracteres)</span></label>
                        <input type="text" name="seo[<?php echo $filename; ?>][title]" value="<?php echo htmlspecialchars($data['title']); ?>" style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid var(--border);">
                    </div>
                    
                    <div class="form-group" style="margin-bottom: 0;">
                        <label>Meta Descripción <span style="font-size:0.8rem; font-weight:normal; color:#64748b;">(Recomendado: Máximo 155 caracteres)</span></label>
                        <textarea name="seo[<?php echo $filename; ?>][description]" rows="2" style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid var(--border);"><?php echo htmlspecialchars($data['description']); ?></textarea>
                    </div>
                </div>
            </div>
        <?php endforeach; ?>

        <button type="submit" class="btn btn-primary" style="font-size: 1.1rem; padding: 12px 30px; position: sticky; bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
            <i class="fas fa-save"></i> Guardar Todo el SEO
        </button>
    </form>
</div>
