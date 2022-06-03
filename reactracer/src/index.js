import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ConnectionWrapper from "./Components/ConnectionWrapper/ConnectionWrapper";
import {
  socket,
  connection,
  SocketContext,
} from "./SocketContext/SocketContext";
import Layout from "./Components/Layout/Layout";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SocketContext.Provider value={{ socket, connection }}>
      <Layout>
        <ConnectionWrapper />
      </Layout>
    </SocketContext.Provider>
  </React.StrictMode>
);
