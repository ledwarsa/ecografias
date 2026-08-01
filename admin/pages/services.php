<?php
$services_file = '../content/services.json';
$services = [];

if (file_exists($services_file)) {
    $services = json_decode(file_get_contents($services_file), true) ?? [];
}

$message = '';
$message_type = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['action']) && $_POST['action'] === 'save_service') {
        $id = (int)$_POST['id'];
        
        $new_service = [
            'id' => $id,
            'title' => trim($_POST['title']),
            'description' => trim($_POST['description']),
            'image' => trim($_POST['image']),
            'icon' => trim($_POST['icon']),
            'link' => trim($_POST['link']),
            'highlight' => isset($_POST['highlight']) ? true : false
        ];
        
        $found = false;
        foreach ($services as &$s) {
            if ($s['id'] === $id) {
                $s = $new_service;
                $found = true;
                break;
            }
        }
        
        if (!$found) {
            $services[] = $new_service;
        }
        
        file_put_contents($services_file, json_encode($services, JSON_PRETTY_PRINT));
        $message = "Servicio guardado exitosamente.";
        $message_type = "success";
    } elseif (isset($_POST['action']) && $_POST['action'] === 'delete_service') {
        $id_to_delete = (int)$_POST['id'];
        $services = array_filter($services, function($s) use ($id_to_delete) {
            return $s['id'] !== $id_to_delete;
        });
        $services = array_values($services);
        file_put_contents($services_file, json_encode($services, JSON_PRETTY_PRINT));
        $message = "Servicio eliminado.";
        $message_type = "success";
    }
}
?>

<div class="card">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <h3>Gestión de Servicios</h3>
        <button class="btn btn-primary" onclick="document.getElementById('service-form').style.display='block'; document.getElementById('form-action').value='add'; document.getElementById('service-id').value='<?php echo time(); ?>'; document.getElementById('s-title').value=''; document.getElementById('s-desc').value=''; document.getElementById('s-img').value=''; document.getElementById('s-icon').value=''; document.getElementById('s-link').value=''; document.getElementById('s-highlight').checked=false;"><i class="fas fa-plus"></i> Nuevo Servicio</button>
    </div>

    <?php if ($message): ?>
        <div class="alert alert-<?php echo $message_type === 'error' ? 'error' : 'success'; ?>" style="<?php echo $message_type === 'success' ? 'background: #d1fae5; color: #065f46; border: 1px solid #34d399;' : ''; ?>">
            <?php echo htmlspecialchars($message); ?>
        </div>
    <?php endif; ?>

    <div id="service-form" style="display: none; background: var(--bg-light); border: 1px solid var(--border); padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h4>Agregar / Editar Servicio</h4>
        <form method="POST" action="index.php?page=services" style="margin-top: 15px; display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <input type="hidden" name="action" value="save_service">
            <input type="hidden" name="id" id="service-id" value="">
            
            <div class="form-group">
                <label>Título</label>
                <input type="text" name="title" id="s-title" style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid var(--border);" required>
            </div>
            
            <div class="form-group">
                <label>Imagen (URL o ruta)</label>
                <input type="text" name="image" id="s-img" style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid var(--border);" required>
            </div>
            
            <div class="form-group">
                <label>Ícono (Ej: fa-heartbeat)</label>
                <input type="text" name="icon" id="s-icon" style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid var(--border);" required>
            </div>
            
            <div class="form-group">
                <label>Enlace (Ej: examen.html)</label>
                <input type="text" name="link" id="s-link" style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid var(--border);" required>
            </div>
            
            <div class="form-group" style="grid-column: 1 / -1;">
                <label>Descripción</label>
                <textarea name="description" id="s-desc" rows="3" style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid var(--border);" required></textarea>
            </div>
            
            <div class="form-group" style="grid-column: 1 / -1;">
                <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                    <input type="checkbox" name="highlight" id="s-highlight" value="1">
                    Destacar este servicio
                </label>
            </div>
            
            <div style="grid-column: 1 / -1; display: flex; gap: 10px;">
                <button type="submit" class="btn btn-primary">Guardar</button>
                <button type="button" class="btn btn-outline" onclick="document.getElementById('service-form').style.display='none';">Cancelar</button>
            </div>
        </form>
    </div>

    <div class="table-responsive">
        <table>
            <thead>
                <tr>
                    <th>Imagen</th>
                    <th>Título</th>
                    <th>Destacado</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <?php if(empty($services)): ?>
                    <tr><td colspan="4" class="text-center">No hay servicios registrados.</td></tr>
                <?php else: ?>
                    <?php foreach ($services as $service): ?>
                        <tr>
                            <td><img src="../<?php echo htmlspecialchars($service['image']); ?>" style="width: 50px; border-radius: 4px;"></td>
                            <td><?php echo htmlspecialchars($service['title']); ?></td>
                            <td><?php echo $service['highlight'] ? '<span style="background:var(--secondary);color:white;padding:2px 8px;border-radius:10px;font-size:0.8rem;">Sí</span>' : 'No'; ?></td>
                            <td>
                                <?php 
                                    $s_json = htmlspecialchars(json_encode($service), ENT_QUOTES, 'UTF-8');
                                ?>
                                <button type="button" class="btn btn-sm" style="background: #e0f2fe; color: #0284c7; padding: 5px 10px; border: none; border-radius: 4px; margin-right: 5px; cursor: pointer;" 
                                        onclick="editService(<?php echo $s_json; ?>)">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <form method="POST" action="index.php?page=services" style="display:inline;" onsubmit="return confirm('¿Seguro que deseas eliminar este servicio?');">
                                    <input type="hidden" name="action" value="delete_service">
                                    <input type="hidden" name="id" value="<?php echo $service['id']; ?>">
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

<script>
function editService(service) {
    document.getElementById('service-form').style.display = 'block';
    document.getElementById('service-id').value = service.id;
    document.getElementById('s-title').value = service.title;
    document.getElementById('s-desc').value = service.description;
    document.getElementById('s-img').value = service.image;
    document.getElementById('s-icon').value = service.icon;
    document.getElementById('s-link').value = service.link;
    document.getElementById('s-highlight').checked = service.highlight;
    window.scrollTo(0, 0);
}
</script>
