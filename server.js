import path from "path";
import * as uuid from "uuid";
import express from "express";
import * as dotenv from "dotenv";
import url, { URL } from "url";
import { Server } from "socket.io";
import { createServer } from "http";
import { ExpressPeerServer } from "peer";

dotenv.config();

const PORT = process.env.PORT || 8000;
const __filename = new URL("", import.meta.url).pathname;
const __dirname = new URL(".", import.meta.url).pathname;

const app = express();
const server = createServer(app);
const peerServer = ExpressPeerServer(server, {
  debug: true,
});
const io = new Server(server);

app.use("public", express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.use("/peerjs", peerServer);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/special", (req, res) => {
  res.redirect(`/join/special`);
});

app.get("/join", (req, res) => {
  res.redirect(`/join/${uuid.v4()}`);
});

app.get("/join/:id", (req, res) => {
  res.render("room", {
    roomID: req.params.id,
    port: PORT,
  });
});

server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

io.on("connection", (socket) => {
  socket.on("join-room", (roomID, id) => {
    console.log(roomID, id);
    socket.join(roomID);
    socket.to(roomID).emit("user-connected", id);
    socket.on("disconnect", () => {
      socket.to(roomID).emit("user-disconnected", id);
      console.log("disconnect");
    });
  });
});
