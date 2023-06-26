const net = require('net');

const server = net.createServer((socket) => {
    console.log('Client connected.');

    socket.on('data', (data) => {
        // Process the raw byte package received from the client
        console.log('Received data:', data);
    });

    socket.on('end', () => {
        console.log('Client disconnected.');
    });
});

server.listen(3000, () => {
    console.log('TCP server started on port 3000.');
});