import React from "react";

// mui
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

// theme
import ThemeBuilder from "../themes/theme-builder";

export default function NotFound() {
  return (
    <ThemeProvider theme={ThemeBuilder()}>
      <CssBaseline />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        height="100vh"
      >
        <Typography variant="h1">🪐</Typography>
        <Typography variant="h4" marginBottom={2}>
          You&apos;ve ventured into the unknown.
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          href="/"
        >
          Back to Rainbow Eats
        </Button>
      </Box>
    </ThemeProvider>
  );
}
