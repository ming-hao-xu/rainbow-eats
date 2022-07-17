/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";

// mui
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
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
import Box from "@mui/material/Box";

import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
import MuiAlert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

// i18n
import { useTranslation } from "react-i18next";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

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
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

const Item = ({ name, description, image }) => {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Grid item xs>
      <Typography gutterBottom variant="body1">
        {name} <br />
        {description}
      </Typography>
      <img alt={name} src={image} width="100%" />
      <Box display="flex" justifyContent="center" alignItems="center">
        <Fab aria-label="add" onClick={handleClick} size="small">
          <AddIcon />
        </Fab>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        TransitionComponent={Slide}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          <AlertTitle>{t("app.menu-dialog.addcart")}</AlertTitle>
          {name} {description}
        </Alert>
      </Snackbar>
    </Grid>
  );
};

export default function MenuDialog() {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>
        <RestaurantMenuIcon style={{ marginRight: "5px" }} />
        {t("app.info-card.menu")}
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="menu-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="menu-dialog-title" onClose={handleClose}>
          {t("app.menu-dialog.menu")}
        </BootstrapDialogTitle>

        <DialogContent dividers>
          <Grid container spacing={2}>
            <Item
              name={t("app.menu-dialog.dummy-name1")}
              description={t("app.menu-dialog.dummy-description1")}
              image="./images/menu/gyudon-original.png"
            />
            <Item
              name={t("app.menu-dialog.dummy-name2")}
              description={t("app.menu-dialog.dummy-description2")}
              image="./images/menu/gyudon-chesse.png"
            />
            <Item
              name={t("app.menu-dialog.dummy-name3")}
              description={t("app.menu-dialog.dummy-description3")}
              image="./images/menu/gyudon-kimchi.png"
            />
          </Grid>
        </DialogContent>

        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Check out
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
