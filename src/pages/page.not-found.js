import React from "react";

// mui
import { ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

// theme
import ThemeBuilder from "../themes/theme-builder";

// i18n
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={ThemeBuilder()}>
      <CssBaseline />
      <div className="center-div">
        <Typography variant="h1">🪐</Typography>
        <Typography variant="h4" marginBottom={2}>
          {t("page.not-found.description")}
        </Typography>
        <Button variant="outlined" color="primary" size="large" href="/">
          {t("page.not-found.button")}
        </Button>
      </div>
    </ThemeProvider>
  );
}
