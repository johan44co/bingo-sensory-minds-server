const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {});

io.on("connection", (socket) => {
    socket.on('bingo', function (data) {
        data.time = new Date().getTime()
        io.emit('bingo', data)
    });
});

httpServer.listen(7274);