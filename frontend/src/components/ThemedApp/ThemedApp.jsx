import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import App from "../../App";

function ThemedApp() {
  const mode = useSelector((state) => state.theme.mode);

  const [key, setKey] = useState(0);
  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [mode]);

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
}

export default ThemedApp;
