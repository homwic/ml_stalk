// script.js

// Mengambil elemen tombol dan status
const startButton = document.getElementById('start-btn');
const stopButton = document.getElementById('stop-btn');
const statusButton = document.getElementById('status-btn');
const serverStatus = document.getElementById('server-status');
const logOutput = document.getElementById('log-output');

// Fungsi untuk memulai server
const startServer = async () => {
    try {
        const response = await fetch('http://localhost:3000/start', { method: 'POST' });
        if (response.ok) {
            serverStatus.textContent = 'Server is starting...';
            logOutput.textContent = 'Server is starting...\n' + logOutput.textContent;
        } else {
            const errorText = await response.text();
            logOutput.textContent = 'Error: ' + errorText + '\n' + logOutput.textContent;
        }
    } catch (error) {
        serverStatus.textContent = 'Error starting server.';
        logOutput.textContent = 'Error: ' + error.message + '\n' + logOutput.textContent;
    }
};

// Fungsi untuk menghentikan server
const stopServer = async () => {
    try {
        const response = await fetch('http://localhost:3000/stop', { method: 'POST' });
        if (response.ok) {
            serverStatus.textContent = 'Server is stopping...';
            logOutput.textContent = 'Server is stopping...\n' + logOutput.textContent;
        } else {
            const errorText = await response.text();
            logOutput.textContent = 'Error: ' + errorText + '\n' + logOutput.textContent;
        }
    } catch (error) {
        serverStatus.textContent = 'Error stopping server.';
        logOutput.textContent = 'Error: ' + error.message + '\n' + logOutput.textContent;
    }
};

// Fungsi untuk memeriksa status server
const checkStatus = async () => {
    try {
        const response = await fetch('http://localhost:3000/status', { method: 'GET' });
        const data = await response.json();
        serverStatus.textContent = data.status;
        logOutput.textContent = 'Status checked: ' + data.status + '\n' + logOutput.textContent;
    } catch (error) {
        serverStatus.textContent = 'Error fetching status.';
        logOutput.textContent = 'Error: ' + error.message + '\n' + logOutput.textContent;
    }
};

// Menambahkan event listeners ke tombol
startButton.addEventListener('click', startServer);
stopButton.addEventListener('click', stopServer);
statusButton.addEventListener('click', checkStatus);
