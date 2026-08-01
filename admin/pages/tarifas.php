<?php
$tarifas_file = '../content/tarifas.json';
$tarifas = [];

if (file_exists($tarifas_file)) {
    $tarifas = json_decode(file_get_contents($tarifas_file), true) ?? [];
}

$message = '';
$message_type = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['action']) && $_POST['action'] === 'save_tarifas') {
        // Read raw JSON from a textarea for simplicity
        $json_data = $_POST['tarifas_json'] ?? '';
        
        $decoded = json_decode($json_data, true);
        if (json_last_error() === JSON_ERROR_NONE) {
            file_put_contents($tarifas_file, json_encode($decoded, JSON_PRETTY_PRINT));
            $tarifas = $decoded; // update view
            $message = "Tarifas guardadas exitosamente.";
            $message_type = "success";
        } else {
            $message = "Error en el formato JSON de las tarifas. Por favor verifica que la estructura sea correcta.";
            $message_type = "error";
        }
    }
}
?>

<div class="card">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <h3>Gestión de Tarifas</h3>
    </div>

    <?php if ($message): ?>
        <div class="alert alert-<?php echo $message_type === 'error' ? 'error' : 'success'; ?>" style="<?php echo $message_type === 'success' ? 'background: #d1fae5; color: #065f46; border: 1px solid #34d399;' : 'background: #fee2e2; color: #991b1b; border: 1px solid #f87171;'; ?>">
            <?php echo htmlspecialchars($message); ?>
        </div>
    <?php endif; ?>

    <p style="margin-bottom: 20px; color: var(--text-light);">
        Aquí puedes modificar las tarifas y categorías de los exámenes. Asegúrate de mantener la estructura del código JSON.
    </p>

    <form method="POST" action="index.php?page=tarifas">
        <input type="hidden" name="action" value="save_tarifas">
        
        <div class="form-group">
            <textarea name="tarifas_json" rows="25" style="width: 100%; padding: 15px; border-radius: 8px; border: 1px solid var(--border); font-family: monospace; font-size: 14px; background: #282c34; color: #abb2bf;" required><?php echo htmlspecialchars(json_encode($tarifas, JSON_PRETTY_PRINT)); ?></textarea>
        </div>
        
        <button type="submit" class="btn btn-primary" style="margin-top: 10px;">
            <i class="fas fa-save"></i> Guardar Tarifas
        </button>
    </form>
</div>
