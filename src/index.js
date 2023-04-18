import app from "./app.js";
import { Server as WebsocketServer } from "socket.io";
import http from "http";
import Sockets from "./socket.js";

import { connectDB } from "./db.js";

connectDB();

const server = new http.createServer(app);
const httpServer = server.listen(app.get("port"));
const io = new WebsocketServer(httpServer);

Sockets(io);

console.log(`<-- server on port ${app.get("port")} -->`);
