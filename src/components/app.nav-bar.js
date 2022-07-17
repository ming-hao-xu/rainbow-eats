import React from "react";

// mui
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// components
import SideDrawer from "./app.side-drawer";
import LangSwitch from "./app.lang-switch";

// i18n
import { useTranslation } from "react-i18next";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function NavBar() {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      id={menuId}
      keepMounted
      getContentAnchorEl={null}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      transformOrigin={{ vertical: "top", horizontal: "center" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem style={{ width: "8rem" }} onClick={handleMenuClose}>
        {t("app.nav-bar.logout")}
      </MenuItem>
      <MenuItem style={{ width: "8rem" }} onClick={handleMenuClose}>
        {t("app.nav-bar.profile")}
      </MenuItem>
      <MenuItem style={{ width: "8rem" }} onClick={handleMenuClose}>
        {t("app.nav-bar.settings")}
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar
      // color="transparent"
      // sx={{
      //   backdropFilter: "blur(40px)",
      // }}
      >
        <Toolbar>
          <SideDrawer />
          <img alt="logo" src="./logo192.png" width="40" style={{ borderRadius: "10%" }} />
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" }, ml: "1rem" }}
          >
            Rainbow Eats
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder={t("app.nav-bar.search")}
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <LangSwitch />
            <Button
              size="large"
              aria-label="shooping cart"
              sx={{
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#ce4a4a",
                },
              }}
            >
              <ShoppingCartIcon sx={{ marginRight: "0.5rem" }} />
              {t("app.nav-bar.cart")}
            </Button>

            <Button
              size="large"
              aria-label="notifications"
              sx={{
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#ce4a4a",
                },
              }}
            >
              <Badge badgeContent={1} color="secondary">
                <NotificationsIcon />
              </Badge>
            </Button>
            <Button
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              sx={{
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#ce4a4a",
                },
              }}
            >
              <AccountCircle />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
}
