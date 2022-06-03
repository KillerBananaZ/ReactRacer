import { appColors } from "../appStyles";

export const container = {
  height: "100vh",
  display: "flex",
};
export const sideMenu = {
  backgroundColor: appColors.dark,
  color: appColors.light,
  borderRight: 5,
  borderColor: "black",
  height: "100%",
  flexDirection: "column",
  display: "flex",
  justifyContent: "space-between",
};
export const title = {
  fontSize: 28,
  padding: 20,
  display: "flex",
  justifyContent: "center",
  color: appColors.secondary,
  fontWeight: 700
};
export const menuItem = {
  paddingTop: 2,
  paddingBottom: 2,
  "&:hover": {
    backgroundColor: appColors.dark,
  },
  color: appColors.light
};
export const menuItemIconMargin = {
  marginRight: 2,
};
export const titleIcon = {
  fontSize: 36,
  ...menuItemIconMargin,
};
export const flex = {
  flex: 1,
};
export const content = {
  backgroundColor: appColors.light,
  borderColor: appColors.dark,
  borderWidth: 15,
  borderStyle: 'solid'
};
