var socket = io();

socket.on('connect', function () {
  console.log('Connectd to a server');

});

socket.on('disconnect', function () {
  console.log('disconnected from the server');
});

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
});
