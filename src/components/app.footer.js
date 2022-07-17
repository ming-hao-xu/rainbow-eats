import React from "react";

// mui
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";

// i18n
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <Divider />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100px"
      >
        <a
          className="responsive-link"
          href="https://war.ukraine.ua/support-ukraine/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Typography variant="subtitle1" marginRight={1}>
            {t("app.footer.ukraine")}
          </Typography>
        </a>
        <Typography variant="subtitle2" marginRight={1}>
          {t("app.footer.copyright")}
          <IconButton
            href="https://github.com/xu-minghao317/rainbow-eats"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </IconButton>
        </Typography>
      </Box>
    </>
  );
}
