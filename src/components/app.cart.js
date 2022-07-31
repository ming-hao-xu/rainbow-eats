import React from "react";

// mui
import Menu from "@mui/material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";

// i18n
import { useTranslation } from "react-i18next";

export default function Cart() {
const {t} = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderMenu = (
    <Menu
      id="menu-lang"
      keepMounted
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      transformOrigin={{ vertical: "top", horizontal: "center" }}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      autoFocus={true}
    >
      <Typography variant="h6" sx={{ m: 2 }}>
        {t("app.cart.empty")}
      </Typography>
    </Menu>
  );

  return (
    <>
      <Fab
        aria-label="shooping cart"
        variant="extended"
        color="secondary"
        disableRipple
        sx={{ mx: "1rem" }}
        onClick={handleClick}
      >
        <ShoppingCartIcon sx={{ mr: "0.5rem" }} />
        {t("app.nav-bar.cart")}
      </Fab>
        {renderMenu}
    </>
  );
}
