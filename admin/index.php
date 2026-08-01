<?php
session_start();
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    header('Location: login.php');
    exit;
}

$page = isset($_GET['page']) ? $_GET['page'] : 'dashboard';

include 'includes/header.php';
?>

<div class="admin-container">
    <?php include 'includes/sidebar.php'; ?>
    
    <main class="admin-content">
        <header class="admin-topbar">
            <h2>Panel de Administración</h2>
            <div class="user-info">
                <span>Hola, <?php echo htmlspecialchars($_SESSION['admin_username']); ?></span>
                <a href="logout.php" class="btn btn-sm btn-outline">Salir <i class="fas fa-sign-out-alt"></i></a>
            </div>
        </header>

        <div class="admin-main">
            <?php
            $allowed_pages = ['dashboard', 'blogs', 'blog_edit', 'users', 'services', 'testimonials', 'settings', 'links', 'tarifas', 'seo'];
            if (in_array($page, $allowed_pages)) {
                $page_file = "pages/{$page}.php";
                if(file_exists($page_file)) {
                    include $page_file;
                } else {
                    echo "<p>En construcción.</p>";
                }
            } else {
                echo "<p>Página no encontrada.</p>";
            }
            ?>
        </div>
    </main>
</div>

<?php include 'includes/footer.php'; ?>
