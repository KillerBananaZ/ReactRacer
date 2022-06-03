import { createContext } from "react";
import configuration from "../Configuration/configuration";

export const socket = new WebSocket(configuration.relayUrl);

export const connection = async (socket, timeout = 100000) => {
    const isOpened = () => socket.readyState === WebSocket.OPEN;

    if (socket.readyState !== WebSocket.CONNECTING) return isOpened();
    else {
      const sleep = 100;
      const ttl = timeout / sleep;

      let loop = 0;
      while (socket.readyState === WebSocket.CONNECTING && loop < ttl) {
        await new Promise((resolve) => setTimeout(resolve, sleep));
        loop++;
      }
      return isOpened();
    }
  };

export const SocketContext = createContext();
