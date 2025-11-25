# 📦 INSTRUCCIONES - Subir aplicación OpenCV a GitHub

## 🎯 Objetivo
Subir la aplicación web OpenCV.js a tu repositorio de GitHub (usuario: auz14) y compartir el link con el profesor.

---

## 📋 Paso 1: Descargar archivos

Todos los archivos de la aplicación están en la carpeta `/outputs/opencv-app/`:

- `index.html` - Página principal
- `style.css` - Estilos
- `script.js` - Funcionalidad OpenCV
- `README.md` - Documentación
- `.gitignore` - Archivos a ignorar en Git

**Descarga toda la carpeta `opencv-app`** a tu ordenador.

---

## 📋 Paso 2: Crear repositorio en GitHub

### Opción A: Desde GitHub.com (Recomendado para principiantes)

1. Ve a https://github.com/auz14
2. Click en **"Repositories"** → **"New"** (botón verde)
3. Configura el repositorio:
   - **Repository name:** `opencv-image-operations`
   - **Description:** `Aplicación web con OpenCV.js para operaciones aritméticas en imágenes - Tarea UNIT 25`
   - **Visibility:** Public ✓
   - **Add README:** NO (ya tenemos uno)
   - **Add .gitignore:** NO (ya tenemos uno)
4. Click en **"Create repository"**

### Opción B: Desde la línea de comandos

```bash
# Navega a la carpeta donde descargaste opencv-app
cd /ruta/a/opencv-app

# Inicializa Git
git init

# Añade todos los archivos
git add .

# Primer commit
git commit -m "Primera versión: Aplicación OpenCV.js con operaciones aritméticas"

# Conecta con GitHub (reemplaza tu-token con tu token de GitHub)
git remote add origin https://github.com/auz14/opencv-image-operations.git

# Sube los archivos
git branch -M main
git push -u origin main
```

---

## 📋 Paso 3: Subir archivos a GitHub

### Si creaste el repo desde GitHub.com:

#### Método 1: Upload desde web (más fácil)
1. En tu repositorio recién creado, click en **"uploading an existing file"**
2. Arrastra y suelta todos los archivos de la carpeta `opencv-app`
3. Añade mensaje de commit: `"Subida inicial de aplicación OpenCV.js"`
4. Click en **"Commit changes"**

#### Método 2: Desde línea de comandos
```bash
cd /ruta/a/opencv-app

# Clonar el repo vacío
git clone https://github.com/auz14/opencv-image-operations.git
cd opencv-image-operations

# Copiar todos tus archivos aquí
# (copia index.html, style.css, script.js, README.md, .gitignore)

# Añadir y subir
git add .
git commit -m "Subida inicial de aplicación OpenCV.js"
git push origin main
```

---

## 📋 Paso 4: Activar GitHub Pages (opcional pero recomendado)

Esto hace que tu aplicación esté accesible online:

1. En tu repositorio, ve a **"Settings"**
2. En el menú lateral, click en **"Pages"**
3. En **"Source"**, selecciona **"main"** branch
4. Click en **"Save"**
5. Espera 1-2 minutos
6. Tu aplicación estará en: `https://auz14.github.io/opencv-image-operations/`

---

## 📋 Paso 5: Enviar al profesor

### Mensaje de email:

```
Asunto: Tarea 5 - Aplicación OpenCV

Hola [nombre profesor],

He completado la Tarea 5 creando una aplicación web con OpenCV.js.

Repositorio GitHub: https://github.com/auz14/opencv-image-operations

Aplicación en vivo (GitHub Pages): https://auz14.github.io/opencv-image-operations/

La aplicación implementa operaciones aritméticas en imágenes basándose en el tutorial oficial de OpenCV.js:
- Suma de imágenes (cv.add)
- Resta de imágenes (cv.subtract)
- Operaciones bitwise (AND, OR, XOR, NOT)
- Blending con alpha

Toda la documentación está en el README.md del repositorio.

Saludos,
Álvaro
```

---

## ✅ Checklist final

Antes de enviar, verifica que:
- [ ] El repositorio es público
- [ ] Todos los archivos están subidos (index.html, style.css, script.js, README.md)
- [ ] El README.md se ve correctamente en GitHub
- [ ] (Opcional) GitHub Pages está activado y funciona
- [ ] Has enviado el link al profesor

---

## 🆘 Solución de problemas

### "No puedo subir archivos"
- Asegúrate de estar logueado en GitHub con tu cuenta (auz14)
- Si usas la línea de comandos, necesitas un Personal Access Token

### "GitHub Pages no funciona"
- Espera 2-3 minutos después de activarlo
- Verifica que el repositorio sea público
- El archivo debe llamarse exactamente `index.html`

### "La aplicación no carga OpenCV.js"
- Verifica que tengas conexión a internet
- Abre la consola del navegador (F12) para ver errores
- OpenCV.js tarda 2-3 segundos en cargar

---

## 🎉 ¡Listo!

Una vez completados estos pasos, habrás terminado la Tarea 5.

**¡Enhorabuena!** 🚀
