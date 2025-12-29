// Service Worker for PingPongChat Push Notifications

self.addEventListener('install', (event) => {
    console.log('Service Worker installing...');
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker activating...');
    event.waitUntil(clients.claim());
});

self.addEventListener('push', (event) => {
    console.log('Push notification received');
    
    let data = {
        title: 'PingPong',
        body: 'Neue Nachricht',
        icon: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Ctext y="75" font-size="75"%3E📬%3C/text%3E%3C/svg%3E'
    };
    
    if (event.data) {
        try {
            data = event.data.json();
        } catch (e) {
            data.body = event.data.text();
        }
    }
    
    event.waitUntil(
        self.registration.showNotification(data.title, {
            body: data.body,
            icon: data.icon,
            badge: data.icon,
            vibrate: [200, 100, 200],
            tag: 'pingpong-message'
        })
    );
});

self.addEventListener('notificationclick', (event) => {
    console.log('Notification clicked');
    event.notification.close();
    
    // Use origin to work with any deployment path
    event.waitUntil(
        clients.openWindow(self.location.origin)
    );
});
