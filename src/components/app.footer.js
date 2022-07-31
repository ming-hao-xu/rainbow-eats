import React from "react";

// mui
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";

// i18n
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <Divider />
      <div className="footer">
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
      </div>
    </>
  );
}
