const notificacionesBtn = document.querySelector('#notificar');

notificacionesBtn.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then(resultado => {
            console.log(`El resuldado es`, resultado);
        })
})

const verNotificacion = document.querySelector('#verNotificacion');
verNotificacion.addEventListener('click', () => {
    if (Notification.permission === 'granted') {
        const notificación = new Notification('Esta es la nueva notificación', {
            icon: '/img/ccj.png',
            body: 'Aprendiendo a programar'
        })

        notificación.onclick = function () {
            window.open('https://github.com/ElSantanax')
        }
    }
})