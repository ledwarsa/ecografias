<?php
$links_file = '../content/links.json';
$links = [];

if (file_exists($links_file)) {
    $links = json_decode(file_get_contents($links_file), true) ?? [];
}

$message = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action']) && $_POST['action'] === 'save_links') {
    $links['whatsapp'] = $_POST['whatsapp'] ?? '';
    $links['agenda'] = $_POST['agenda'] ?? '';
    $links['facebook'] = $_POST['facebook'] ?? '';
    $links['instagram'] = $_POST['instagram'] ?? '';
    $links['youtube'] = $_POST['youtube'] ?? '';
    $links['google_maps_norte'] = $_POST['google_maps_norte'] ?? '';
    $links['google_maps_sur'] = $_POST['google_maps_sur'] ?? '';
    
    file_put_contents($links_file, json_encode($links, JSON_PRETTY_PRINT));
    $message = "Enlaces guardados exitosamente. Los botones de la web se han actualizado.";
}
?>

<div class="card">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <h3>Gestión de Enlaces Globales</h3>
    </div>

    <?php if ($message): ?>
        <div class="alert alert-success" style="background: #d1fae5; color: #065f46; border: 1px solid #34d399;">
            <?php echo htmlspecialchars($message); ?>
        </div>
    <?php endif; ?>

    <p style="margin-bottom: 20px; color: var(--text-light);">
        Edita las URLs aquí y se actualizarán automáticamente en todos los botones correspondientes de la web (Header, CTA, Footer y Botones Flotantes).
    </p>

    <form method="POST" action="index.php?page=links">
        <input type="hidden" name="action" value="save_links">
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div class="form-group">
                <label>WhatsApp (Link corto / API)</label>
                <input type="url" name="whatsapp" value="<?php echo htmlspecialchars($links['whatsapp'] ?? ''); ?>" style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid var(--border);" placeholder="https://wa.link/...">
            </div>
            
            <div class="form-group">
                <label>Agendador Web (AgendaPro u otro)</label>
                <input type="url" name="agenda" value="<?php echo htmlspecialchars($links['agenda'] ?? ''); ?>" style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid var(--border);" placeholder="https://...">
            </div>
            
            <div class="form-group">
                <label>Facebook</label>
                <input type="url" name="facebook" value="<?php echo htmlspecialchars($links['facebook'] ?? ''); ?>" style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid var(--border);">
            </div>
            
            <div class="form-group">
                <label>Instagram</label>
                <input type="url" name="instagram" value="<?php echo htmlspecialchars($links['instagram'] ?? ''); ?>" style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid var(--border);">
            </div>
            
            <div class="form-group">
                <label>YouTube</label>
                <input type="url" name="youtube" value="<?php echo htmlspecialchars($links['youtube'] ?? ''); ?>" style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid var(--border);">
            </div>
        </div>

        <h4 style="margin-top: 30px; margin-bottom: 15px;">Google Maps (Sedes)</h4>
        <div style="display: grid; grid-template-columns: 1fr; gap: 20px;">
            <div class="form-group">
                <label>Enlace Sede Norte</label>
                <input type="url" name="google_maps_norte" value="<?php echo htmlspecialchars($links['google_maps_norte'] ?? ''); ?>" style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid var(--border);">
            </div>
            <div class="form-group">
                <label>Enlace Sede Sur</label>
                <input type="url" name="google_maps_sur" value="<?php echo htmlspecialchars($links['google_maps_sur'] ?? ''); ?>" style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid var(--border);">
            </div>
        </div>
        
        <button type="submit" class="btn btn-primary" style="margin-top: 20px;"><i class="fas fa-save"></i> Guardar Enlaces</button>
    </form>
</div>
