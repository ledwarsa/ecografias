<?php
$users_file = '../content/users.json';
$users = [];

if (file_exists($users_file)) {
    $users = json_decode(file_get_contents($users_file), true) ?? [];
}

$message = '';
$message_type = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action'])) {
    if ($_POST['action'] === 'add_user') {
        $username = trim($_POST['username']);
        $password = $_POST['password'];
        
        // Check if user exists
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
    </div>
    
    <?php if ($message): ?>
        <div class="alert alert-<?php echo $message_type === 'error' ? 'error' : 'success'; ?>" style="<?php echo $message_type === 'success' ? 'background: #d1fae5; color: #065f46; border: 1px solid #34d399;' : ''; ?>">
            <?php echo htmlspecialchars($message); ?>
        </div>
    <?php endif; ?>

    <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 30px;">
        <div>
            <h4>Agregar Usuario</h4>
            <form method="POST" action="index.php?page=users" style="margin-top: 15px;">
                <input type="hidden" name="action" value="add_user">
                <div class="form-group">
                    <label>Usuario</label>
                    <input type="text" name="username" class="input-with-icon" style="width: 100%; padding: 10px; border-radius: 8px; border: 1px solid var(--border);" required>
                </div>
                <div class="form-group">
                    <label>Contraseña</label>
                    <input type="password" name="password" class="input-with-icon" style="width: 100%; padding: 10px; border-radius: 8px; border: 1px solid var(--border);" required>
                </div>
                <button type="submit" class="btn btn-primary">Agregar Usuario</button>
            </form>
        </div>
        
        <div>
            <h4>Usuarios Registrados</h4>
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
                                <td><?php echo htmlspecialchars($user['username']); ?></td>
                                <td>
                                    <form method="POST" action="index.php?page=users" onsubmit="return confirm('¿Seguro que deseas eliminar este usuario?');" style="display:inline;">
                                        <input type="hidden" name="action" value="delete_user">
                                        <input type="hidden" name="user_id" value="<?php echo $user['id']; ?>">
                                        <button type="submit" class="btn btn-sm" style="background: #fee2e2; color: #b91c1c; padding: 5px 10px; border: none; border-radius: 4px; cursor: pointer;">
                                            <i class="fas fa-trash"></i>
                                        </button>
                                    </form>
                                </td>
                            </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
