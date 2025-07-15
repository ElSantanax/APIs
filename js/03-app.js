window.addEventListener('online', actualizarEstado);
window.addEventListener('offline', actualizarEstado);

function actualizarEstado() {
    if (navigator.onLine) {
        console.log('Si tienes conexión a internet');
    } else {
        console.log('Sin conexión a internet');
    }
}