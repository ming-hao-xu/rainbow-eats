import React from "react";

// mui
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// theme
import ThemeBuilder from "../themes/theme-builder";

export default function SimpleBackdrop() {
  const [open] = React.useState(true);

  return (
    <ThemeProvider theme={ThemeBuilder()}>
      <CssBaseline />
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
    </ThemeProvider>
  );
}
