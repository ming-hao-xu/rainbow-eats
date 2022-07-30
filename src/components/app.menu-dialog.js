import React from "react";
import PropTypes from "prop-types";

// mui
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

// i18n
import { useTranslation } from "react-i18next";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          disableRipple
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
            "&:hover": {
              backgroundColor: alpha("#fff", 0.25),
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

const MenuItem = ({ name, description, image }) => {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Grid item xs>
      <Typography variant="body1">{name}</Typography>
      <Typography gutterBottom variant="subtitle2">
        {description}
      </Typography>

      <img alt={name} src={image} width="100%" />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Fab onClick={handleClick} aria-label="add" size="small" disableRipple>
          <AddIcon />
        </Fab>
      </div>

      <Snackbar
        open={open}
        autoHideDuration={4000}
        TransitionComponent={Slide}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          elevation={6}
          severity="success"
          action={
            <Button color="inherit" size="small" onClick={handleClose}>
              {t("app.menu-dialog.undo")}
            </Button>
          }
          sx={{ width: "100%" }}
        >
          <AlertTitle>{t("app.menu-dialog.addcart")}</AlertTitle>
          {name} {description}
        </Alert>
      </Snackbar>
    </Grid>
  );
};

export default function MenuDialog({available, name}) {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        disableElevation
        disableRipple
        sx={{ mr: 1, ml: 1, mb: 0.5 }}
        endIcon={<RestaurantMenuIcon />}
        onClick={handleClick}
        disabled={!available}
      >
        {t("app.info-card.menu")}
      </Button>
      <BootstrapDialog
        aria-labelledby="menu-dialog-title"
        onClose={handleClose}
        open={open}
      >
        <BootstrapDialogTitle id="menu-dialog-title" onClose={handleClose}>
          {t("app.menu-dialog.menu")} of {name} 🚚
        </BootstrapDialogTitle>

        <DialogContent dividers>
          <Grid container spacing={2}>
            <MenuItem
              name={t("app.menu-dialog.dummy-name1")}
              description={t("app.menu-dialog.dummy-description1")}
              image="./images/menu/gyudon-original.png"
            />
            <MenuItem
              name={t("app.menu-dialog.dummy-name2")}
              description={t("app.menu-dialog.dummy-description2")}
              image="./images/menu/gyudon-chesse.png"
            />
            <MenuItem
              name={t("app.menu-dialog.dummy-name3")}
              description={t("app.menu-dialog.dummy-description3")}
              image="./images/menu/gyudon-kimchi.png"
            />
          </Grid>
        </DialogContent>

        <DialogActions>
          <Button
            variant="contained"
            color="secondary"
            disableElevation
            disableRipple
            onClick={handleClose}
            endIcon={<ShoppingCartCheckoutIcon />}
          >
            {t("app.menu-dialog.checkout")}
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

MenuDialog.propTypes = {
  available: PropTypes.bool.isRequired,
  name: PropTypes.string,
};