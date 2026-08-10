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
        $json_data = $_POST['tarifas_json'] ?? '';
        
        $decoded = json_decode($json_data, true);
        if (json_last_error() === JSON_ERROR_NONE) {
            file_put_contents($tarifas_file, json_encode($decoded, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
            $tarifas = $decoded; 
            $message = "Tarifas guardadas exitosamente.";
            $message_type = "success";
        } else {
            $message = "Error al guardar las tarifas.";
            $message_type = "error";
        }
    }
}
?>

<div class="card" id="tarifas-app">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <h3>Gestión de Tarifas</h3>
        <button type="button" class="btn btn-outline" @click="addCategory()">
            <i class="fas fa-plus"></i> Nueva Categoría
        </button>
    </div>

    <?php if ($message): ?>
        <div class="alert alert-<?php echo $message_type === 'error' ? 'error' : 'success'; ?>" style="<?php echo $message_type === 'success' ? 'background: #d1fae5; color: #065f46; border: 1px solid #34d399;' : 'background: #fee2e2; color: #991b1b; border: 1px solid #f87171;'; ?>">
            <?php echo htmlspecialchars($message); ?>
        </div>
    <?php endif; ?>

    <div v-if="categories.length === 0" style="padding: 40px; text-align: center; color: var(--text-light); background: var(--bg-light); border-radius: 8px;">
        No hay categorías de tarifas. Haz clic en "Nueva Categoría" para empezar.
    </div>

    <div v-for="(category, catIndex) in categories" :key="catIndex" style="background: var(--bg-light); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 25px;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid var(--border);">
            <div style="display: flex; gap: 15px; flex: 1;">
                <div class="form-group" style="flex: 2; margin-bottom: 0;">
                    <label style="font-size: 0.9rem; margin-bottom: 5px;">Nombre de la Categoría</label>
                    <input type="text" v-model="category.name" placeholder="Ej. Ecografías Generales" style="width: 100%; padding: 10px; border-radius: 6px; border: 1px solid var(--border); font-weight: bold;">
                </div>
                <div class="form-group" style="flex: 1; margin-bottom: 0;">
                    <label style="font-size: 0.9rem; margin-bottom: 5px;">Icono (FontAwesome)</label>
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <i :class="category.icon" style="font-size: 1.2rem; width: 25px; text-align: center; color: var(--secondary);"></i>
                        <input type="text" v-model="category.icon" placeholder="fas fa-stethoscope" style="width: 100%; padding: 10px; border-radius: 6px; border: 1px solid var(--border);">
                    </div>
                </div>
            </div>
            <button type="button" @click="removeCategory(catIndex)" class="btn btn-sm" style="background: #fee2e2; color: #b91c1c; padding: 8px 12px; border: none; border-radius: 4px; cursor: pointer; margin-left: 20px; margin-top: 25px;">
                <i class="fas fa-trash"></i> Eliminar Categoría
            </button>
        </div>

        <div>
            <h5 style="margin-bottom: 10px; color: var(--text-dark);">Exámenes y Precios:</h5>
            <div v-for="(item, itemIndex) in category.items" :key="itemIndex" style="display: flex; gap: 15px; align-items: center; margin-bottom: 10px;">
                <div style="flex: 3;">
                    <input type="text" v-model="item.name" placeholder="Nombre del examen" style="width: 100%; padding: 8px 12px; border-radius: 4px; border: 1px solid var(--border);">
                </div>
                <div style="flex: 1; display: flex; align-items: center; gap: 5px;">
                    <span style="font-weight: bold; color: var(--text-light);">$</span>
                    <input type="number" v-model.number="item.price" placeholder="100000" style="width: 100%; padding: 8px 12px; border-radius: 4px; border: 1px solid var(--border);">
                </div>
                <button type="button" @click="removeItem(catIndex, itemIndex)" style="background: none; border: none; color: #94a3b8; cursor: pointer; font-size: 1.1rem; padding: 5px;" title="Eliminar examen">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <button type="button" @click="addItem(catIndex)" style="background: none; border: 1px dashed var(--secondary); color: var(--secondary); padding: 8px 15px; border-radius: 4px; cursor: pointer; font-size: 0.9rem; margin-top: 5px; width: 100%;">
                <i class="fas fa-plus"></i> Agregar examen a {{ category.name || 'esta categoría' }}
            </button>
        </div>
    </div>

    <form method="POST" action="index.php?page=tarifas" id="tarifasForm">
        <input type="hidden" name="action" value="save_tarifas">
        <input type="hidden" name="tarifas_json" id="tarifas_json">
        
        <button type="button" @click="saveData" class="btn btn-primary" style="font-size: 1.1rem; padding: 12px 30px; position: sticky; bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
            <i class="fas fa-save"></i> Guardar Tarifas
        </button>
    </form>
</div>

<script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
<script>
    const { createApp, ref, onMounted } = Vue;

    createApp({
        setup() {
            // Data from PHP
            const initialData = <?php echo json_encode($tarifas, JSON_UNESCAPED_UNICODE); ?>;
            const categories = ref(initialData || []);

            const addCategory = () => {
                categories.value.push({
                    name: '',
                    icon: 'fas fa-stethoscope',
                    items: []
                });
            };

            const removeCategory = (index) => {
                if(confirm('¿Seguro que deseas eliminar esta categoría completa y todos sus exámenes?')) {
                    categories.value.splice(index, 1);
                }
            };

            const addItem = (catIndex) => {
                categories.value[catIndex].items.push({
                    name: '',
                    price: null
                });
            };

            const removeItem = (catIndex, itemIndex) => {
                categories.value[catIndex].items.splice(itemIndex, 1);
            };

            const saveData = () => {
                const jsonStr = JSON.stringify(categories.value);
                document.getElementById('tarifas_json').value = jsonStr;
                document.getElementById('tarifasForm').submit();
            };

            return {
                categories,
                addCategory,
                removeCategory,
                addItem,
                removeItem,
                saveData
            }
        }
    }).mount('#tarifas-app');
</script>
