import { appColors } from "../appStyles";

export const button = {
  position: "fixed",
  bottom: "50px",
  right: "2%",
  minWidth: '15px',
  backgroundColor: appColors.secondary,
  color: appColors.white,
  borderRadius: 25,
  "&:hover":{
      backgroundColor: appColors.dark
  }
};
