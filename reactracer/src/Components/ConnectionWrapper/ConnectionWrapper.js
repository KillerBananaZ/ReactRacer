import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../../SocketContext/SocketContext";
import { CircularProgress, Container, Typography } from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";
import configuration from "../../Configuration/configuration";
import MainScreen from "../../Containers/MainScreen";
import { failureStyle, iconStyle, loadingStyle } from "./styles";

const ConnectionWrapper = () => {
  let { socket, connection } = useContext(SocketContext);

  const [connectionState, setConnectionState] = useState({
    connected: false,
    loading: true,
  });

  const isLoading = connectionState.loading;
  const isFailedConnection =
    connectionState.loading === false && connectionState.connected === false;

  const isSuccessfulConnection =
    connectionState.loading === false && connectionState.connected === true;

  const renderLoadingComponent = () => {
    return (
      <div style={loadingStyle}>
        <CircularProgress />
        <Typography>Loading, please wait</Typography>
      </div>
    );
  };
  const renderFailureComponent = () => {
    return (
      <div style={failureStyle}>
        <WarningIcon sx={iconStyle} />
        <Typography>
          Check relay socket, Racer server, and refresh the page
        </Typography>
      </div>
    );
  };

  useEffect(() => {
    const connectToSocket = async () => {
      const opened = await connection(socket);
      if (!opened) {
        console.log("Check relay socket and refresh the page");
        setConnectionState({ connected: false, loading: false });
        return;
      }
      setConnectionState({ ...connectionState, loading: false });
      socket.send(
        "open " + configuration.remoteHost + " " + configuration.remotePort
      );
      socket.onmessage = (event) => {
        if (event.data === "connected") {
          setConnectionState({ connected: true, loading: false });
        }
      };
    };
    connectToSocket();
  }, [socket, socket.readyState]);

  return (
    <Container>
      {isLoading && renderLoadingComponent()}
      {isFailedConnection && renderFailureComponent()}
      {isSuccessfulConnection && <MainScreen />}
    </Container>
  );
};

export default ConnectionWrapper;
