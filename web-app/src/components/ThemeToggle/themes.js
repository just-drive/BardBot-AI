import dayThemeImage from "../../images/BB_Background_just_bg.png";
import nightThemeImage from "../../images/BB_Background_just_bg_nghttime.png";

export const lightTheme = {
  backgroundImage: `url(${dayThemeImage})`,
  text: "#363537",
  toggleBorder: "#FFF",
  gradient: "linear-gradient(#39598A, #79D7ED)",
};

export const darkTheme = {
  backgroundImage: `url(${nightThemeImage})`,
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  gradient: "linear-gradient(#091236, #1E215D)",
};
