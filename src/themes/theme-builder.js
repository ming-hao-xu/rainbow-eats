import React from "react";

// mui
import { createTheme } from "@mui/material/styles";
// import useMediaQuery from "@mui/material/useMediaQuery";
import { red, orange } from "@mui/material/colors";

export default function ThemeBuilder() {
  // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: "dark",
          primary: {
            main: red[800],
          },
          secondary: {
            main: orange[800],
            contrastText: "#fff",
          },
        },
      }),
    []
  );
  return theme;
}
