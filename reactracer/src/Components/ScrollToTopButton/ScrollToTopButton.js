import React from "react";
import { Button, Tooltip } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { button } from "./styles";

const ScrollToTopButton = ({ onClick }) => {
  return (
    <Tooltip title="Scroll to top" placement="top">
      <Button sx={button} onClick={onClick}>
        <KeyboardArrowUpIcon />
      </Button>
    </Tooltip>
  );
};

export default ScrollToTopButton;
