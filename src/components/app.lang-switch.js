import React from "react";

// mui
import MenuItem from "@mui/material/MenuItem";
import LanguageIcon from "@mui/icons-material/Language";
import Menu from "@mui/material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Fab from "@mui/material/Fab";

// i18n
import { useTranslation } from "react-i18next";


export default function LangSwitch() {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);

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

  const languages = [
    { code: "ja", flag: "jp", name: "日本語" },
    { code: "en", flag: "gb", name: "English" },
    { code: "zh", flag: "cn", name: "简体中文" },
    { code: "hi", flag: "in", name: "हिन्दी" },
    { code: "id", flag: "id", name: "Indonesia" },
  ];

  const renderMenu = (
    <Menu
      id="menu-lang"
      keepMounted
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      transformOrigin={{ vertical: "top", horizontal: "center" }}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      MenuListProps={{ onMouseLeave: handleClose }}
      autoFocus={false}
    >
      {languages.map((lang) => (
        <MenuItem
          key={lang.code}
          onClick={() => handleChange(lang.code)}
          disableRipple
          disabled={lang.code === i18n.language}
        >
          <span
            className={`fi fi-${lang.flag}`}
            style={{ marginRight: "1rem" }}
          />
          {lang.name}
        </MenuItem>
      ))}
      <MenuItem onClick={() => handleClose()}>
        <a
          href="https://github.com/xu-minghao317/rainbow-eats/tree/main/public/locales"
          target="_blank"
          className="responsive-link"
          rel="noopener noreferrer"
        >
          Help Us Translate
        </a>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Fab
        aria-controls="lang-menu"
        aria-haspopup="true"
        variant="extended"
        color="secondary"
        onMouseOver={handleClick}
        disableRipple
      >
        <LanguageIcon sx={{ mr: "0.5rem" }} />
        {languages.find((lang) => lang.code === i18n.language).name}
        <ArrowDropDownIcon />
      </Fab>
      {renderMenu}
    </>
  );
}
