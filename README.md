# 🖼️ OpenCV.js - Operaciones Aritméticas en Imágenes

Aplicación web interactiva que implementa operaciones aritméticas en imágenes usando **OpenCV.js**.

Basado en el tutorial oficial: [OpenCV.js Image Arithmetics](https://docs.opencv.org/3.4/dd/d4d/tutorial_js_image_arithmetics.html)

## 📋 Descripción

Esta aplicación web permite realizar operaciones aritméticas y bitwise entre dos imágenes usando la biblioteca OpenCV.js. Es una implementación práctica de los conceptos del tutorial de OpenCV sobre aritmética de imágenes.

## ✨ Características

- **Cargar dos imágenes** desde el ordenador
- **Operaciones implementadas:**
  - ➕ **Suma** (cv.add): Combina los valores de píxeles de ambas imágenes
  - ➖ **Resta** (cv.subtract): Resta los valores de píxeles de la segunda imagen de la primera
  - 🔗 **Bitwise AND**: Operación AND bit a bit entre las imágenes
  - 🔀 **Bitwise OR**: Operación OR bit a bit entre las imágenes
  - ⚡ **Bitwise XOR**: Operación XOR bit a bit entre las imágenes
  - 🔄 **Bitwise NOT**: Invierte los píxeles de la Imagen 1
  - 🎨 **Blend**: Mezcla ambas imágenes con transparencia (alpha=0.5)
- **Visualización en tiempo real** de los resultados
- **Redimensionamiento automático** para asegurar que ambas imágenes tengan el mismo tamaño
- **Interfaz responsive** y moderna

## 🚀 Cómo usar

### Opción 1: Usar online (GitHub Pages)
1. Visita: `https://auz14.github.io/opencv-image-operations/` (una vez publicado)

### Opción 2: Ejecutar localmente
1. Clona el repositorio:
```bash
git clone https://github.com/auz14/opencv-image-operations.git
cd opencv-image-operations
```

2. Abre `index.html` en tu navegador web

**Nota:** Es recomendable usar un servidor local para evitar problemas de CORS:
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (npx)
npx serve

# Luego abre http://localhost:8000 en tu navegador
```

### Pasos para usar la aplicación:
1. **Espera** a que OpenCV.js se cargue (verás mensaje de confirmación)
2. **Carga la Imagen 1** usando el botón "Seleccionar archivo"
3. **Carga la Imagen 2** usando el botón correspondiente
4. **Haz clic** en cualquier operación para ver el resultado
5. **Experimenta** con diferentes imágenes y operaciones

## 🛠️ Tecnologías utilizadas

- **HTML5** - Estructura de la aplicación
- **CSS3** - Estilos y diseño responsive
- **JavaScript (ES6)** - Lógica de la aplicación
- **OpenCV.js 3.4.0** - Biblioteca de visión por computador

## 📁 Estructura del proyecto

```
opencv-image-operations/
│
├── index.html          # Página principal
├── style.css           # Estilos CSS
├── script.js           # Lógica JavaScript y funciones OpenCV
└── README.md           # Este archivo
```

## 🎓 Conceptos de OpenCV implementados

### 1. cv.add()
Suma dos imágenes píxel por píxel. Los valores se saturan en 255.

### 2. cv.subtract()
Resta la segunda imagen de la primera. Los valores negativos se saturan en 0.

### 3. Operaciones Bitwise
- **AND**: Mantiene solo los píxeles que están activos en ambas imágenes
- **OR**: Combina los píxeles activos de ambas imágenes
- **XOR**: Muestra diferencias entre las imágenes
- **NOT**: Invierte todos los bits (crea un negativo)

### 4. cv.addWeighted()
Mezcla dos imágenes con diferentes pesos (alpha blending).

## 📝 Notas técnicas

- Las imágenes se redimensionan automáticamente para coincidir en tamaño
- OpenCV.js se carga desde el CDN oficial de OpenCV
- La memoria se gestiona correctamente llamando a `.delete()` en los objetos Mat
- Compatible con todos los navegadores modernos (Chrome, Firefox, Safari, Edge)

## 🎯 Objetivos de aprendizaje

Este proyecto fue creado como parte de una tarea académica para:
- Entender las operaciones básicas de procesamiento de imágenes
- Aprender a usar OpenCV.js en aplicaciones web
- Implementar conceptos del tutorial oficial de OpenCV
- Practicar desarrollo web con manipulación de canvas

## 👤 Autor

**Álvaro Andújar**
- GitHub: [@auz14](https://github.com/auz14)
- Proyecto académico - UNIT 25: Applied Machine Learning

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 🔗 Referencias

- [OpenCV.js Official Documentation](https://docs.opencv.org/3.4/d5/d10/tutorial_js_root.html)
- [Tutorial: Image Arithmetics](https://docs.opencv.org/3.4/dd/d4d/tutorial_js_image_arithmetics.html)
- [OpenCV.js GitHub Repository](https://github.com/opencv/opencv)

## 🐛 Problemas conocidos

Si encuentras algún problema, por favor abre un issue en el repositorio.

## ✅ Mejoras futuras

- [ ] Añadir control de alpha en tiempo real para blending
- [ ] Implementar histogramas
- [ ] Añadir más operaciones (filtros, detección de bordes)
- [ ] Permitir guardar la imagen resultante
- [ ] Soporte para video en tiempo real desde webcam

---

**¡Disfruta experimentando con operaciones de imágenes!** 🚀
