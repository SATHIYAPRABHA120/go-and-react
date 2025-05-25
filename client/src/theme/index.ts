import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

// Optional: Chakra config like color mode
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// Optional: Add custom styles
const customTheme = extendTheme({
  config,
  colors: {
    brand: {
      50: "#e3f9f5",
      100: "#c1e9dd",
      500: "#00b894", // your brand color
    },
  },
});

export default customTheme;
