import { appColors } from "../Components/appStyles";

export const container = {
  paddingTop: 5,
};

export const button = {
  marginTop: 2,
  borderWidth: 2,
  borderColor: appColors.darker,
  borderStyle: "solid",
  backgroundColor: appColors.secondary,
  color: appColors.white,
  fontSize: 14,
  fontWeight: 600,
  padding: "8px 16px",
  "&:hover": {
    backgroundColor: appColors.dark,
  },
};
export const textField = {
  "& label.Mui-focused": {
    color: appColors.secondary,
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: appColors.secondary,
    },
  },
};

export const sendPanel = {
  paddingTop: 20,
  flexDirection: "column",
  display: "flex",
};

export const callStackPadding = {
  paddingTop: 15,
};
export const panelMargin = {
  marginLeft: 15,
};
export const uploadPanelPadding = {
  ...panelMargin,
  paddingTop: 20,
};
