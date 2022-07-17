import React from "react";

// mui
import MenuItem from "@mui/material/MenuItem";
import TranslateIcon from "@mui/icons-material/Translate";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// i18n
import { useTranslation } from "react-i18next";

function codeToLanguage(code) {
  switch (code) {
    case "en":
      return "English (80%)";
    case "ja":
      return "日本語 (100%)";
    case "zh":
      return "简体中文 (80%)";
    case "hi":
      return "हिन्दी (80%)";
    case "id":
      return "Indonesia (80%)";
    default:
      return "English";
  }
}

export default function LangSwitch() {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (lang) => {
    i18n.changeLanguage(lang);
    handleClose();
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      id="lang-menu"
      keepMounted
      getContentAnchorEl={null}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      transformOrigin={{ vertical: "top", horizontal: "center" }}
      open={isMenuOpen}
      onClose={handleClose}
    >
      <MenuItem onClick={() => handleChange("en")}>English (80%)</MenuItem>
      <MenuItem onClick={() => handleChange("ja")}>日本語 (100%)</MenuItem>
      <MenuItem onClick={() => handleChange("zh")}>简体中文 (80%)</MenuItem>
      <MenuItem onClick={() => handleChange("hi")}>हिन्दी (80%)</MenuItem>
      <MenuItem onClick={() => handleChange("id")}>Indonesia (80%)</MenuItem>
      <a
        href="https://github.com/xu-minghao317/rainbow-eats/tree/main/public/locales"
        target="_blank"
        className="responsive-link-no-underline"
        rel="noopener noreferrer"
      >
        <MenuItem onClick={() => handleClose()}>Help Us Translate</MenuItem>
      </a>
    </Menu>
  );

  return (
    <div>
      <Button
        aria-controls="lang-menu"
        aria-haspopup="true"
        size="large"
        onClick={handleClick}
        sx={{
          color: "#fff",
          "&:hover": {
            backgroundColor: "#ce4a4a",
          },
        }}
      >
        <TranslateIcon sx={{ marginRight: "0.5rem" }} />
        {codeToLanguage(i18n.language)}
        <ArrowDropDownIcon />
      </Button>
      {renderMenu}
    </div>
  );
}
