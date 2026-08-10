<?php
$settings_file = '../content/settings.json';
$settings = [
    'head_tags' => '',
    'body_start_tags' => '',
    'body_end_tags' => ''
];

if (file_exists($settings_file)) {
    $settings = array_merge($settings, json_decode(file_get_contents($settings_file), true) ?? []);
}

$message = '';
$message_type = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action']) && $_POST['action'] === 'save_settings') {
    $head_tags = $_POST['head_tags'] ?? '';
    $body_start_tags = $_POST['body_start_tags'] ?? '';
    $body_end_tags = $_POST['body_end_tags'] ?? '';
    
    // Save to JSON
    $settings['head_tags'] = $head_tags;
    $settings['body_start_tags'] = $body_start_tags;
    $settings['body_end_tags'] = $body_end_tags;
    file_put_contents($settings_file, json_encode($settings, JSON_PRETTY_PRINT));
    
    // Inject into all HTML files in the root folder
    $root_dir = '../';
    $html_files = glob($root_dir . '*.html');
    
    $head_block = "<!-- SYSTEM_HEAD_TAGS_START -->\n" . trim($head_tags) . "\n<!-- SYSTEM_HEAD_TAGS_END -->\n";
    $body_start_block = "<!-- SYSTEM_BODY_START_TAGS_START -->\n" . trim($body_start_tags) . "\n<!-- SYSTEM_BODY_START_TAGS_END -->\n";
    $body_end_block = "<!-- SYSTEM_BODY_END_TAGS_START -->\n" . trim($body_end_tags) . "\n<!-- SYSTEM_BODY_END_TAGS_END -->\n";
    
    foreach ($html_files as $file) {
        $content = file_get_contents($file);
        
        // 1. HEAD TAGS
        if (strpos($content, '<!-- SYSTEM_HEAD_TAGS_START -->') !== false) {
            $content = preg_replace('/<!-- SYSTEM_HEAD_TAGS_START -->.*?<!-- SYSTEM_HEAD_TAGS_END -->\s*/s', $head_block, $content);
        } else {
            // Check for previous version tag and replace it
            if (strpos($content, '<!-- SYSTEM_TAGS_START -->') !== false) {
                $content = preg_replace('/<!-- SYSTEM_TAGS_START -->.*?<!-- SYSTEM_TAGS_END -->\s*/s', $head_block, $content);
            } else {
                $content = preg_replace('/<\/head>/i', $head_block . "</head>", $content, 1);
            }
        }

        // 2. BODY START TAGS
        if (strpos($content, '<!-- SYSTEM_BODY_START_TAGS_START -->') !== false) {
            $content = preg_replace('/<!-- SYSTEM_BODY_START_TAGS_START -->.*?<!-- SYSTEM_BODY_START_TAGS_END -->\s*/s', $body_start_block, $content);
        } else {
            // Need to match <body> even if it has attributes like <body class="something">
            $content = preg_replace('/(<body[^>]*>)/i', "$1\n" . $body_start_block, $content, 1);
        }

        // 3. BODY END TAGS (Footer)
        if (strpos($content, '<!-- SYSTEM_BODY_END_TAGS_START -->') !== false) {
            $content = preg_replace('/<!-- SYSTEM_BODY_END_TAGS_START -->.*?<!-- SYSTEM_BODY_END_TAGS_END -->\s*/s', $body_end_block, $content);
        } else {
            $content = preg_replace('/<\/body>/i', $body_end_block . "</body>", $content, 1);
        }
        
        file_put_contents($file, $content);
    }
    
    $message = "Configuración guardada y etiquetas inyectadas correctamente en todos los archivos HTML.";
    $message_type = "success";
}
?>

<div class="card">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <h3>Configuración Global (SEO y Tracking)</h3>
    </div>

    <?php if ($message): ?>
        <div class="alert alert-<?php echo $message_type === 'error' ? 'error' : 'success'; ?>" style="<?php echo $message_type === 'success' ? 'background: #d1fae5; color: #065f46; border: 1px solid #34d399;' : ''; ?>">
            <?php echo htmlspecialchars($message); ?>
        </div>
    <?php endif; ?>

    <p style="margin-bottom: 20px; color: var(--text-light);">
        Pega aquí los códigos de verificación, píxeles o scripts analíticos. 
        Al guardar, se inyectarán de forma automática en todas las páginas de tu sitio.
    </p>

    <form method="POST" action="index.php?page=settings">
        <input type="hidden" name="action" value="save_settings">
        
        <div class="form-group" style="margin-bottom: 30px;">
            <label style="font-size: 1.1rem; font-weight: bold; color: var(--primary);">Etiquetas en el &lt;head&gt;</label>
            <p style="font-size: 0.85rem; color: var(--text-light); margin-bottom: 10px;">Ideal para Google Search Console, Meta tags de SEO, Google Analytics (gtag.js) o Meta Pixel Base Code.</p>
            <textarea name="head_tags" rows="8" style="width: 100%; padding: 15px; border-radius: 8px; border: 1px solid var(--border); font-family: monospace; font-size: 14px; background: #f1f5f9; color: #334155;" placeholder="<!-- Global site tag (gtag.js) -->..."><?php echo htmlspecialchars($settings['head_tags'] ?? ''); ?></textarea>
        </div>

        <div class="form-group" style="margin-bottom: 30px;">
            <label style="font-size: 1.1rem; font-weight: bold; color: var(--primary);">Etiquetas al inicio de &lt;body&gt;</label>
            <p style="font-size: 0.85rem; color: var(--text-light); margin-bottom: 10px;">Ideal para la etiqueta <code>&lt;noscript&gt;</code> de Google Tag Manager (GTM).</p>
            <textarea name="body_start_tags" rows="6" style="width: 100%; padding: 15px; border-radius: 8px; border: 1px solid var(--border); font-family: monospace; font-size: 14px; background: #f1f5f9; color: #334155;" placeholder="<!-- Google Tag Manager (noscript) -->..."><?php echo htmlspecialchars($settings['body_start_tags'] ?? ''); ?></textarea>
        </div>

        <div class="form-group" style="margin-bottom: 30px;">
            <label style="font-size: 1.1rem; font-weight: bold; color: var(--primary);">Etiquetas antes de cerrar &lt;/body&gt; (Footer)</label>
            <p style="font-size: 0.85rem; color: var(--text-light); margin-bottom: 10px;">Ideal para scripts adicionales o widgets de chat que deseas que carguen al final para no afectar el rendimiento.</p>
            <textarea name="body_end_tags" rows="6" style="width: 100%; padding: 15px; border-radius: 8px; border: 1px solid var(--border); font-family: monospace; font-size: 14px; background: #f1f5f9; color: #334155;" placeholder="<script src='...'></script>"><?php echo htmlspecialchars($settings['body_end_tags'] ?? ''); ?></textarea>
        </div>
        
        <div style="background: var(--bg-light); padding: 15px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid var(--secondary);">
            <i class="fas fa-info-circle text-secondary"></i> Al hacer clic en <strong>Guardar y Aplicar</strong>, estos bloques de código se insertarán en los archivos HTML correspondientes en tiempo real.
        </div>

        <button type="submit" class="btn btn-primary" style="font-size: 1.1rem; padding: 12px 30px;">
            <i class="fas fa-save"></i> Guardar y Aplicar
        </button>
    </form>
</div>
