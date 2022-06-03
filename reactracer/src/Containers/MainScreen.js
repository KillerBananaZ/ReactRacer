import React, { useContext, useEffect, useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { SocketContext } from "../SocketContext/SocketContext";
import UploadButton from "../Components/UploadButton/UploadButton";
import {
  button,
  callStackPadding,
  container,
  panelMargin,
  sendPanel,
  textField,
  uploadPanelPadding,
} from "./styles";
import ScrollToTopButton from "../Components/ScrollToTopButton/ScrollToTopButton";

const DEFAULT_MESSAGES_STATE = [{ racerCall: "", racerAnswer: "" }];

const MainScreen = () => {
  const [racerCall, setRacerCall] = useState("");

  const [racerMessages, setRacerMessages] = useState(DEFAULT_MESSAGES_STATE);

  const [fileContent, setFileContent] = useState([""]);

  let { socket } = useContext(SocketContext);

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    scrolled > 300 ? setVisible(true) : setVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", toggleVisible);

  const clearScreen = () => {
    setRacerMessages(DEFAULT_MESSAGES_STATE);
  };

  const sendRacerCommandFromState = () => {
    let command = `${racerCall}\r\n`;
    if (racerCall !== "") socket.send(command);

    socket.onmessage = (event) => {
      setRacerMessages([
        ...racerMessages,
        { racerCall: racerCall, racerAnswer: event.data },
      ]);
    };
  };

  const sendRacerCommandFromParam = (command) => {
    const sentCommand = `${command}\r\n`;
    socket.send(sentCommand);

    socket.onmessage = (event) => {
      let answer = event.data;
      answer = answer.replace(/(\r\n|\n|\r)/gm, "");
      if (!answer.match(/:ok \d+ ""/)) {
        setRacerMessages((previousState) => [
          ...previousState,
          { racerCall: sentCommand, racerAnswer: answer },
        ]);
      }
    };
  };

  const readFile = async (file) => {
    let result = await new Promise((resolve) => {
      let reader = new FileReader();

      reader.onload = () => resolve(reader.result);

      reader.readAsText(file);
    });

    return result;
  };

  const onChangeFile = async (event) => {
    event.preventDefault();
    setRacerMessages([""]);
    const file = await readFile(event.target.files[0]);

    const lines = file
      .split("\r\n")
      .filter((line) => line.replace(/\s/g, "").length !== 0);

    setFileContent(lines);
  };

  const timer = (ms) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    async function load() {
      for (let i = 1; i < fileContent.length; i++) {
        sendRacerCommandFromParam(fileContent[i]);
        await timer(1);
      }
    }

    load();
  }, [fileContent]);

  return (
    <Grid container sx={container}>
      <Grid item xs={12}>
        <Typography variant="h5">Welcome to ReactRacer</Typography>
        <Typography>
          React Racer allows the user to connect to a RacerPRO server, load
          knowledge bases and query ontologies
        </Typography>
      </Grid>

      <Grid item xs={3} style={sendPanel}>
        <TextField
          label="Racer command"
          variant="outlined"
          sx={textField}
          onChange={(event) => setRacerCall(event.target.value)}
        />
        <Button sx={button} onClick={sendRacerCommandFromState}>
          Send racer command
        </Button>
      </Grid>
      <Grid item xs={3}>
        <div style={uploadPanelPadding}>
          <UploadButton onChangeFile={onChangeFile} text="Upload .racer file" />
        </div>
        <div style={panelMargin}>
          {racerMessages.length > 1 && (
            <Button sx={button} onClick={clearScreen}>
              Clear screen
            </Button>
          )}
        </div>
      </Grid>

      <Grid item xs={12} style={callStackPadding}>
        <Typography>Racer call stack:</Typography>
        {racerMessages.map(
          (message, index) =>
            message.racerCall !== "" &&
            message.racerAnswer !== "" && (
              <Typography
                key={index}
                style={callStackPadding}
              >{`${message?.racerCall} -> ${message?.racerAnswer}`}</Typography>
            )
        )}
      </Grid>

      {visible && <ScrollToTopButton onClick={scrollToTop} />}
    </Grid>
  );
};

export default MainScreen;
