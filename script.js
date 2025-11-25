// Variables globales
let img1Loaded = false;
let img2Loaded = false;
let opencvReady = false;

// Función que se ejecuta cuando OpenCV.js está listo
function onOpenCvReady() {
    opencvReady = true;
    showStatus('✅ OpenCV.js cargado correctamente', 'success');
    console.log('OpenCV.js is ready!');
}

// Mostrar mensajes de estado
function showStatus(message, type = 'info') {
    const status = document.getElementById('status');
    status.textContent = message;
    status.className = `status ${type}`;
}

// Cargar imagen 1
document.getElementById('fileInput1').addEventListener('change', function(e) {
    let imgElement = document.createElement('img');
    imgElement.src = URL.createObjectURL(e.target.files[0]);
    imgElement.onload = function() {
        let canvas = document.getElementById('canvasInput1');
        let ctx = canvas.getContext('2d');
        canvas.width = imgElement.width;
        canvas.height = imgElement.height;
        ctx.drawImage(imgElement, 0, 0);
        img1Loaded = true;
        showStatus('✅ Imagen 1 cargada', 'success');
    };
});

// Cargar imagen 2
document.getElementById('fileInput2').addEventListener('change', function(e) {
    let imgElement = document.createElement('img');
    imgElement.src = URL.createObjectURL(e.target.files[0]);
    imgElement.onload = function() {
        let canvas = document.getElementById('canvasInput2');
        let ctx = canvas.getContext('2d');
        canvas.width = imgElement.width;
        canvas.height = imgElement.height;
        ctx.drawImage(imgElement, 0, 0);
        img2Loaded = true;
        showStatus('✅ Imagen 2 cargada', 'success');
    };
});

// Verificar que OpenCV y las imágenes están listas
function checkReady(needsBothImages = true) {
    if (!opencvReady) {
        showStatus('❌ Error: OpenCV.js aún no está cargado. Espera unos segundos.', 'error');
        return false;
    }
    if (needsBothImages && (!img1Loaded || !img2Loaded)) {
        showStatus('❌ Error: Por favor carga ambas imágenes primero.', 'error');
        return false;
    }
    if (!needsBothImages && !img1Loaded) {
        showStatus('❌ Error: Por favor carga al menos la Imagen 1.', 'error');
        return false;
    }
    return true;
}

// Redimensionar imagen 2 para que coincida con imagen 1
function resizeToMatch(src1, src2) {
    let dst = new cv.Mat();
    let dsize = new cv.Size(src1.cols, src1.rows);
    cv.resize(src2, dst, dsize, 0, 0, cv.INTER_AREA);
    return dst;
}

// Operación: Sumar imágenes
function addImages() {
    if (!checkReady()) return;
    
    try {
        let src1 = cv.imread('canvasInput1');
        let src2 = cv.imread('canvasInput2');
        
        // Redimensionar src2 si es necesario
        let src2Resized = resizeToMatch(src1, src2);
        
        let dst = new cv.Mat();
        let mask = new cv.Mat();
        let dtype = -1;
        
        cv.add(src1, src2Resized, dst, mask, dtype);
        cv.imshow('canvasOutput', dst);
        
        showStatus('✅ Operación: SUMA completada (cv.add)', 'success');
        
        // Limpiar memoria
        src1.delete();
        src2.delete();
        src2Resized.delete();
        dst.delete();
        mask.delete();
    } catch (e) {
        showStatus('❌ Error: ' + e.message, 'error');
    }
}

// Operación: Restar imágenes
function subtractImages() {
    if (!checkReady()) return;
    
    try {
        let src1 = cv.imread('canvasInput1');
        let src2 = cv.imread('canvasInput2');
        
        let src2Resized = resizeToMatch(src1, src2);
        
        let dst = new cv.Mat();
        let mask = new cv.Mat();
        let dtype = -1;
        
        cv.subtract(src1, src2Resized, dst, mask, dtype);
        cv.imshow('canvasOutput', dst);
        
        showStatus('✅ Operación: RESTA completada (cv.subtract)', 'success');
        
        src1.delete();
        src2.delete();
        src2Resized.delete();
        dst.delete();
        mask.delete();
    } catch (e) {
        showStatus('❌ Error: ' + e.message, 'error');
    }
}

// Operación: Bitwise AND
function bitwiseAND() {
    if (!checkReady()) return;
    
    try {
        let src1 = cv.imread('canvasInput1');
        let src2 = cv.imread('canvasInput2');
        
        let src2Resized = resizeToMatch(src1, src2);
        
        let dst = new cv.Mat();
        let mask = new cv.Mat();
        
        cv.bitwise_and(src1, src2Resized, dst, mask);
        cv.imshow('canvasOutput', dst);
        
        showStatus('✅ Operación: BITWISE AND completada', 'success');
        
        src1.delete();
        src2.delete();
        src2Resized.delete();
        dst.delete();
        mask.delete();
    } catch (e) {
        showStatus('❌ Error: ' + e.message, 'error');
    }
}

// Operación: Bitwise OR
function bitwiseOR() {
    if (!checkReady()) return;
    
    try {
        let src1 = cv.imread('canvasInput1');
        let src2 = cv.imread('canvasInput2');
        
        let src2Resized = resizeToMatch(src1, src2);
        
        let dst = new cv.Mat();
        let mask = new cv.Mat();
        
        cv.bitwise_or(src1, src2Resized, dst, mask);
        cv.imshow('canvasOutput', dst);
        
        showStatus('✅ Operación: BITWISE OR completada', 'success');
        
        src1.delete();
        src2.delete();
        src2Resized.delete();
        dst.delete();
        mask.delete();
    } catch (e) {
        showStatus('❌ Error: ' + e.message, 'error');
    }
}

// Operación: Bitwise XOR
function bitwiseXOR() {
    if (!checkReady()) return;
    
    try {
        let src1 = cv.imread('canvasInput1');
        let src2 = cv.imread('canvasInput2');
        
        let src2Resized = resizeToMatch(src1, src2);
        
        let dst = new cv.Mat();
        let mask = new cv.Mat();
        
        cv.bitwise_xor(src1, src2Resized, dst, mask);
        cv.imshow('canvasOutput', dst);
        
        showStatus('✅ Operación: BITWISE XOR completada', 'success');
        
        src1.delete();
        src2.delete();
        src2Resized.delete();
        dst.delete();
        mask.delete();
    } catch (e) {
        showStatus('❌ Error: ' + e.message, 'error');
    }
}

// Operación: Bitwise NOT (solo Imagen 1)
function bitwiseNOT() {
    if (!checkReady(false)) return;
    
    try {
        let src = cv.imread('canvasInput1');
        let dst = new cv.Mat();
        
        cv.bitwise_not(src, dst);
        cv.imshow('canvasOutput', dst);
        
        showStatus('✅ Operación: BITWISE NOT completada (invertir Imagen 1)', 'success');
        
        src.delete();
        dst.delete();
    } catch (e) {
        showStatus('❌ Error: ' + e.message, 'error');
    }
}

// Operación: Blend (Alpha blending)
function blendImages() {
    if (!checkReady()) return;
    
    try {
        let src1 = cv.imread('canvasInput1');
        let src2 = cv.imread('canvasInput2');
        
        let src2Resized = resizeToMatch(src1, src2);
        
        let dst = new cv.Mat();
        let alpha = 0.5;
        let beta = 0.5;
        let gamma = 0;
        let dtype = -1;
        
        cv.addWeighted(src1, alpha, src2Resized, beta, gamma, dst, dtype);
        cv.imshow('canvasOutput', dst);
        
        showStatus('✅ Operación: BLEND completada (50% cada imagen)', 'success');
        
        src1.delete();
        src2.delete();
        src2Resized.delete();
        dst.delete();
    } catch (e) {
        showStatus('❌ Error: ' + e.message, 'error');
    }
}

// Limpiar resultado
function clearResult() {
    let canvas = document.getElementById('canvasOutput');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = 0;
    canvas.height = 0;
    showStatus('🗑️ Resultado limpiado', 'info');
}
