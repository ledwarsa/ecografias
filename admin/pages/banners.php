<?php
$banners_file = '../content/banners.json';
$banners = [];

if (file_exists($banners_file)) {
    $banners = json_decode(file_get_contents($banners_file), true) ?? [];
} else {
    // Si no existe el archivo, creamos uno con algunos datos por defecto o vacío
    $banners = [];
    file_put_contents($banners_file, json_encode($banners, JSON_PRETTY_PRINT));
}

$message = '';
$message_type = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['action']) && $_POST['action'] === 'save_banner') {
        $id = (int)$_POST['id'];
        if (!$id) $id = time(); // Generar ID si es nuevo
        
        $image_path = trim($_POST['existing_image'] ?? '');
        
        // Manejo de subida de archivo
        if (isset($_FILES['image_file']) && $_FILES['image_file']['error'] === UPLOAD_ERR_OK) {
            $upload_dir = '../assets/';
            // Crear nombre de archivo único
            $file_extension = pathinfo($_FILES['image_file']['name'], PATHINFO_EXTENSION);
            $file_name = 'banner_' . time() . '_' . uniqid() . '.' . $file_extension;
            $target_file = $upload_dir . $file_name;
            
            if (move_uploaded_file($_FILES['image_file']['tmp_name'], $target_file)) {
                $image_path = 'assets/' . $file_name;
            }
        } elseif (empty($image_path) && isset($_POST['image'])) {
            // Soporte para mantener compatibilidad si se envía campo texto
            $image_path = trim($_POST['image']);
        }
        
        $new_banner = [
            'id' => $id,
            'title' => trim($_POST['title']),
            'image' => $image_path,
            'link' => trim($_POST['link']),
            'device' => trim($_POST['device']) // 'pc' or 'mobile'
        ];
        
        $found = false;
        foreach ($banners as &$b) {
            if ($b['id'] === $id) {
                $b = $new_banner;
                $found = true;
                break;
            }
        }
        
        if (!$found) {
            $banners[] = $new_banner;
        }
        
        file_put_contents($banners_file, json_encode($banners, JSON_PRETTY_PRINT));
        $message = "Banner guardado exitosamente.";
        $message_type = "success";
    } elseif (isset($_POST['action']) && $_POST['action'] === 'delete_banner') {
        $id_to_delete = (int)$_POST['id'];
        $banners = array_filter($banners, function($b) use ($id_to_delete) {
            return $b['id'] !== $id_to_delete;
        });
        $banners = array_values($banners);
        file_put_contents($banners_file, json_encode($banners, JSON_PRETTY_PRINT));
        $message = "Banner eliminado.";
        $message_type = "success";
    }
}
?>

<div class="card">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <h3>Gestión de Banners (Slider Hero)</h3>
        <button class="btn btn-primary" onclick="
            document.getElementById('banner-form').style.display='block'; 
            document.getElementById('b-id').value='<?php echo time(); ?>'; 
            document.getElementById('b-title').value=''; 
            document.getElementById('b-img-file').value=''; 
            document.getElementById('b-img-existing').value=''; 
            document.getElementById('b-link').value=''; 
            document.getElementById('b-device').value='pc';
        "><i class="fas fa-plus"></i> Nuevo Banner</button>
    </div>

    <?php if ($message): ?>
        <div class="alert alert-<?php echo $message_type === 'error' ? 'error' : 'success'; ?>" style="<?php echo $message_type === 'success' ? 'background: #d1fae5; color: #065f46; border: 1px solid #34d399;' : ''; ?>">
            <?php echo htmlspecialchars($message); ?>
        </div>
    <?php endif; ?>

    <div id="banner-form" style="display: none; background: var(--bg-light); border: 1px solid var(--border); padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h4>Agregar / Editar Banner</h4>
        <form method="POST" action="index.php?page=banners" enctype="multipart/form-data" style="margin-top: 15px; display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <input type="hidden" name="action" value="save_banner">
            <input type="hidden" name="id" id="b-id" value="">
            
            <div class="form-group">
                <label>Título (Uso interno y texto alt)</label>
                <input type="text" name="title" id="b-title" style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid var(--border);" required>
            </div>
            
            <div class="form-group">
                <label>Dispositivo</label>
                <select name="device" id="b-device" style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid var(--border);" required>
                    <option value="pc">PC (Escritorio)</option>
                    <option value="mobile">Móvil</option>
                </select>
            </div>
            
            <div class="form-group" style="grid-column: 1 / -1;">
                <label>Imagen (Sube desde tu PC)</label>
                <input type="file" name="image_file" id="b-img-file" accept="image/*" style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid var(--border);">
                <input type="hidden" name="existing_image" id="b-img-existing" value="">
                <p style="font-size: 0.8rem; color: #666; margin-top: 5px;">Deja vacío si ya hay una imagen y no deseas cambiarla.</p>
            </div>
            
            <div class="form-group" style="grid-column: 1 / -1;">
                <label>Enlace (a dónde dirige al hacer clic, ej: tarifas.html o URL completa)</label>
                <input type="text" name="link" id="b-link" style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid var(--border);" required>
            </div>
            
            <div style="grid-column: 1 / -1; display: flex; gap: 10px;">
                <button type="submit" class="btn btn-primary">Guardar</button>
                <button type="button" class="btn btn-outline" onclick="document.getElementById('banner-form').style.display='none';">Cancelar</button>
            </div>
        </form>
    </div>

    <div class="table-responsive">
        <table>
            <thead>
                <tr>
                    <th>Imagen</th>
                    <th>Título</th>
                    <th>Dispositivo</th>
                    <th>Enlace</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <?php if(empty($banners)): ?>
                    <tr><td colspan="5" class="text-center">No hay banners registrados.</td></tr>
                <?php else: ?>
                    <?php foreach ($banners as $banner): ?>
                        <tr>
                            <td>
                                <img src="<?php echo strpos($banner['image'], 'http') === 0 ? htmlspecialchars($banner['image']) : '../' . htmlspecialchars($banner['image']); ?>" style="max-width: 150px; border-radius: 4px; object-fit: cover;">
                            </td>
                            <td><?php echo htmlspecialchars($banner['title']); ?></td>
                            <td>
                                <?php if($banner['device'] === 'mobile'): ?>
                                    <span style="background:var(--primary);color:white;padding:2px 8px;border-radius:10px;font-size:0.8rem;"><i class="fas fa-mobile-alt"></i> Móvil</span>
                                <?php else: ?>
                                    <span style="background:var(--secondary);color:white;padding:2px 8px;border-radius:10px;font-size:0.8rem;"><i class="fas fa-desktop"></i> PC</span>
                                <?php endif; ?>
                            </td>
                            <td><a href="<?php echo htmlspecialchars($banner['link']); ?>" target="_blank"><?php echo htmlspecialchars(strlen($banner['link']) > 30 ? substr($banner['link'],0,30).'...' : $banner['link']); ?></a></td>
                            <td>
                                <?php 
                                    $b_json = htmlspecialchars(json_encode($banner), ENT_QUOTES, 'UTF-8');
                                ?>
                                <button type="button" class="btn btn-sm" style="background: #e0f2fe; color: #0284c7; padding: 5px 10px; border: none; border-radius: 4px; margin-right: 5px; cursor: pointer;" 
                                        onclick="editBanner(<?php echo $b_json; ?>)">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <form method="POST" action="index.php?page=banners" style="display:inline;" onsubmit="return confirm('¿Seguro que deseas eliminar este banner?');">
                                    <input type="hidden" name="action" value="delete_banner">
                                    <input type="hidden" name="id" value="<?php echo $banner['id']; ?>">
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
function editBanner(banner) {
    document.getElementById('banner-form').style.display = 'block';
    document.getElementById('b-id').value = banner.id;
    document.getElementById('b-title').value = banner.title;
    document.getElementById('b-device').value = banner.device || 'pc';
    document.getElementById('b-img-file').value = '';
    document.getElementById('b-img-existing').value = banner.image;
    document.getElementById('b-link').value = banner.link;
    window.scrollTo(0, 0);
}
</script>
