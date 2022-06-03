import React from "react";
import { Button, Input } from "@mui/material";
import { button, noDisplay } from "./styles";

const UploadButton = ({ onChangeFile, text }) => {
  return (
    <label htmlFor="upload">
      <Input type="file" id="upload" onChange={onChangeFile} sx={noDisplay} />

      <Button component="span" sx = {button}>{text}</Button>
    </label>
  );
};

export default UploadButton;
