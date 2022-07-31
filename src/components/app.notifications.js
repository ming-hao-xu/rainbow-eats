import React from "react";

// mui
import Menu from "@mui/material/Menu";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { alpha } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export default function Notifications() {
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
      <Typography variant="h6" sx={{ m: 1 }}>
        Get a first look at Rainbow Eats 🚀
      </Typography>
      <Typography variant="subtitle2" sx={{ m: 2 }}>
        Why not order some food from food trucks? No queue any more! 🚚
      </Typography>
    </Menu>
  );

  return (
    <>
      <IconButton
        disableRipple
        size="large"
        aria-label="notifications"
        sx={{
          mr: "1rem",
          "&:hover": {
            backgroundColor: alpha("#fff", 0.25),
          },
        }}
        onClick={handleClick}
      >
        <Badge badgeContent={1} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      {renderMenu}
    </>
  );
}
