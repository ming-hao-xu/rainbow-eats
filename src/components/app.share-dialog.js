import React, { useState } from "react";
import PropTypes from "prop-types";
import { RWebShare } from "react-web-share";

// mui
import ShareIcon from "@mui/icons-material/Share";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
import Alert from "@mui/material/Alert";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

// i18n
import { useTranslation } from "react-i18next";

export default function ShareDialog({ name, description }) {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);

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
    <>
      <RWebShare
        data={{
          text: `Check out ${name} 🚚 - ${description} at`,
          // currently no query params are supported
          url: "https://rainboweats-frtny.mongodbstitch.com/",
          title: "Rainbow Eats",
        }}
        sites={["twitter", "mail", "copy"]}
        onClick={handleClick}
      >
        <Button
          variant="contained"
          disableElevation
          disableRipple
          sx={{ mr: 1, mb: 0.5 }}
          endIcon={<ShareIcon />}
        >
          {t("app.share-dialog.share")}
        </Button>
      </RWebShare>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        TransitionComponent={Slide}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          icon={<ThumbUpAltIcon />}
          elevation={6}
          severity="info"
          sx={{ width: "100%" }}
        >
          {t("app.share-dialog.feedback")}
        </Alert>
      </Snackbar>
    </>
  );
}

ShareDialog.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
};
