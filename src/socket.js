

export default (io) => {
    io.on('connection', (socket) => {
        console.log("new Socket User", socket.id)


    });
}
