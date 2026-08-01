import os, glob, re

app_files = glob.glob('js/app*.js')
for f in app_files:
    with open(f, 'r') as file:
        content = file.read()
    
    # Check if already refactored
    if 'useLinks' in content:
        continue
        
    # Add import
    content = content.replace("import { createApp } from 'vue';", "import { createApp } from 'vue';\nimport { useLinks } from './composables/useLinks.js';")
    
    # Add setup
    content = content.replace("const app = createApp({", "const app = createApp({\n    setup() {\n        const { links } = useLinks();\n        return { links };\n    },")
    
    # Replace wa.link
    content = content.replace('href="https://wa.link/42dexe"', ':href="links.whatsapp"')
    
    with open(f, 'w') as file:
        file.write(content)

print("Refactored app*.js files")
