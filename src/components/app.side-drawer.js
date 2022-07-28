import React from "react";

// mui
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SupportIcon from "@mui/icons-material/Support";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import IconButton from "@mui/material/IconButton";
import { alpha } from "@mui/material/styles";

// i18n
import { useTranslation } from "react-i18next";

export default function SideDrawer() {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  const listItems = [
    {
      key: "Orders",
      icon: <MenuBookIcon />,
      text: t("app.side-drawer.orders"),
    },
    {
      key: "Favorites",
      icon: <FavoriteIcon />,
      text: t("app.side-drawer.favorites"),
    },
    {
      key: "Wallet",
      icon: <AccountBalanceWalletIcon />,
      text: t("app.side-drawer.wallet"),
    },
    {
      key: "Promotions",
      icon: <LocalOfferIcon />,
      text: t("app.side-drawer.promotions"),
    },
    {
      key: "Help",
      icon: <SupportIcon />,
      text: t("app.side-drawer.help"),
    }
  ];

  const list = () => (
    <Box
      sx={{ width: "19rem" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {listItems.map((item) => (
          <ListItem key={item.key} disablePadding>
            <ListItemButton disableRipple>
              {item.icon}
              <ListItemText primary={item.text} sx={{ ml: "1rem" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {[
          t("app.side-drawer.business-account"),
          t("app.side-drawer.add-truck"),
        ].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton disableRipple>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        bottom="40px"
        left="0"
        right="0"
      >
        <img
          style={{ marginBottom: "20px" }}
          src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
          width="180"
        />
        <img
          style={{ marginBottom: "40px" }}
          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
          width="180"
        />
        <img
          src={"./images/logo/rainboweats-logo-large.png"}
          width="240"
          style={{
            marginBottom: "20px",
            backgroundColor: "white",
            borderRadius: "5px",
          }}
        />
        <Typography variant="h5">{t("app.side-drawer.university")}</Typography>
      </Box>
    </Box>
  );

  return (
    <div>
      <IconButton
        onClick={toggleDrawer(true)}
        disableRipple
        edge="start"
        aria-label="side drawer"
        sx={{
          "&:hover": {
            backgroundColor: alpha("#fff", 0.25),
          },
        }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
}
