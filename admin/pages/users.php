<?php
$users_file = '../content/users.json';
$users = [];

if (file_exists($users_file)) {
    $users = json_decode(file_get_contents($users_file), true) ?? [];
}

$message = '';
$message_type = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action'])) {
    if ($_POST['action'] === 'save_user') {
        $id = isset($_POST['user_id']) && !empty($_POST['user_id']) ? (int)$_POST['user_id'] : null;
        $username = trim($_POST['username']);
        $password = trim($_POST['password']);
        
        if ($id) {
            // Edit existing user
            $found = false;
            foreach ($users as &$user) {
                if ($user['id'] === $id) {
                    // Check if new username conflicts with another user
                    $conflict = false;
                    foreach ($users as $u) {
                        if ($u['username'] === $username && $u['id'] !== $id) {
                            $conflict = true;
                            break;
                        }
                    }
                    
                    if ($conflict) {
                        $message = "El nombre de usuario ya está en uso.";
                        $message_type = "error";
                    } else {
                        $user['username'] = $username;
                        if (!empty($password)) {
                            $user['password'] = password_hash($password, PASSWORD_DEFAULT);
                        }
                        $message = "Usuario actualizado correctamente.";
                        $message_type = "success";
                    }
                    $found = true;
                    break;
                }
            }
            if ($found && $message_type === 'success') {
                file_put_contents($users_file, json_encode($users, JSON_PRETTY_PRINT));
                // Update session if editing self
                if ($_SESSION['admin_username'] === $user['username'] || isset($_SESSION['admin_username'])) {
                    $_SESSION['admin_username'] = $username;
                }
            }
        } else {
            // Add new user
            $exists = false;
            foreach ($users as $user) {
                if ($user['username'] === $username) {
                    $exists = true;
                    break;
                }
            }
            
            if ($exists) {
                $message = "El usuario ya existe.";
                $message_type = "error";
            } else {
                $new_user = [
                    'id' => time(),
                    'username' => $username,
                    'password' => password_hash($password, PASSWORD_DEFAULT)
                ];
                $users[] = $new_user;
                file_put_contents($users_file, json_encode($users, JSON_PRETTY_PRINT));
                $message = "Usuario agregado correctamente.";
                $message_type = "success";
            }
        }
    } elseif ($_POST['action'] === 'delete_user') {
        $id_to_delete = (int)$_POST['user_id'];
        if (count($users) > 1) { // Prevent deleting the last user
            $users = array_filter($users, function($user) use ($id_to_delete) {
                return $user['id'] !== $id_to_delete;
            });
            $users = array_values($users); // Reindex
            file_put_contents($users_file, json_encode($users, JSON_PRETTY_PRINT));
            $message = "Usuario eliminado.";
            $message_type = "success";
        } else {
            $message = "No puedes eliminar el último usuario.";
            $message_type = "error";
        }
    }
}
?>

<div class="card">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <h3>Gestión de Usuarios</h3>
        <button class="btn btn-primary" onclick="openUserForm()"><i class="fas fa-plus"></i> Nuevo Usuario</button>
    </div>
    
    <?php if ($message): ?>
        <div class="alert alert-<?php echo $message_type === 'error' ? 'error' : 'success'; ?>" style="<?php echo $message_type === 'success' ? 'background: #d1fae5; color: #065f46; border: 1px solid #34d399;' : ''; ?>">
            <?php echo htmlspecialchars($message); ?>
        </div>
    <?php endif; ?>

    <div id="user-form" style="display: none; background: var(--bg-light); border: 1px solid var(--border); padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h4 id="form-title">Agregar / Editar Usuario</h4>
        <form method="POST" action="index.php?page=users" style="margin-top: 15px; display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <input type="hidden" name="action" value="save_user">
            <input type="hidden" name="user_id" id="u-id" value="">
            
            <div class="form-group">
                <label>Nombre de Usuario</label>
                <input type="text" name="username" id="u-username" style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid var(--border);" required>
            </div>
            
            <div class="form-group">
                <label>Contraseña <span id="pwd-help" style="font-size: 0.8rem; color: #64748b; font-weight: normal;">(Déjala en blanco si no quieres cambiarla)</span></label>
                <input type="password" name="password" id="u-password" style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid var(--border);">
            </div>
            
            <div style="grid-column: 1 / -1; display: flex; gap: 10px;">
                <button type="submit" class="btn btn-primary">Guardar</button>
                <button type="button" class="btn btn-outline" onclick="document.getElementById('user-form').style.display='none';">Cancelar</button>
            </div>
        </form>
    </div>

    <div class="table-responsive" style="margin-top: 15px;">
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Usuario</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($users as $user): ?>
                    <tr>
                        <td><?php echo $user['id']; ?></td>
                        <td>
                            <strong><?php echo htmlspecialchars($user['username']); ?></strong>
                            <?php if($user['username'] === $_SESSION['admin_username']) echo '<span style="font-size:0.8rem; color:var(--secondary); margin-left:5px;">(Tú)</span>'; ?>
                        </td>
                        <td>
                            <?php 
                                $u_json = htmlspecialchars(json_encode(['id' => $user['id'], 'username' => $user['username']]), ENT_QUOTES, 'UTF-8');
                            ?>
                            <button type="button" class="btn btn-sm" style="background: #e0f2fe; color: #0284c7; padding: 5px 10px; border: none; border-radius: 4px; margin-right: 5px; cursor: pointer;" 
                                    onclick="editUser(<?php echo $u_json; ?>)">
                                <i class="fas fa-edit"></i> Editar
                            </button>
                            <form method="POST" action="index.php?page=users" onsubmit="return confirm('¿Seguro que deseas eliminar este usuario?');" style="display:inline;">
                                <input type="hidden" name="action" value="delete_user">
                                <input type="hidden" name="user_id" value="<?php echo $user['id']; ?>">
                                <button type="submit" class="btn btn-sm" style="background: #fee2e2; color: #b91c1c; padding: 5px 10px; border: none; border-radius: 4px; cursor: pointer;">
                                    <i class="fas fa-trash"></i> Eliminar
                                </button>
                            </form>
                        </td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
</div>

<script>
function openUserForm() {
    document.getElementById('user-form').style.display = 'block';
    document.getElementById('form-title').innerText = 'Nuevo Usuario';
    document.getElementById('u-id').value = '';
    document.getElementById('u-username').value = '';
    document.getElementById('u-password').value = '';
    document.getElementById('u-password').required = true;
    document.getElementById('pwd-help').style.display = 'none';
}

function editUser(user) {
    document.getElementById('user-form').style.display = 'block';
    document.getElementById('form-title').innerText = 'Editar Usuario';
    document.getElementById('u-id').value = user.id;
    document.getElementById('u-username').value = user.username;
    document.getElementById('u-password').value = '';
    document.getElementById('u-password').required = false;
    document.getElementById('pwd-help').style.display = 'inline';
    window.scrollTo(0, 0);
}
</script>
