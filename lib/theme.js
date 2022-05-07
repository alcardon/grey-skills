// theme.js

// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
const fonts = {
  html: "Roboto, sans-serif",
  heading: "Kanit, sans-serif",
  body: "Inter, sans-serif",
};
const overrrides = {
  components: { Heading: { color: "White" } },
};

// 3. extend the theme
const theme = extendTheme({ config, fonts, overrrides });

export default theme;
