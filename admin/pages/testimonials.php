<?php
$testimonials_file = '../content/testimonials.json';
$testimonials = [];

if (file_exists($testimonials_file)) {
    $testimonials = json_decode(file_get_contents($testimonials_file), true) ?? [];
}

$message = '';
$message_type = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['action']) && $_POST['action'] === 'save_testimonial') {
        $id = (int)$_POST['id'];
        
        $new_test = [
            'id' => $id,
            'name' => trim($_POST['name']),
            'text' => trim($_POST['text']),
            'stars' => (int)$_POST['stars'],
            'date' => trim($_POST['date']),
            'image' => trim($_POST['image'])
        ];
        
        $found = false;
        foreach ($testimonials as &$t) {
            if ($t['id'] === $id) {
                $t = $new_test;
                $found = true;
                break;
            }
        }
        
        if (!$found) {
            $testimonials[] = $new_test;
        }
        
        file_put_contents($testimonials_file, json_encode($testimonials, JSON_PRETTY_PRINT));
        $message = "Testimonio guardado exitosamente.";
        $message_type = "success";
    } elseif (isset($_POST['action']) && $_POST['action'] === 'delete_testimonial') {
        $id_to_delete = (int)$_POST['id'];
        $testimonials = array_filter($testimonials, function($t) use ($id_to_delete) {
            return $t['id'] !== $id_to_delete;
        });
        $testimonials = array_values($testimonials);
        file_put_contents($testimonials_file, json_encode($testimonials, JSON_PRETTY_PRINT));
        $message = "Testimonio eliminado.";
        $message_type = "success";
    }
}
?>

<div class="card">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <h3>Gestión de Testimonios</h3>
        <button class="btn btn-primary" onclick="document.getElementById('test-form').style.display='block'; document.getElementById('form-action').value='add'; document.getElementById('t-id').value='<?php echo time(); ?>'; document.getElementById('t-name').value=''; document.getElementById('t-text').value=''; document.getElementById('t-stars').value='5'; document.getElementById('t-date').value='Hace un tiempo'; document.getElementById('t-image').value='';"><i class="fas fa-plus"></i> Nuevo Testimonio</button>
    </div>

    <?php if ($message): ?>
        <div class="alert alert-<?php echo $message_type === 'error' ? 'error' : 'success'; ?>" style="<?php echo $message_type === 'success' ? 'background: #d1fae5; color: #065f46; border: 1px solid #34d399;' : ''; ?>">
            <?php echo htmlspecialchars($message); ?>
        </div>
    <?php endif; ?>

    <div id="test-form" style="display: none; background: var(--bg-light); border: 1px solid var(--border); padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h4>Agregar / Editar Testimonio</h4>
        <form method="POST" action="index.php?page=testimonials" style="margin-top: 15px; display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <input type="hidden" name="action" value="save_testimonial">
            <input type="hidden" name="id" id="t-id" value="">
            
            <div class="form-group">
                <label>Nombre del Paciente</label>
                <input type="text" name="name" id="t-name" style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid var(--border);" required>
            </div>
            
            <div class="form-group">
                <label>Fecha (ej: Hace un tiempo)</label>
                <input type="text" name="date" id="t-date" style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid var(--border);" required>
            </div>
            
            <div class="form-group">
                <label>Estrellas (1-5)</label>
                <input type="number" name="stars" id="t-stars" min="1" max="5" style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid var(--border);" required>
            </div>
            
            <div class="form-group">
                <label>URL Imagen Avatar</label>
                <input type="text" name="image" id="t-image" style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid var(--border);" required>
            </div>
            
            <div class="form-group" style="grid-column: 1 / -1;">
                <label>Comentario</label>
                <textarea name="text" id="t-text" rows="3" style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid var(--border);" required></textarea>
            </div>
            
            <div style="grid-column: 1 / -1; display: flex; gap: 10px;">
                <button type="submit" class="btn btn-primary">Guardar</button>
                <button type="button" class="btn btn-outline" onclick="document.getElementById('test-form').style.display='none';">Cancelar</button>
            </div>
        </form>
    </div>

    <div class="table-responsive">
        <table>
            <thead>
                <tr>
                    <th>Paciente</th>
                    <th>Comentario</th>
                    <th>Estrellas</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <?php if(empty($testimonials)): ?>
                    <tr><td colspan="4" class="text-center">No hay testimonios registrados.</td></tr>
                <?php else: ?>
                    <?php foreach ($testimonials as $t): ?>
                        <tr>
                            <td>
                                <div style="display:flex; align-items:center; gap:10px;">
                                    <img src="<?php echo htmlspecialchars($t['image']); ?>" style="width:40px; height:40px; border-radius:50%;">
                                    <span><?php echo htmlspecialchars($t['name']); ?></span>
                                </div>
                            </td>
                            <td><div style="max-width:300px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;"><?php echo htmlspecialchars($t['text']); ?></div></td>
                            <td><?php echo str_repeat('<i class="fas fa-star" style="color:#FFB400; font-size:12px;"></i>', (int)$t['stars']); ?></td>
                            <td>
                                <?php 
                                    $t_json = htmlspecialchars(json_encode($t), ENT_QUOTES, 'UTF-8');
                                ?>
                                <button type="button" class="btn btn-sm" style="background: #e0f2fe; color: #0284c7; padding: 5px 10px; border: none; border-radius: 4px; margin-right: 5px; cursor: pointer;" 
                                        onclick="editTestimonial(<?php echo $t_json; ?>)">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <form method="POST" action="index.php?page=testimonials" style="display:inline;" onsubmit="return confirm('¿Seguro que deseas eliminar este testimonio?');">
                                    <input type="hidden" name="action" value="delete_testimonial">
                                    <input type="hidden" name="id" value="<?php echo $t['id']; ?>">
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
function editTestimonial(t) {
    document.getElementById('test-form').style.display = 'block';
    document.getElementById('t-id').value = t.id;
    document.getElementById('t-name').value = t.name;
    document.getElementById('t-text').value = t.text;
    document.getElementById('t-stars').value = t.stars;
    document.getElementById('t-date').value = t.date;
    document.getElementById('t-image').value = t.image;
    window.scrollTo(0, 0);
}
</script>
