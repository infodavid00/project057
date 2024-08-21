import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "var(--background-color)", 
      },
    },
  },
});

export default theme;
