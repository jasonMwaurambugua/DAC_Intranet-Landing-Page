// Initialize Lucide Icons
document.addEventListener('DOMContentLoaded', function() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

// Live Clock functionality
function updateClock() {
    const now = new Date();
    const timeElement = document.getElementById('live-clock');
    if (timeElement) {
        timeElement.textContent = now.toLocaleTimeString('en', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
    }
}

// Run immediately and every 30 seconds
updateClock();
setInterval(updateClock, 30000);