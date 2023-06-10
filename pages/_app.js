import "@/styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// Barlow
import "@fontsource/barlow/100.css";
import "@fontsource/barlow/200.css";
import "@fontsource/barlow/300.css";
import "@fontsource/barlow/400.css";
import "@fontsource/barlow/500.css";
import "@fontsource/barlow/600.css";
import "@fontsource/barlow/700.css";
import "@fontsource/barlow/800.css";
import "@fontsource/barlow/900.css";

const theme = extendTheme({
  fonts: {
    primary: "Barlow, sans-serif",
  },
  colors: {
    primary: "#161616",
    secondary: "#f2f2f2",
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
