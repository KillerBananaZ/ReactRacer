import express from "express";
import net from "net";
import * as ws from "ws";
import * as http from "http";

let app = express();

const server = http.createServer(app);
const port = 4200;
server.listen(port);

const wss = new ws.WebSocketServer({ server });

console.log("Relay server started on localhost, port", port);

wss.on("connection", (ws) => {
  let connected = false;
  let host = undefined;

  ws.on("message", (buffer) => {
    let convertedMessage = buffer.toString();

    if (!connected && convertedMessage.substring(0, 4) == "open") {
      let options = convertedMessage.split(" ");
      console.log("Trying %s at port %s...", options[1], options[2]);

      host = net.connect(options[2], options[1], () => {
        connected = true;
        ws.send("connected");
      });
      host.on("data", (data) => {
        console.log("Got data from %s, sending to client.", options[1]);
        ws.send(data.toString());
      });
      host.on("end", () => {
        console.log("Host %s terminated connection.", options[1]);
        ws.close();
      });
    } else {
      console.log("Got data from client, sending to host.");
      host.write(convertedMessage);
    }
  });
});
