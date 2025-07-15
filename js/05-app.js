document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        console.log('Es visible');
    } else {
        console.log('No es visible');
    }
})