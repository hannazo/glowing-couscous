const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Event handler for the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    window.deferredPrompt = event;
    butInstall.style.visibility = 'visible';
});

// Click event handler for the `butInstall` element
butInstall.addEventListener('click', async () => {
    if (window.deferredPrompt) {
        window.deferredPrompt.prompt();
        // butInstall.setAttribute('disabled', true);
        butInstall.disabled = true;
        butInstall.textContent = 'Installed';
    }
});

// Handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});