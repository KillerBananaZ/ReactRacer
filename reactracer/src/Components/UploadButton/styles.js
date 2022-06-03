import { appColors } from "../appStyles";

export const noDisplay = {
  display: "none",
};
export const button = {
  borderWidth: 2,
  borderColor: appColors.darker,
  borderStyle: "solid",
  backgroundColor: appColors.secondary,
  color: appColors.white,
  fontSize: 16,
  fontWeight: 600,
  padding: "12px 16px",
  "&:hover": {
    backgroundColor: appColors.dark,
  },
};
