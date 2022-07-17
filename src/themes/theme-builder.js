import React from "react";

// mui
import { createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { red, orange } from "@mui/material/colors";

export default function ThemeBuilder() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
          primary: {
            main: red[700],
          },
          secondary: {
            main: orange[800],
            contrastText: "#fff",
          },
        },
      }),
    [prefersDarkMode]
  );
  return theme;
}
